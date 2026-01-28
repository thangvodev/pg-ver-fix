import { ZUser } from "../entities/ZUser";

export interface IZUserRepository {
  getPhoneNumber(payload: any): Promise<ZUser["number"]>;
  getLocation(payload: any): Promise<ZUser["location"]>;
}
