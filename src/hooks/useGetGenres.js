import useAsync from "./useAsync";
import genresService from "@/services/genreServices";

export default function useGetGenres() {
  const {
    data: genres,
    loading: genresLoading,
    error: genresError,
    act: getGenres,
  } = useAsync(() => genresService.getGenres);

  return {
    genres,
    genresLoading,
    genresError,
    getGenres,
  };
}
