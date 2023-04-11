import styled from "styled-components";
import Places from "../searches/locationSearch";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Input({ text, type, setFormInfo, formInfo, field }) {
  const [placeHolder, setPlaceHolder] = useState(undefined);

  useEffect(() => {
    text == "DESCRIPTION" &&
      setPlaceHolder("How you want the artists to know you?");
    text == "EMAIL" && setPlaceHolder("johndoe@johndoe.com");
    text == "NAME" && setPlaceHolder("Your personal name here!");
    text == "PASSWORD" && setPlaceHolder("Keep it safe!");
    text == "CONFIRM PASSWORD" &&
      setPlaceHolder("Type you password to confirm it!");
    text == "PICTURE" &&
      setPlaceHolder(
        "A beautiful image URL that shows you or your place! (optional)"
      );
    text == "BUSINESS NAME" &&
      setPlaceHolder("How is your place called? (for business only)");
  }, []);

  function handleChange(e) {
    if (field == "pictures") {
      formInfo.pictures = [];
      formInfo.pictures[0] = e.target.value;
      setFormInfo(formInfo);
      return;
    }
    const newInfo = { ...formInfo, [field]: e.target.value };
    setFormInfo(newInfo);
  }

  return (
    <InputContainer>
      <p>{text}</p>
      {type === "location" ? (
        <Places route="auth" setFormInfo={setFormInfo} formInfo={formInfo} />
      ) : (
        <InputStyled
          type={type}
          required
          placeholder={placeHolder}
          onChange={handleChange}
        />
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
      width: 260px;
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

  @media only screen and (max-width: 768px) {
    width: 260px !important;
    height: 30px !important;
  }
`;

const LogoContainer = styled.div`
  display: none;
  @media only screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 5px;
    right: calc(50% - 30px);
    width: 60px;
    height: 20px;
  }
`;
