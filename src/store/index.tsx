import React, {
  createContext,
  Dispatch,
  FunctionComponent,
  useReducer,
} from "react";
import { StoreAction } from "./actions";

interface StoreState {
  test: boolean;
}

const initialStore: StoreState = { test: false };

function reducer(state: StoreState, action: StoreAction) {
  switch (action.type) {
    case "TOGGLE_TEST":
      return { ...state, test: !state.test };
    case "SET_TEST":
      return { ...state, test: action.test };
    default:
      return state;
  }
}

export const StoreContext = createContext<{
  state: StoreState;
  dispatch: Dispatch<StoreAction>;
}>({} as any);

export const StoreProvider: FunctionComponent = (props) => {
  const [state, dispatch] = useReducer(reducer, initialStore);
  const store = { state, dispatch };
  return (
    <StoreContext.Provider value={store}>
      {props.children}
    </StoreContext.Provider>
  );
};
