import useNearArtist from "@/hooks/useNearArtist";
import { useEffect, useState } from "react";
import styled from "styled-components";
import ArtistCard from "../mainpage/artistCard";
import Image from "next/image";

export default function ResultsSection({ searchParams }) {
  const [nearArtists, setNearArtists] = useState([]);
  const response = useNearArtist();

  useEffect(() => {
    setNearArtists(response.artists);
  }, [response.artistsLoading]);

  return (
    <ResultsContainer>
      <Image
        src={"/images/resultsbg.png"}
        fill
        style={{ objectFit: "cover", zIndex: "100" }}
        quality={50}
      />
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
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ResultsArtists = styled.div`
  z-index: 300;
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

  @media only screen and (max-width: 768px) {
    margin-top: 0;
    h1 {
      width: 90%;
      margin-bottom: 8px;
    }
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

  @media only screen and (max-width: 768px) {
    width: 100%;
    height: 250px;
  }
`;
