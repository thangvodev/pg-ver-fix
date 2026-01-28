import { Policy } from "../entities/Policy";
import { User } from "../entities/User";

export interface IUserRepository {
  login(payload: any): Promise<User>;
  getPolicy(payload: any): Promise<Policy>;
  updatePhoneName(payload: any): Promise<any>;
}
