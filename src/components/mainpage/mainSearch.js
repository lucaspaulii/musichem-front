import { FaSearch } from "react-icons/fa";
import styled from "styled-components";

export default function MainSearch() {
  return (
    <>
      <form>
        <InputsContainer>
          <InputContainer>
            <p>LOCATION</p>
            <Input width={"9vw"}></Input>
          </InputContainer>
          <InputContainer>
            <p>DATE</p>
            <Input width={"5vw"}></Input>
          </InputContainer>
          <InputContainer>
            <p>MUSICAL STYLE</p>
            <Input width={"9vw"}></Input>
          </InputContainer>
          <InputContainer>
            <p>TYPE</p>
            <Input width={"5vw"}></Input>
          </InputContainer>
          <SearchContainer>
            <SearchIcon size={"2vh"} />
          </SearchContainer>
        </InputsContainer>
      </form>
    </>
  );
}

const InputsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10vh;
  margin-top: 5vh;
`;

const SearchContainer = styled.div`
  margin-top: 2.5vh;
  height: 4vh;
  width: 4vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    margin-bottom: 1vh;
    font-size: 1.5vh;
    font-weight: 700;
    text-shadow: 0px 0px 7px #000000;
  }
`;

const Input = styled.input`
  width: ${(props) => props.width};
  height: 4vh;
  background-color: rgba(266, 266, 266, 0.9);
  border: 1px solid grey;
`;

const SearchIcon = styled(FaSearch)`
color: #000;
filter: drop-shadow(0px 0px 3px #fff);
`;
