import axios from "axios";

async function postBooking(artistPageId, date, token) {
  const URI = `${process.env.NEXT_PUBLIC_API_URL}booking`;
  const nearArtists = await axios.post(
    URI,
    { artistPageId, date },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return nearArtists;
}

const bookingService = {
  postBooking,
};

export default bookingService;
