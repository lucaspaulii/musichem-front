import artistService from "@/services/artistsServices";
import useAsync from "./useAsync";

export default function useNearArtist(lat, lng) {
  const {
    data: artists,
    loading: artistsLoading,
    error: artistsError,
    act: getNearArtists,
  } = useAsync(() => artistService.getNearArtists(lat, lng));

  return {
    artists,
    artistsLoading,
    artistsError,
    getNearArtists,
  };
}
