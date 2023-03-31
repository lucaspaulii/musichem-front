import styled from "styled-components";
import MainSearch from "../mainpage/mainSearch";
import Router from "next/router";

export default function Header({ searchParams }) {
  return (
    <HeaderContainer>
      <img src={"/images/logo2.png"} onClick={(e) => Router.push("/")} />
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

  img {
    cursor: pointer;
    position: absolute;
    height: 60%;
    left: 3%;
    top: 20%;
    transition: all 0.1s ease-in;
    :hover {
      transform: scale(1.1);
    }
  }
`;
