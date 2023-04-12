import axios from "axios";

async function getTypes() {
  const URI = `${process.env.NEXT_PUBLIC_API_URL}types`;
  const types = await axios.get(URI);
  return types;
}

const typesService = {
    getTypes
}

export default typesService