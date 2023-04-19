import axios from "axios";

async function getNearArtists(lat, lng) {
  const URI = `${process.env.NEXT_PUBLIC_API_URL}artists/main/${lat}&${lng}`;
  const nearArtists = await axios.get(URI);
  return nearArtists;
}

async function getSearchedArtists(lat, lng, type, genre) {
  const searchedArtists = await axios.get(
    `${
      process.env.NEXT_PUBLIC_API_URL
    }artists/${lat}&${lng}&${type.toUpperCase()}&${genre.toUpperCase()}`
  );
  return searchedArtists;
}

async function getInfoById(id) {
  const URI = `${process.env.NEXT_PUBLIC_API_URL}artists/id/${id}`;
  const artist = await axios.get(URI);
  return artist;
}

async function getInfoByUserId(token) {
  const URI = `${process.env.NEXT_PUBLIC_API_URL}artists/user`;
  const artist = await axios.get(URI, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return artist;
}

async function createArtist({
  userId,
  artistName,
  coverPicture,
  description,
  youtubeUrl,
  spotifyUrl,
  instagramUrl,
  soundCloudUrl,
  location,
  allowedArea,
  genre,
  type,
  price,
  pictures,
}) {
  const URI = `${process.env.NEXT_PUBLIC_API_URL}artists`;
  const response = await axios.post(URI, {
    userId,
    artistName,
    coverPicture,
    description,
    youtubeUrl,
    spotifyUrl,
    instagramUrl,
    soundCloudUrl,
    location,
    allowedArea,
    genre,
    type,
    price,
    pictures,
  });
  return response.data;
}

const artistService = {
  getNearArtists,
  getSearchedArtists,
  getInfoById,
  getInfoByUserId,
  createArtist,
};

export default artistService;
