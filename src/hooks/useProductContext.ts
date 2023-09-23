import Context from "@/store/context"
import { ContextType } from "@/store/types";
import { useContext } from "react"

const useProductContext = () => {
  return useContext<ContextType>(Context);
}

export default useProductContext