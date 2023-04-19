import axios from "axios";

export async function signIn({ email, password }) {
  const URI = `${process.env.NEXT_PUBLIC_API_URL}auth/sign-in`;
  const response = await axios.post(URI, { email, password });
  return response.data;
}

export async function signOutService({ token }) {
  const URI = `${process.env.NEXT_PUBLIC_API_URL}auth/sign-out`;
  const response = await axios.post(URI, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}
