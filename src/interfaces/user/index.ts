export interface IUser {
  id: string;
  name: string;
  email: string;
}

export interface IUserCreate {
  name: string;
  email: string;
  password: string;
  age: number;
  created_at: any;
  updated_at: any;
}

export interface IUserLogin {
  email: string;
  password: string;
}
