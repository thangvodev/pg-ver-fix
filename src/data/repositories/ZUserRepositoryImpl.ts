import { ZUser } from "../../core/entities/ZUser";
import { IZUserRepository } from "../../core/repositories/IZUserRepository";
import { createZUserRemoteDataSource } from "../datasources/ZUserRemoteDataSource";

export const createZUserRepository = (): IZUserRepository => {
  const zuserRemoteDataSource = createZUserRemoteDataSource();

  return {
    getPhoneNumber: async (code: string): Promise<ZUser["number"]> => {
      return zuserRemoteDataSource.getPhoneNumber(code);
    },
    getLocation: async (code: any): Promise<ZUser["location"]> => {
      return zuserRemoteDataSource.getLocation(code);
    },
  };
};
