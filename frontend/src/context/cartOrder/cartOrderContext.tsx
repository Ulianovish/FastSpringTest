import { createContext, useCallback, useReducer } from 'react';
import { Actions, ActionsMap, cartOrderReducer, cartOrderState } from './cartOrderReducer';
import { AddressType, OrderType } from '../../data/types';

export type Dispatcher = <Type extends Actions['type'], Payload extends ActionsMap[Type]>(
  type: Type,
  ...payload: Payload extends undefined ? [undefined] : [Payload]
) => void;

type CartOrderInterface = readonly [cartOrderState, Dispatcher];

const initialState = {
  order: { price: 0, orderPizza: [] } as OrderType,
  selectedAddres: {} as AddressType
};

export const CartOrderContext = createContext<CartOrderInterface>([
  { ...initialState },
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  () => {}
]);

export function CartOrderProvider({ children }: { children: React.ReactNode }) {
  const [state, _dispatch] = useReducer(cartOrderReducer, { ...initialState });
  const dispatch: Dispatcher = useCallback((type, ...payload) => {
    _dispatch({ type, payload: payload[0] } as Actions);
  }, []);

  return (
    <CartOrderContext.Provider value={[state, dispatch]}>{children}</CartOrderContext.Provider>
  );
}
