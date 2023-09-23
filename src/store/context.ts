import { createContext } from "react";
import { initialState } from "./reducer";
import { Action, ContextType } from "./types";

const Context = createContext<ContextType>({
  state: initialState,
  dispatch: (action: Action) => {}
});

export default Context;