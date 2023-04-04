import styled from "styled-components";
import css from "styled-jsx/css";
import Router from "next/router";
import Image from "next/image";

export default function ArtistCard({ artist, route, index }) {
  return (
    <Card
      route={route}
      onClick={(e) => Router.push("/construction")}
      index={index}
    >
      <ImgContainer>
        <Image
          src={artist.coverImg}
          fill
          alt={artist.name}
          style={{ objectFit: "cover" }}
        />
      </ImgContainer>
      <NameInfo route={route}>
        <h3>{artist.name}</h3>
        <h4>{artist.rating.toFixed(1)}★</h4>
      </NameInfo>
      <OtherInfo route={route}>
        <h5>
          {artist.type} / {artist.style.map((s) => ` ${s} `)}
        </h5>
        <h6>Starting from ${artist.price[0].price}</h6>
        <h6>
          <span>{artist.location}</span>
        </h6>
      </OtherInfo>
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
        transform: scale(1.0);
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
  height: 4vh;
  display: flex;
  justify-content: space-between;
  width: 80%;
  h3 {
    font-size: 1.7vh;
    font-weight: 700;
    width: 85%;
  }
  h4 {
    font-weight: 400;
    text-align: end;
    font-size: 1.4vh;
    width: 15%;
  }

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    h3 {
      width: 100%;
    }
  }
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
