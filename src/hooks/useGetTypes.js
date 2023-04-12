import typesService from "@/services/typeServices";
import useAsync from "./useAsync";

export default function useGetTypes() {
  const {
    data: types,
    loading: typesLoading,
    error: typesError,
    act: getTypes,
  } = useAsync(() => typesService.getTypes);

  return {
    types,
    typesLoading,
    typesError,
    getTypes,
  };
}