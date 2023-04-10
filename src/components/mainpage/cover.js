import styled from "styled-components";
import background from "../../../public/images/mainpagebg.jpeg";
import { BsPersonCircle } from "react-icons/bs";
import MainSearch from "./mainSearch";
import NearYou from "./nearYou";
import { useEffect, useState } from "react";
import ProfileModal from "./ProfileModal";
import Router from "next/router";
import Image from "next/image";

export default function Cover() {
  const [modal, setModal] = useState(false);
  const [location, setLocation] = useState(undefined);

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(({ coords }) => {
        const { latitude, longitude } = coords;
        setLocation({ latitude, longitude });
      });
    } else {
      setLocation({ latitude: -27.5935, longitude: -48.55854 });
    }
  }, []);

  function handleClick(e) {
    e.preventDefault();
    setModal(!modal);
  }

  return (
    <CoverContainer>
      <Image
        src={"/images/mainpagebg.jpeg"}
        fill
        style={{ objectFit: "cover", zIndex: "100" }}
        quality={50}
        alt = "stage"
      />
      <ContentContainer>
        <LogoContainer>
          <Image
            src={"/images/logo.png"}
            fill
            style={{ objectFit: "cover", zIndex: "100" }}
            quality={100}
            alt="logo"
          />
        </LogoContainer>
        <MainSearch route={"main"} />
        {location && <NearYou location={location} />}
      </ContentContainer>
      <Icon
        size={"3.6vh"}
        onClick={handleClick}
        color={modal ? "#000" : "#FFF"}
      />
      {modal && <ProfileModal modal={modal} setModal={setModal} />}
      <ArtistLink onClick={(e) => Router.push("/construction")}>
        ARTIST? CLICK HERE
      </ArtistLink>
    </CoverContainer>
  );
}

const CoverContainer = styled.div`
  height: 100vh;
  width: 100%;
  background-size: cover;
  color: #fff;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ContentContainer = styled.div`
  height: 75%;
  width: 70%;
  z-index: 300;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 768px) {
    height: 90%;
  }
`;

const Icon = styled(BsPersonCircle)`
  position: absolute;
  z-index: 1200;
  top: 5vh;
  left: 7vh;
  transition: all 0.1s ease-in;
  :hover {
    cursor: pointer;
    transform: scale(1.1);
  }
  @media only screen and (max-width: 768px) {
    top: 17px;
    left: 17px;
  }
`;

const LogoContainer = styled.div`
  margin-bottom: 5vh;
  width: 8vw;
  height: 7vw;
  margin-bottom: 2vh;
  position: relative;

  @media only screen and (max-width: 768px) {
    position: absolute;
    top: 20px;
    left: calc(50% - 50px);
    width: 100px;
    height: 80px;
  }
`;

const ArtistLink = styled.a`
  position: absolute;
  bottom: 5vh;
  left: 5vh;
  font-size: 2vh;
  font-weight: 700;
  z-index: 400;
  transition: all 0.1s ease-in;
  :hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;
