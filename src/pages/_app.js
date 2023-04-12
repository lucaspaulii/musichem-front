import { ArtistProvider } from "@/context/ArtistContext";
import { UserProvider } from "@/context/UserContext";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <UserProvider>
      <ArtistProvider>
        <Component {...pageProps} />
      </ArtistProvider>
    </UserProvider>
  );
}
