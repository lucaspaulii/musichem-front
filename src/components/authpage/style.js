import Link from "next/link";

const { default: styled, css } = require("styled-components");

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const AuthContainer = styled.div`
  width: 80%;
  height: 95%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(266, 266, 266, 0.3);
  position: relative;

  ${(props) =>
    props.route === "artist" &&
    css`
      background-color: rgba(188, 198, 218, 0.80) !important;
    `}

  h1 {
    font-weight: 800;
    font-size: 3.5vh;
    margin-bottom: 45px;
  }
`;

export const SubmitButton = styled.button`
  width: 15vh;
  height: 5vh;
  background-color: #f00241;
  border: none;
  border-radius: 2vh;
  font-size: 1.5vh;
  color: #fff;
  font-weight: 700;
  text-shadow: 0px 0px 7px #000000;
  transition: all 0.1s ease-in;
  box-shadow: 0px 0px 10px -3px rgba(0, 0, 0, 0.75);
  :hover {
    cursor: pointer;
    transform: scale(1.1);
  }

  ${(props) =>
    props.route === "artist" &&
    css`
      margin-top: 40px;
      width: 220px;
      height: 60px;
      font-size: 15px !important;
    `}
`;

export const LinkTo = styled(Link)`
  color: #000;
  text-decoration: none;
  margin-top: 4vh;
  width: 60%;

  span {
    font-weight: 700;
  }

  @media only screen and (max-width: 768px) {
    font-size: 13px;
    width: 100%;
    text-align: center;
    margin-bottom: 5px;
  }
`;
