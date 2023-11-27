import { AuthInfoType } from '../data/types';
import client from './RequestInterceptor';

export const loginUser = async (email?: string, password?: string): Promise<AuthInfoType> => {
  console.log(email, password);
  if (!email || !password) {
    return {} as AuthInfoType;
  }
  const response = await client.post<AuthInfoType>(`/users/login`, { email, password });
  return response.data;
};

export const signupUser = async (
  name?: string,
  email?: string,
  password?: string,
  phone?: string
): Promise<AuthInfoType> => {
  console.log(email, password);
  if (!email || !password) {
    return {} as AuthInfoType;
  }
  const response = await client.post<AuthInfoType>(`/users/signup`, {
    name: name,
    email: email,
    phone: phone,
    password: password
  });
  return response.data;
};
