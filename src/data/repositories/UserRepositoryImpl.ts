import { Policy } from "../../core/entities/Policy";
import { User } from "../../core/entities/User";
import { IUserRepository } from "../../core/repositories/IUserRepository";
import { createUserRemoteDataSource } from "../datasources/UserRemoteDataSource";

export const createUserRepository = (): IUserRepository => {
  const userRemoteDataSource = createUserRemoteDataSource();

  return {
    login: async (payload: any): Promise<User> => {
      return userRemoteDataSource.login(payload);
    },
    getPolicy: async (params: any): Promise<Policy> => {
      return userRemoteDataSource.getPolicy(params);
    },
    updatePhoneName: async (params: any): Promise<any> => {
      return userRemoteDataSource.updatePhoneName(params);
    },
  };
};
