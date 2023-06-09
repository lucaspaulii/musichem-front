import useNearArtist from "@/hooks/useNearArtist";
import { useEffect, useState } from "react";
import styled from "styled-components";
import ArtistCard from "./artistCard";
import Router from "next/router";

export default function NearYou({ location }) {
  const [nearArtists, setNearArtists] = useState();
  const [loading, setLoading] = useState(true);
  const response = useNearArtist(location.latitude, location.longitude);

  useEffect(() => {
    setNearArtists(response.artists);
  }, [response.artistsLoading]);

  useEffect(() => {
    if (nearArtists) {
      setLoading(false);
    }
  }, [nearArtists]);

  return (
    <NearYouContainer>
      <h1>Near You</h1>
      <ArtistsContainer>
        {loading ? (
          <h2>Loading...</h2>
        ) : (
          nearArtists.data.map((artist, i) => (
            <ArtistCard key={i} artist={artist} index={i} />
          ))
        )}
      </ArtistsContainer>
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
  @media only screen and (max-width: 768px) {
    width: 100%;
    height: 46%;

    h1 {
      font-size: 13px;
      margin-bottom: 9px;
      font-weight: 500;
    }
  }
`;

const ClickableH1 = styled.h1`
  transition: all 0.2s ease-in;
  :hover {
    cursor: pointer;
    transform: scale(1.01);
  }
  margin-top: 1vh;
  text-align: end;

  @media only screen and (max-width: 768px) {
    font-size: 12px;
    margin-top: 5px;
  }
`;

const ArtistsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 30vh;
  background-color: #d9d9d930;
  h2 {
    width: 100%;
    text-align: center;
  }

  @media only screen and (max-width: 768px) {
    flex-wrap: wrap;
    height: 38vh;
    justify-content: space-around;
  }
`;
