import styled from "styled-components";
import Places from "../searches/locationSearch";
import Image from "next/image";

export default function Input({ text, type }) {
  return (
    <InputContainer>
      <p>{text}</p>
      {type === "location" ? (
        <Places route="auth" />
      ) : (
        <InputStyled type={type} required />
      )}
      <LogoContainer>
        <Image
          src={"/images/logo2.png"}
          alt="logo"
          fill
          style={{ objectFit: "cover", zIndex: "100" }}
          quality={100}
        />
      </LogoContainer>
    </InputContainer>
  );
}

const InputContainer = styled.div`
  height: 6vh;
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 2vh;
  p {
    width: 100%;
    margin-bottom: 0.3vh;
  }

  input {
    width: 100%;
    height: 4vh;
    background-color: rgba(266, 266, 266, 0.45);
    transition: all 0.1s ease-in;
    border: none;
    :hover {
      background-color: rgba(266, 266, 266, 0.7);
    }
    :focus {
      background-color: rgba(266, 266, 266, 0.8);
    }
    padding-left: 1vh;
    padding-right: 1vh;
  }
  @media only screen and (max-width: 768px) {
    p {
      font-size: 13px;
      margin-bottom: 5px;
    }
  }
`;

const InputStyled = styled.input`
  width: 100%;
  height: 4vh;
  background-color: rgba(266, 266, 266, 0.9);
  padding-left: 1vh;
  padding-right: 1vh;
  border: 1px solid grey;
`;

const LogoContainer = styled.div`
  display: none;
  @media only screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: -50px;
    right: calc(50% - 48px);
    width: 90px;
    height: 30px;
  }
`;
