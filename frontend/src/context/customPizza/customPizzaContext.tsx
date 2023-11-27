import { createContext, useCallback, useEffect, useReducer } from 'react';
import { Actions, ActionsMap, customPizzaReducer, customPizzaState } from './customPizzaReducer';
import { CrustType, PizzaType, SauceType, SizeType, ToppingType } from '../../data/types';
import useApiCall from '../../hooks/useApiCall';
import { getCrusts, getSauces, getSizes, getToppings } from '../../services/PizzaService';

export type Dispatcher = <Type extends Actions['type'], Payload extends ActionsMap[Type]>(
  type: Type,
  ...payload: Payload extends undefined ? [undefined] : [Payload]
) => void;

type CustomPizzaInterface = readonly [customPizzaState, Dispatcher];

const initialState = {
  selectedPizza: {} as PizzaType,
  toppings: [] as ToppingType[],
  sauces: [] as SauceType[],
  sizes: [] as SizeType[],
  crusts: [] as CrustType[],
  addedToppings: [] as ToppingType[],
  selectedSauce: {} as SauceType,
  selectedSize: {} as SizeType,
  selectedCrust: {} as CrustType
};

export const CustomPizzaContext = createContext<CustomPizzaInterface>([
  { ...initialState },
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  () => {}
]);

export function CustomPizzaProvider({ children }: { children: React.ReactNode }) {
  const [state, _dispatch] = useReducer(customPizzaReducer, { ...initialState });
  // const { auth } = useAuth();
  const dispatch: Dispatcher = useCallback((type, ...payload) => {
    _dispatch({ type, payload: payload[0] } as Actions);
  }, []);

  const saucesData = useApiCall<SauceType[]>(getSauces);
  const crustsData = useApiCall<CrustType[]>(getCrusts);
  const sizesData = useApiCall<SizeType[]>(getSizes);
  const toppingsData = useApiCall<ToppingType[]>(getToppings);

  useEffect(() => {
    if (saucesData.data) {
      dispatch('setSauces', saucesData.data);
    }
  }, [dispatch, saucesData.data]);

  useEffect(() => {
    if (crustsData.data) {
      dispatch('setCrusts', crustsData.data);
    }
  }, [dispatch, crustsData.data]);

  useEffect(() => {
    if (sizesData.data) {
      dispatch('setSizes', sizesData.data);
    }
  }, [dispatch, sizesData.data]);

  useEffect(() => {
    if (toppingsData.data) {
      dispatch('setToppings', toppingsData.data);
    }
  }, [dispatch, toppingsData.data]);

  return (
    <CustomPizzaContext.Provider value={[state, dispatch]}>{children}</CustomPizzaContext.Provider>
  );
}
