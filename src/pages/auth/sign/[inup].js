import { useRouter } from "next/router";
import Router from "next/router";
import styled from "styled-components";
import Login from "@/components/authpage/Login";
import SingUp from "@/components/authpage/SingUp";

export default function Sign_in() {
  const router = useRouter();
  const { inup } = router.query;

  return (
    <AuthContainer>
      <LeftDiv>
        {inup === "in" && <Login />}
        {inup === "up" && <SingUp />}
      </LeftDiv>
      <RightDiv>
        <img src="/images/logo2.png" onClick={(e) => Router.push("/")} alt="logo"/>
      </RightDiv>
    </AuthContainer>
  );
}

const AuthContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  background-image: linear-gradient(
    to right top,
    #fdaf75,
    #ffac98,
    #fbb0b7,
    #e8b9cc,
    #d5c2d3,
    #c7b8cd,
    #b9aec6,
    #a9a5c0,
    #8f8ab8,
    #7471b0,
    #5658a8,
    #30419f
  );
`;

const RightDiv = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 768px) {
    display: none;
}

  img {
    width: 50%;
    transition: all 0.1s ease-in;
    :hover {
      cursor: pointer;
      transform: scale(1.1);
    }
  }
`;

const LeftDiv = styled.div`
  display: flex;
  justify-content: center;
  font-family: "Montserrat", sans-serif;
  align-items: center;
  width: 50%;
  height: 100%;

  @media only screen and (max-width: 768px) {
    width: 100%; 
}
`;
