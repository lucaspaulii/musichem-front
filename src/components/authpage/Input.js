import styled from "styled-components";
import Places from "../searches/locationSearch";

export default function Input({ text, type }) {
  return (
    <InputContainer>
      <h1>{text}</h1>
      {type === "location" ? (
        <Places route="auth" />
      ) : (
        <InputStyled type={type} required/>
      )}
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
  h1 {
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
`;

const InputStyled = styled.input`
  width: 100%;
  height: 4vh;
  background-color: rgba(266, 266, 266, 0.9);
  padding-left: 1vh;
  padding-right: 1vh;
  border: 1px solid grey;
`;