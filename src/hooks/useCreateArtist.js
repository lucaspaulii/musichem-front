import useAsync from './useAsync';
import artistService from '@/services/artistsServices';

export default function useCreateArtist() {
  const {
    loading: createArtistLoading,
    error: createArtistError,
    act: createArtist,
  } = useAsync(artistService.createArtist, false);

  return {
    createArtistLoading,
    createArtistError,
    createArtist,
  };
}