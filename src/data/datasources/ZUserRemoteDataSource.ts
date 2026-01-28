import { ZUser } from "../../core/entities/ZUser";
import api from "../services/apiZClient";
import { getAccessToken, getUserID } from "zmp-sdk/apis";

export const createZUserRemoteDataSource = () => ({
  getPhoneNumber: async (code: string): Promise<ZUser["number"]> => {
    const access_token = await getAccessToken();
    const secret_key = import.meta.env.VITE_APP_SECRET;

    try {
      const route = `https://graph.zalo.me/v2.0/me/info`;

      const res = await api.get(route, {
        headers: { access_token, secret_key, code },
      });
      return res?.data?.data?.number;
    } catch (error) {
      throw error;
    }
  },
  getLocation: async (code: string): Promise<ZUser["location"]> => {
    const access_token = await getAccessToken();
    const secret_key = import.meta.env.VITE_APP_SECRET;

    try {
      const route = `https://graph.zalo.me/v2.0/me/info`;

      const res = await api.get(route, {
        headers: { access_token, secret_key, code },
      });
      return res?.data?.data;
    } catch (error) {
      throw error;
    }
  },
});
