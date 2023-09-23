import useProductContext from './useProductContext';

const useData = () => {
  const {
    state: { data }
  } = useProductContext();

  return data;
}

export default useData