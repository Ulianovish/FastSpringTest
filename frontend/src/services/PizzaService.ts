import { CrustType, PizzaType, SauceType, SizeType, ToppingType } from '../data/types';
import client from './RequestInterceptor';

export const getPizzas = async (): Promise<PizzaType[]> => {
  const response = await client.get<PizzaType[]>(`/pizzas`);
  return response.data;
};

export const getCrusts = async (): Promise<CrustType[]> => {
  const response = await client.get<CrustType[]>(`/crusts`);
  return response.data;
};

export const getSauces = async (): Promise<SauceType[]> => {
  const response = await client.get<SauceType[]>(`/sauces`);
  return response.data;
};

export const getSizes = async (): Promise<SizeType[]> => {
  const response = await client.get<SizeType[]>(`/sizes`);
  return response.data;
};

export const getToppings = async (): Promise<ToppingType[]> => {
  const response = await client.get<ToppingType[]>(`/toppings`);
  return response.data;
};
