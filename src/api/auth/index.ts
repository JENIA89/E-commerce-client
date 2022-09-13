import { api } from "api";
import { AxiosPromise } from "axios";
import { EndpointEnum, ILoginModel, IRegister } from "./types";

export const register = (dto: IRegister): AxiosPromise =>
  api.post(EndpointEnum.REGISTER, dto);
export const login = (dto: ILoginModel): AxiosPromise =>
  api.post(EndpointEnum.LOGIN, dto);
export const profile = (): AxiosPromise => api.get(EndpointEnum.PROFILE);
