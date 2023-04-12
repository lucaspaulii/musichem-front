import { createContext } from "react";

import useLocalStorage from "@/hooks/useLocalStorage";

const ArtistContext = createContext();
export default ArtistContext;

export function ArtistProvider({ children }) {
    const [artistData, setArtistData] = useLocalStorage('artistData', {});

    return (
        <ArtistContext.Provider value={{artistData, setArtistData}}>
            {children}
        </ArtistContext.Provider>
    )
}