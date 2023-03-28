import styled from "styled-components";
import background from "../../images/mainpagebg.jpeg";
import logo from "../../images/logo.png";
import { BsPersonCircle } from "react-icons/bs";
import MainSearch from "./mainSearch";
import NearYou from "./nearYou";

export default function Cover() {
  return (
    <CoverContainer imgUrl={background.src}>
      <ContentContainer>
        <LogoContainer>
          <img src={logo.src} />
        </LogoContainer>
        <MainSearch />
        <NearYou />
      </ContentContainer>
      <Icon size={"4vh"} />
      <ArtistLink>ARTIST? CLICK HERE</ArtistLink>
    </CoverContainer>
  );
}

const CoverContainer = styled.div`
  height: 100vh;
  width: 100%;
  background-image: url(${(props) => props.imgUrl});
  background-size: cover;
  color: #fff;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  IconType {
    color: red;
  }
`;

const ContentContainer = styled.div`
height: 75%;
width: 70%;
`;

const Icon = styled(BsPersonCircle)`
  position: absolute;
  top: 5vh;
  left: 7vh;
`;

const LogoContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

img {
    height: 15vh;
    width: auto;
    margin-bottom: 1vh;
}
`

const ArtistLink = styled.a`
  position: absolute;
  bottom: 5vh;
  left: 5vh;
  font-size: 2vh;
  font-weight: 700;
`;
