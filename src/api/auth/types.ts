export enum EndpointEnum {
  LOGIN = "/auth/login",
  REGISTER = "/auth/register",
  PROFILE = "/auth/profile",
}

export interface ILoginModel {
  username: string;
  password: string;
}

export interface IRegister extends ILoginModel {
  email: string;
}
