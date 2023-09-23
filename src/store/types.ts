import { Product } from "@/data/products";
import { Dispatch } from "react";

export enum ActionType {
  SET_SEARCH,
  SET_DATA
}

export interface State {
  search: string;
  data: Product[];
}

export interface Action {
  type: ActionType;
  payload: string | Product[];
}

export type ContextType = {
  state: State;
  dispatch: Dispatch<Action>
}