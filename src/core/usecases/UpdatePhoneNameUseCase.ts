import { IUserRepository } from "../repositories/IUserRepository";
import { IZUserRepository } from "../repositories/IZUserRepository";
import { getPhoneNumber, getUserInfo } from "zmp-sdk/apis";

export const updatePhoneNameUseCase = (
  userRepository: IUserRepository,
  zuserRepository: IZUserRepository,
) => {
  return async (): Promise<any> => {
    const { token } = await getPhoneNumber();
    const { userInfo } = await getUserInfo({
      autoRequestPermission: true,
    });
    const phone = await zuserRepository.getPhoneNumber(token);

    const payload = {
      tenant_id: import.meta.env.VITE_TENANT_ID,
      customapp_id: import.meta.env.VITE_CUSTOM_APP_ID,
      phone: phone,
      name: userInfo.name,
      zalo_uimage: userInfo.avatar,
      zalooa_uid: "",
      lang_id: 1,
    };

    try {
      return await userRepository.updatePhoneName(payload);
    } catch (err) {
      throw err;
    }
  };
};
