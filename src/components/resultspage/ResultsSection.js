import useNearArtist from "@/hooks/useNearArtist";
import { useEffect, useState } from "react";
import styled from "styled-components";
import ArtistCard from "../mainpage/artistCard";

export default function ResultsSection({ searchParams }) {
  const [nearArtists, setNearArtists] = useState([]);
  const response = useNearArtist();

  useEffect(() => {
    setNearArtists(response.artists);
  }, [response.artistsLoading]);

  return (
    <ResultsContainer>
      <ResultsArtists>
        <h1>
          There are {nearArtists?.length} {searchParams?.style}{" "}
          {searchParams?.type}s near {searchParams?.address}
        </h1>
        <ArtistsContainer>
          {nearArtists?.length > 0 &&
            nearArtists.map((artist) => (
              <ArtistCard artist={artist} route={"results"} />
            ))}
          {nearArtists?.length > 0 &&
            nearArtists.map((artist) => (
              <ArtistCard artist={artist} route={"results"} />
            ))}
          {nearArtists?.length > 0 &&
            nearArtists.map((artist) => (
              <ArtistCard artist={artist} route={"results"} />
            ))}
        </ArtistsContainer>
      </ResultsArtists>
    </ResultsContainer>
  );
}

const ResultsContainer = styled.div`
  height: 100vh;
  width: 100%;
  background-color: blue;
  background-image: url("/images/resultsbg.png");
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ResultsArtists = styled.div`
  margin-top: 10vh;
  height: 100%;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    color: #fff;
    font-weight: 700;
    font-size: 2.5vh;
    margin-top: 10vh;
    margin-bottom: 10vh;
  }
`;

const ArtistsContainer = styled.div`
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 30vh;
  flex-shrink: 0;
`;
