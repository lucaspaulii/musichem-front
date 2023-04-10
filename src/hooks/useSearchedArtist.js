import artistService from "@/services/artistsServices";
import useAsync from "./useAsync";

export default function useSearchedArtist(lat, lng, type, genre) {
  const {
    data: artists,
    loading: artistsLoading,
    error: artistsError,
    act: getSearchedArtists,
  } = useAsync(() => artistService.getSearchedArtists(lat, lng, type, genre));

  return {
    artists,
    artistsLoading,
    artistsError,
    getSearchedArtists,
  };
}
