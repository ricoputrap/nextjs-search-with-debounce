import { ProductResponse } from "@/pages/api/product";
import { ActionType } from "@/store/types";
import { useRouter } from "next/router";
import { useEffect } from "react";
import useProductContext from "./useProductContext"

const useFetchData = () => {
  const {
    state: { search },
    dispatch
  } = useProductContext();
  const { basePath } = useRouter();

  useEffect(() => {
    let URL = basePath + "/api/product";
    
    if (search) URL += `?search=${search}`;

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
  }, [search]);
}

export default useFetchData