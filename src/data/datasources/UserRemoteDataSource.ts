import { Policy } from "../../core/entities/Policy";
import { User } from "../../core/entities/User";
import api from "../services/apiClient";
import { getAccessToken, getUserID } from "zmp-sdk/apis";

export const createUserRemoteDataSource = () => ({
  login: async (payload: any): Promise<User> => {
    const zuToken = await getAccessToken();
    const zuId = await getUserID();

    try {
      const route = `/api/v1/custom-app/zalo/consumer/auth/login`;

      const res = await api.post(route, payload, {
        headers: { zuToken, zuId },
      });
      return res?.data;
    } catch (error) {
      throw error;
    }
  },
  getPolicy: async (params: any): Promise<Policy> => {
    try {
      const route = `/api/v1/custom-app/zalo/customapp-config/consumer/by-key/view`;

      const res = await api.get(route, { params: params });
      return res?.data;
    } catch (error) {
      throw error;
    }
  },
  updatePhoneName: async (payload: any): Promise<Policy> => {
    const zuToken = await getAccessToken();
    const zuId = await getUserID();

    try {
      const route = `/api/v1/custom-app/zalo/consumer/consumer/phone-name/update`;

      const res = await api.post(route, payload, {
        headers: { zuToken, zuId },
      });
      return res?.data;
    } catch (error) {
      throw error;
    }
  },
});
