import { MdArrowBack } from "react-icons/md";
import Router from "next/router";
import styled from "styled-components";

export default function BackOne() {
  return <ArrowBack onClick={(e) => Router.back()} size={"4.5vh"} />;
}

const ArrowBack = styled(MdArrowBack)`
  color: #fff;
  position: absolute;
  top: 3vh;
  left: 3vh;
  transition: all 0.1s ease-in;
  :hover {
    transform: scale(1.2) translateX(-1.5vh);
    cursor: pointer;
  }
`;
