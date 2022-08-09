export interface ILoginModel {
  username: string;
  password: string;
}

export interface IRegister extends ILoginModel {
  email: string;
}

export interface IUser {
  username: string;
  _id?: string
}
