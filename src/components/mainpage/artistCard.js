import styled from "styled-components";
import css from "styled-jsx/css";
import Router from "next/router";

export default function ArtistCard({ artist, route }) {
  return (
    <Card route={route} onClick={(e) => Router.push("/construction")}>
      <ImgContainer>
        <img src={artist.coverImg} />
      </ImgContainer>
      <NameInfo>
        <h3>{artist.name}</h3>
        <h4>{artist.rating.toFixed(1)}★</h4>
      </NameInfo>
      <OtherInfo>
        <h5>
          {artist.type} / {artist.style.map((s) => ` ${s} `)}
        </h5>
        <h6>Starting from ${artist.price[0].price}</h6>
        <h7>{artist.location}</h7>
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
  ${(props) => props.route === "results" && css`
  color: #ffffff;
  transform: scale(1.3);
  margin: 5vh;
  flex-shrink: 0;
  `}
`;

const ImgContainer = styled.div`
  height: 50%;
  border-radius: 1vh;
  overflow: hidden;
  margin-top: 1.5vh;
  margin-bottom: 1.5vh;
  width: 80%;
  img {
    min-width: 100%;
    max-height: 100%;
  }
`;

const NameInfo = styled.div`
  height: 4vh;
  display: flex;
  justify-content: space-between;
  width: 80%;
  h3 {
    font-size: 1.5vh;
    font-weight: 700;
    width: 85%;
  }
  h4 {
    font-weight: 400;
    text-align: end;
    font-size: 1.2vh;
    width: 15%;
  }
`;

const OtherInfo = styled.div`
  width: 80%;
  font-size: 1.2vh;

  h5 {
    font-weight: 600;
    margin-bottom: 0.8vh;
  }
  h6 {
    font-weight: 200;
    margin-bottom: 0.5vh;
  }
  h7 {
    font-weight: 300;
  }
`;
