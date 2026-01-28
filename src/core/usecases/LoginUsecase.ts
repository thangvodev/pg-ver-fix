import { IUserRepository } from "../repositories/IUserRepository";
import { getUserID } from "zmp-sdk/apis";

export const loginUseCase = (userRepository: IUserRepository) => {
  return async (): Promise<any> => {
    const zuId = await getUserID();

    const payload = {
      tenant_id: import.meta.env.VITE_TENANT_ID,
      customapp_id: import.meta.env.VITE_CUSTOM_APP_ID,
      zalo_app_uid: zuId,
      lang_id: 1,
      zalo_device_id: "6251a4461e06429b15e6c1aa4bada564",
      session_id: "",
    };

    try {
      return await userRepository.login(payload);
    } catch (err) {
      throw err;
    }
  };
};
