import axios from "axios";

async function getGenres() {
  const URI = `${process.env.NEXT_PUBLIC_API_URL}genres`;
  const genres = await axios.get(URI);
  return genres;
}

const genresService = {
    getGenres
}

export default genresService