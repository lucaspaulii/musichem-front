import styled from "styled-components";
import background from "../../../public/images/mainpagebg.jpeg";
import { BsPersonCircle } from "react-icons/bs";
import MainSearch from "./mainSearch";
import NearYou from "./nearYou";
import { useState } from "react";
import ProfileModal from "./ProfileModal";
import Router from "next/router";

export default function Cover() {
  const [modal, setModal] = useState(false);

  function handleClick(e) {
    e.preventDefault();
    setModal(!modal);
  }

  return (
    <CoverContainer imgUrl={background.src}>
      <ContentContainer>
        <LogoContainer>
          <img src={"/images/logo.png"} />
        </LogoContainer>
        <MainSearch route={"main"}/>
        <NearYou />
      </ContentContainer>
      <Icon
        size={"3.6vh"}
        onClick={handleClick}
        color={modal ? "#000" : "#FFF"}
      />
      {modal && <ProfileModal modal={modal} setModal={setModal} />}
      <ArtistLink onClick={(e) => Router.push("/construction")}>ARTIST? CLICK HERE</ArtistLink>
    </CoverContainer>
  );
}

const CoverContainer = styled.div`
  height: 100vh;
  width: 100%;
  background-image: url("/images/mainpagebg.jpeg");
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
  z-index: 200;
  top: 5vh;
  left: 7vh;
  transition: all 0.1s ease-in;
  :hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 5vh;

  img {
    height: 15vh;
    width: auto;
    margin-bottom: 1vh;
  }
`;

const ArtistLink = styled.a`
  position: absolute;
  bottom: 5vh;
  left: 5vh;
  font-size: 2vh;
  font-weight: 700;
  transition: all 0.1s ease-in;
  :hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;
