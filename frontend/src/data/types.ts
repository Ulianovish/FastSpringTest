export type HookState<T> = {
  data: T;
  isLoading?: boolean;
  error?: boolean;
};

export type PizzaType = {
  id: number;
  name: string;
  price: number;
  image: string;
};

export type ApiResponse<T> = {
  MsgRs: string;
  Data: T;
  //   Meta: MetaData;
};

// Crust type
export type CrustType = {
  id: number;
  name: string;
  price: number;
};

// Sauce type
export type SauceType = {
  id: number;
  name: string;
  price: number;
};

// Size type
export type SizeType = {
  id: number;
  name: string;
  price: number;
};

// Topping type
export type ToppingType = {
  id: number;
  name: string;
  price: number;
  type: string;
  image: string;
};

export type OrderPizzaType = {
  orderId?: number;
  uniqueId?: string;
  pizza: PizzaType;
  quantity: number;
  price: 0;
};

export type OrderType = {
  id?: number;
  orderId?: number;
  orderPizza: OrderPizzaType[];
  price: number;
};

export type AuthInfoType = {
  id: number;
  name: string;
  email: string;
  password?: string;
  phone: string;
  role: string;
  token: string;
};

export type LoginType = {
  email: string;
  password: string;
};

export type SignupType = {
  name: string;
  email: string;
  password: string;
  phone: string;
};

export type AddressType = {
  id: number;
  address: string;
  town: string;
  city: string;
  state: string;
};
