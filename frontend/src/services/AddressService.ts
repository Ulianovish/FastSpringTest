import client from './RequestInterceptor';
import { AddressType } from '../data/types';

export const addAddress = async (email: string, addressData: AddressType): Promise<AddressType> => {
  const response = await client.post<AddressType>(`/addresses/${email}`, addressData);
  return response.data;
};

export const editAddress = async (id: number, addressData: AddressType): Promise<AddressType> => {
  const response = await client.put<AddressType>(`/addresses/edit/${id}`, addressData);
  return response.data;
};

export const getAllAddresses = async (email: string): Promise<AddressType[]> => {
  const response = await client.get<AddressType[]>(`/addresses/all/${email}`);
  return response.data;
};

export const removeAddress = async (id: number): Promise<string> => {
  const response = await client.delete<string>(`/addresses/remove/${id}`);
  return response.data;
};
