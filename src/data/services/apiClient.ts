import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";
import { createUserRepository } from "../repositories/UserRepositoryImpl";
import { loginUseCase } from "../../core/usecases/LoginUsecase";
import { getAccessToken as getZuAccessToken, getUserID } from "zmp-sdk/apis";

// =====================
// 🔧 Config constants
// =====================
const API_BASE = import.meta.env.VITE_API_BASE || "";

// =====================
// 🧩 Interfaces
// =====================
interface FailedRequest {
  resolve: (token: string) => void;
  reject: (err: AxiosError) => void;
}

// =====================
// 🧩 Token helpers
// =====================
function getAccessToken(): string | null {
  return localStorage.getItem("accessToken");
}

function saveAccessToken(token: string) {
  localStorage.setItem("accessToken", token);
}

function clearAccessToken() {
  localStorage.removeItem("accessToken");
}

// =====================
// 🏗️ Create Axios instance
// =====================
const api: AxiosInstance = axios.create({
  baseURL: API_BASE,
  timeout: 120000,
});

// =====================
// 🧠 Refresh/login queue logic
// =====================
let isLoggingIn = false;
let failedQueue: FailedRequest[] = [];

const processQueue = (
  error: AxiosError | null,
  token: string | null = null,
) => {
  failedQueue.forEach((prom) => {
    if (error) prom.reject(error);
    else if (token) prom.resolve(token);
  });
  failedQueue = [];
};

// =====================
// 📨 Request interceptor
// =====================
api.interceptors.request.use(
  async (
    config: InternalAxiosRequestConfig,
  ): Promise<InternalAxiosRequestConfig> => {
    const token = getAccessToken();
    config.headers.set("lang_id", `1`);
    if (token) {
      config.headers.set("Authorization", `Bearer ${token}`);
    }
    return config;
  },
  (error: AxiosError) => Promise.reject(error),
);

// =====================
// 📬 Response interceptor
// =====================
api.interceptors.response.use(
  (response: AxiosResponse) => response,
  async (error: AxiosError) => {
    const originalRequest = error.config as AxiosRequestConfig & {
      _retry?: boolean;
    };

    // ⛔ Bỏ qua nếu là API login
    if (originalRequest?.url?.includes("auth/sso-callback")) {
      return Promise.reject(error);
    }

    // 🧠 Nếu 401 → gọi lại login
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      // Nếu đang login lại → chờ
      if (isLoggingIn) {
        return new Promise((resolve, reject) => {
          failedQueue.push({
            resolve: (token) => {
              if (originalRequest.headers) {
                (originalRequest.headers as any).set(
                  "Authorization",
                  `Bearer ${token}`,
                );
              }
              resolve(api(originalRequest));
            },
            reject,
          });
        });
      }

      isLoggingIn = true;

      try {
        const repo = createUserRepository();
        const login = loginUseCase(repo);
        const res = await login();
        const zuToken = await getZuAccessToken();
        const zuId = await getUserID();
        const newToken = res?.result?.access_token;
        if (!newToken) throw new Error("Không lấy được access_token mới");

        // ✅ Lưu token mới
        saveAccessToken(newToken);
        api.defaults.headers.common["Authorization"] = `Bearer ${newToken}`;
        api.defaults.headers.common["zuToken"] = `${zuToken}`;
        api.defaults.headers.common["zuId"] = `${zuId}`;

        // 🔔 Báo cho các request đang chờ
        processQueue(null, newToken);

        // ✅ Retry request ban đầu
        if (originalRequest.headers) {
          (originalRequest.headers as any).set(
            "Authorization",
            `Bearer ${newToken}`,
          );
        }

        return api(originalRequest);
      } catch (err) {
        console.error("❌ LoginUseCase thất bại:", err);
        processQueue(err as AxiosError, null);
        clearAccessToken();
        return Promise.reject(err);
      } finally {
        isLoggingIn = false;
      }
    }

    // Không phải lỗi 401
    return Promise.reject(error);
  },
);

export default api;
