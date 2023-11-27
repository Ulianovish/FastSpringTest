import { OrderType } from '../data/types';
import client from './RequestInterceptor';

export const createOrder = async (email: string, orderData: OrderType): Promise<OrderType> => {
  const response = await client.post<OrderType>(`/orders/${email}`, orderData);
  return response.data;
};

export const getAllOrders = async (email: string): Promise<OrderType[]> => {
  const response = await client.get<OrderType[]>(`/orders/${email}`);
  return response.data;
};
