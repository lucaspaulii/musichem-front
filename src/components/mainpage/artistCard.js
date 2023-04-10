import styled from "styled-components";
import css from "styled-jsx/css";
import Router from "next/router";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function ArtistCard({ artist, route, index }) {
  const [artistName, setArtistName] = useState();

  useEffect(() => {
    const name = handleArtistName(artist.artistName);
    setArtistName(name)
  }, [])

  const handleArtistName = (artistName) => {
    if (artistName.length > 20) {
      return `${artistName.slice(0, 18)}...`
    } else {
      return artistName
    }
  }

  return (
    <Card
      route={route}
      onClick={(e) => Router.push("/construction")}
      index={index}
    >
      {artist && (
        <>
          <ImgContainer>
            <Image
              src={artist.coverPicture}
              fill
              alt="artist"
              style={{ objectFit: "cover" }}
            />
          </ImgContainer>
          <NameInfo route={route}>
            <h3>{artistName}</h3>
            <h4>{artist.rating.toFixed(1)}★</h4>
          </NameInfo>
          <OtherInfo route={route}>
            <h5>
              {artist.type} / {artist.genre}
            </h5>
            <h6>Starting from ${artist.price}</h6>
            <h6>
              <span>{artist.distance}km away from you</span>
            </h6>
          </OtherInfo>
        </>
      )}
    </Card>
  );
}

const Card = styled.div`
  width: 12.5vw;
  height: 30vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 0.1s ease-in;
  :hover {
    cursor: pointer;
    background-color: rgba(260, 260, 260, 0.3);
  }
  ${(props) =>
    props.route === "results" &&
    css`
      color: #ffffff;
      transform: scale(1.3);
      margin: 5vh;
      flex-shrink: 0;

      @media only screen and (max-width: 768px) {
        transform: scale(1);
        height: 205px !important;
        width: 160px !important;
        margin: 10px;
      }
    `}

  @media only screen and (max-width: 768px) {
    width: 120px;
    height: 110px;
    ${(props) =>
      props.index > 3 &&
      css`
        display: none;
        margin: 0;
      `}
  }
`;

const ImgContainer = styled.div`
  height: 50%;
  border-radius: 1vh;
  overflow: hidden;
  margin-top: 1.5vh;
  margin-bottom: 1.5vh;
  width: 80%;
  position: relative;
  img {
    min-width: 100%;
    max-height: 100%;
  }

  @media only screen and (max-width: 768px) {
    height: 55%;
    margin-bottom: 5px;
  }
`;

const NameInfo = styled.div`
  height: 4.3vh;
  display: flex;
  justify-content: space-between;
  width: 80%;
  h3 {
    font-size: 1.7vh;
    font-weight: 700;
    width: 83%;
  }
  h4 {
    font-weight: 400;
    text-align: end;
    font-size: 1.4vh;
    width: 15%;
  }

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    height: 3.5vh;
    h3 {
      width: 100%;
      font-size: 11px !important;
    }
    h4 {
      font-size: 11px !important;
      margin-bottom: 2px;
    }
  }

  ${(props) =>
    props.route === "results" &&
    css`
    background-color: none;
    h3 {
      font-size: 1.5vh;
    }
    `}
`;

const OtherInfo = styled.div`
  width: 80%;
  font-size: 1.4vh;

  h5 {
    font-weight: 600;
    margin-bottom: 0.8vh;
  }
  h6 {
    font-weight: 200;
    margin-bottom: 0.5vh;
    span {
      font-weight: 400;
    }
  }

  ${(props) =>
    props.route === "results"
      ? css`
          @media only screen and (max-width: 768px) {
           font-size: 10px;
            h6 {
              font-weight: 700;
            }
          }
        `
      : css`
          @media only screen and (max-width: 768px) {
            display: none;
          }
        `}
`;
