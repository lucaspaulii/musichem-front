import artistService from "@/services/artistsServices";
import useAsync from "./useAsync";

export default function useNearArtist(location) {
  const {
    data: artists,
    loading: artistsLoading,
    error: artistsError,
    act: getNearArtists,
  } = useAsync(() => artistService.getNearArtists(location));

  return {
    artists,
    artistsLoading,
    artistsError,
    getNearArtists,
  };
}
