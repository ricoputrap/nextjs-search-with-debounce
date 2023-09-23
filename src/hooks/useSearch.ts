import { ActionType } from "@/store/types";
import useProductContext from "./useProductContext";

const useSearch = () => {
  const {
    state: { search },
    dispatch
  } = useProductContext();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: ActionType.SET_SEARCH,
      payload: event.target.value
    })
  }

  return { search, handleChange }
}

export default useSearch