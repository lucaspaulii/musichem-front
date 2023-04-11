import axios from "axios";

export async function signUp({ email, password, name, businessName, pictures, address, description }) {
  const URI = `${process.env.NEXT_PUBLIC_API_URL}user`;
  const response = await axios.post(URI, {email, password, name, businessName, pictures, address, description});
  return response.data;
}
