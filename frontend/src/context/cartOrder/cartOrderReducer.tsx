import { AddressType, OrderPizzaType, OrderType } from '../../data/types';

export function cartOrderReducer(state: cartOrderState, action: Actions): cartOrderState {
  switch (action.type) {
    case 'setOrder':
      return {
        ...state,
        order: action.payload
      };
    case 'setOrderToCart': {
      const order = state.order;
      const orderPizza = state.order.orderPizza;
      const newOrderPizza = action.payload;
      console.log('ERROR 1');
      return {
        ...state,
        order: {
          ...order,
          orderPizza: [...orderPizza, newOrderPizza],
          price: newOrderPizza.price * newOrderPizza.quantity + order.price
        }
      };
    }
    case 'changeQuantity': {
      const order = state.order;
      const orderPizza = state.order.orderPizza;
      const { index, quantity } = action.payload;
      const newOrderPizza = orderPizza[index];
      order.price =
        quantity > order.orderPizza[index].quantity
          ? order.price + newOrderPizza.price
          : quantity < order.orderPizza[index].quantity
          ? order.price - newOrderPizza.price
          : order.price;
      order.orderPizza[index].quantity = quantity;
      return {
        ...state,
        order: {
          ...order
        }
      };
    }
    case 'removeItem': {
      const order = state.order;
      const orderPizza = state.order.orderPizza;
      const index = action.payload;
      const newOrderPizza = orderPizza[index];
      // console.log(index, order);
      console.log('ERROR 3');
      return {
        ...state,
        order: {
          ...order,
          orderPizza: orderPizza.filter((itm, i) => i !== index),
          price: order.price - newOrderPizza.price * newOrderPizza.quantity
        }
      };
    }
    case 'setSelectedAddress':
      return {
        ...state,
        selectedAddres: action.payload
      };
    default:
      return state;
  }
}
export type cartOrderState = {
  order: OrderType;
  selectedAddres: AddressType;
};

export type ActionsMap = {
  setOrder: OrderType;
  setOrderToCart: OrderPizzaType;
  changeQuantity: { index: number; quantity: number };
  removeItem: number;
  setSelectedAddress: AddressType;
};

export type Actions = {
  [key in keyof ActionsMap]: {
    type: key;
    payload: ActionsMap[key];
  };
}[keyof ActionsMap];
