import useNearArtist from "@/hooks/useNearArtist";
import artistService from "@/services/artistsServices";
import { useEffect, useState } from "react";
import styled from "styled-components";
import ArtistCard from "./artistCard";

export default function NearYou() {
  const [nearArtists, setNearArtists] = useState([]);
  const response = useNearArtist();

  useEffect(() => {
    setNearArtists(response.artists);
  }, [response.artistsLoading]);

  return (
    <NearYouContainer>
      <h1>Near You</h1>
      <ArtistsContainer>
        {nearArtists.length > 0 &&
          nearArtists.map((artist) => <ArtistCard artist={artist} />)}
      </ArtistsContainer>
      <h2>See More...</h2>
    </NearYouContainer>
  );
}

const NearYouContainer = styled.div`
  width: 100%;
  height: 35vh;
  display: flex;
  flex-direction: column;
  margin-top: 7vh;
  h1 {
    width: 100%;
    height: 1.5vh;
    margin-bottom: 1vh;
    font-weight: 700;
  }
  h2 {
    margin-top: 1vh;
    width: 100%;
    height: 1.5vh;
    text-align: end;
    font-weight: 700;
  }
`;

const ArtistsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 30vh;
  background-color: #d9d9d930;
`;
