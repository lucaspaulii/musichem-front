import styled from "styled-components";
import MainSearch from "../mainpage/mainSearch";
import Router from "next/router";
import BackOne from "../authpage/backOne";
import Image from "next/image";

export default function Header({ searchParams }) {
  return (
    <HeaderContainer>
      <BackOne />
      <ImageContainer>
      <Image onClick={(e) => Router.push("/")}
            src={"/images/logo2.png"}
            fill
            style={{ objectFit: "cover", zIndex: "100" }}
            quality={100}
          />
      </ImageContainer>
      <MainSearch route={"results"} searchParams={searchParams} />
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  width: 100%;
  height: 10vh;
  background-color: rgba(266, 266, 266, 0.7);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 500;

  @media only screen and (max-width: 768px) {
    position: relative;
    height: 270px;
    width: 100vw;
  }
`;

const ImageContainer = styled.div`
  cursor: pointer;
    position: absolute;
    width: 138px;
    height: 60%;
    left: 4%;
    top: 20%;
    transition: all 0.1s ease-in;
    :hover {
      transform: scale(1.1);
    }

    @media only screen and (max-width: 768px) {
    top: 12px;
    left: calc(50% - 42px);
    height: 35px;
    width: 100px;
  }
`
