// import { TipoEstructura, Composicion } from '../../data/types/types';

import { CrustType, PizzaType, SauceType, SizeType, ToppingType } from '../../data/types';

export function customPizzaReducer(state: customPizzaState, action: Actions): customPizzaState {
  switch (action.type) {
    case 'setSelectedPizza':
      return {
        ...state,
        selectedPizza: action.payload
      };
    case 'setToppings':
      return {
        ...state,
        toppings: action.payload
      };
    case 'setSauces':
      return {
        ...state,
        sauces: action.payload
      };
    case 'setSizes':
      return {
        ...state,
        sizes: action.payload
      };
    case 'setCrusts':
      return {
        ...state,
        crusts: action.payload
      };
    case 'setAddedToppings': {
      const addedToppings = state.addedToppings;
      const topping = action.payload;
      if (addedToppings.find((itm) => itm.name === topping.name)) {
        return {
          ...state,
          addedToppings: addedToppings.filter((itm) => itm.name !== topping.name)
        };
      }
      return {
        ...state,
        addedToppings: [...addedToppings, topping]
      };
    }
    case 'setSelectedSauce':
      return {
        ...state,
        selectedSauce: action.payload
      };
    case 'setSelectedSize':
      return {
        ...state,
        selectedSize: action.payload
      };
    case 'setSelectedCrust':
      return {
        ...state,
        selectedCrust: action.payload
      };
    case 'cleanToppings':
      return {
        ...state,
        addedToppings: [],
        selectedCrust: {} as CrustType,
        selectedSauce: {} as SauceType,
        selectedSize: {} as SizeType
      };
    default:
      return state;
  }
}
export type customPizzaState = {
  selectedPizza: PizzaType;
  toppings: ToppingType[];
  sauces: SauceType[];
  sizes: SizeType[];
  crusts: CrustType[];
  addedToppings: ToppingType[];
  selectedSauce: SauceType;
  selectedSize: SizeType;
  selectedCrust: CrustType;
};

export type ActionsMap = {
  setSelectedPizza: PizzaType;
  setToppings: ToppingType[];
  setSauces: SauceType[];
  setSizes: SizeType[];
  setCrusts: CrustType[];
  setAddedToppings: ToppingType;
  setSelectedSauce: SauceType;
  setSelectedSize: SizeType;
  setSelectedCrust: CrustType;
  cleanToppings: void;
};

export type Actions = {
  [key in keyof ActionsMap]: {
    type: key;
    payload: ActionsMap[key];
  };
}[keyof ActionsMap];
