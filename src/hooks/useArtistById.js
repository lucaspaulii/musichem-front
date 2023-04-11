import artistService from "@/services/artistsServices";
import useAsync from "./useAsync";

export default function useArtistById(id) {
  const {
    data: artist,
    loading: artistLoading,
    error: artistError,
    act: getArtistById,
  } = useAsync(() => artistService.getInfoById(id));

  return {
    artist,
    artistLoading,
    artistError,
    getArtistById,
  };
}
