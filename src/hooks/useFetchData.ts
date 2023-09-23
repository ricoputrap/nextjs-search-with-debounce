import { ProductResponse } from "@/pages/api/product";
import { ActionType } from "@/store/types";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDebounce } from "use-debounce";
import useProductContext from "./useProductContext"

const useFetchData = () => {
  const { basePath } = useRouter();

  const {
    state: { search },
    dispatch
  } = useProductContext();

  /**
   * `searchValue` will be updated after 0.5 second
   * after the user typed the last character
   */
  const [searchValue] = useDebounce(search, 500);

  useEffect(() => {
    let URL = basePath + "/api/product";
    
    if (searchValue) URL += `?search=${searchValue}`;

    fetch(URL)
      .then((res) => res.json())
      .then((res: ProductResponse) => {
        dispatch({
          type: ActionType.SET_DATA,
          payload: res.data
        });
      })
      .catch((error) => {
        alert(`Failed fetch data. Error: ${error}`);
      });
  }, [searchValue]);
}

export default useFetchData