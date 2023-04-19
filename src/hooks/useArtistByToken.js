import artistService from "@/services/artistsServices";
import useAsync from "./useAsync";

export default function useArtistByToken(token) {
  const {
    data: artist,
    loading: artistLoading,
    error: artistError,
    act: getArtistByToken,
  } = useAsync(() => artistService.getInfoByUserId(token));

  return {
    artist,
    artistLoading,
    artistError,
    getArtistByToken,
  };
}