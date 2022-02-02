import HttpService from "../services/HttpService";
import { AxiosResponse } from "axios";
import User from "@/models/User";

export class AuthRepo {
  /**
   * @description Login User
   * @param {string} name : User name
   * @param {string} password : User password
   */
  public async login(name: string, password: string): Promise<AxiosResponse> {
    return await HttpService.post("[login]", {
      name: name,
      password: password
    });
  }

  /**
   * @description Register User
   * @param {User} user : User
   */
  public async register(user: User): Promise<AxiosResponse> {
    return await HttpService.post("[register]", { user: user });
  }
}

export default new AuthRepo();
