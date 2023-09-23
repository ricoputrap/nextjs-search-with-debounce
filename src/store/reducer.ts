import { Product } from "@/data/products";
import { Action, ActionType, State } from "./types";

export const initialState: State = {
  search: "",
  data: []
}

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case ActionType.SET_SEARCH:
      return {
        ...state,
        search: action.payload as string
      }

    case ActionType.SET_DATA:
      return {
        ...state,
        data: action.payload as Product[]
      }

    default:
      return state;
  }
}