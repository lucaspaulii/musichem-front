import bookingService from '@/services/bookingService';
import useAsync from './useAsync';

export default function useCreateBooking() {
  const {
    loading: createBookingLoading,
    error: createBookingError,
    act: createBooking,
  } = useAsync(bookingService.postBooking, false);

  return {
    createBookingLoading,
    createBookingError,
    createBooking,
  };
}