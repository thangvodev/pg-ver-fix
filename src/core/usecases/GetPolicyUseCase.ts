import { IUserRepository } from "../repositories/IUserRepository";

export const getPolicyUseCase = (userRepository: IUserRepository) => {
  return async (): Promise<any> => {
    const params = {
      tenant_id: import.meta.env.VITE_TENANT_ID,
      customapp_id: import.meta.env.VITE_CUSTOM_APP_ID,
      key: "config.rule.thele",
      lang_id: 1,
    };

    try {
      return await userRepository.getPolicy(params);
    } catch (err) {
      throw err;
    }
  };
};
