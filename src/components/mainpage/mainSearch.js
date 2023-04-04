import Router from "next/router";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import styled from "styled-components";
import css from "styled-jsx/css";
import DatePicker from "../searches/datePicker";
import Places from "../searches/locationSearch";
import MusicalStyleSearch from "../searches/musicalStyleSearch";
import TypeSearch from "../searches/typeSearch";

export default function MainSearch({ route, searchParams }) {
  const [location, setLocation] = useState();
  const [address, setAddress] = useState();
  const [date, setDate] = useState(new Date());
  const [style, setStyle] = useState();
  const [type, setType] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    const submitObj = {
      location,
      date,
      style,
      type,
      address,
    };
    Router.push(`/results/${JSON.stringify(submitObj)}`);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <InputsContainer route={route}>
          <InputContainer route={route}>
            <p>LOCATION</p>
            <Places
              setLocation={setLocation}
              setAddress={setAddress}
              searchParams={
                searchParams
                  ? {
                      address: searchParams.address,
                      location: searchParams.location,
                    }
                  : undefined
              }
            />
          </InputContainer>
          <InputContainer route={route}>
            <p>DATE</p>
            <DatePicker
              setDate={setDate}
              searchParams={searchParams ? searchParams.date : undefined}
            />
          </InputContainer>
          <InputContainer route={route}>
            <p>GENRE</p>
            <MusicalStyleSearch
              setStyle={setStyle}
              searchParams={searchParams ? searchParams.style : undefined}
            />
          </InputContainer>
          <InputContainer route={route}>
            <p>TYPE</p>
            <TypeSearch
              setType={setType}
              searchParams={searchParams ? searchParams.type : undefined}
            />
          </InputContainer>
          <SearchContainer type="submit" route={route}>
            <SearchIcon size={"3vh"} route={route}/>
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
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    ${(props) =>
      props.route === "results"
        ? css`
            margin-top: 30px;
            margin-bottom: 5px;
          `
        : css`
            margin-top: 25px;
            margin-bottom: 25px;
          `}

    padding-right: 60px;
  }
`;

const SearchContainer = styled.button`
  background-color: transparent;
  border: none;
  margin-top: 2.5vh;
  height: 5vh;
  width: 5vh;
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 768px) {
    position: absolute;
    ${(props) =>
      props.route === "results"
        ? css`
            right: 10%;
            top: 100px;
          `
        : css`
            right: 15%;
            top: 21%;
          `}
  }
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  input:hover {
    filter: brightness(90%);
  }
  p {
    ${(props) =>
      props.route === "main"
        ? css`
            text-shadow: 0px 0px 7px #000000;
            color: #ffffff;
            margin-bottom: 1vh;
          `
        : css`
            text-shadow: 0px 0px 4px #ffffff;
            color: #000000;
            margin-bottom: 0.6vh;
          `}

    font-size: 1.5vh;
    font-weight: 700;
  }
  @media only screen and (max-width: 768px) {
    flex-direction: row;
    justify-content: flex-start;
    width: 100%;
    margin-top: 5px;
    p {
      width: 100%;
      text-align: right;
      margin-right: 15px;
    }
  }
`;

const SearchIcon = styled(FaSearch)`
  color: #fff;
  filter: drop-shadow(0px 0px 1px #fff);
  transition: all 0.2s ease-in;
  :hover {
    cursor: pointer;
    transform: scale(1.3);
  }
  @media only screen and (max-width: 768px) {
    
    ${(props) =>
      props.route === "results"
        ? css`
            color: #000;
            filter: drop-shadow(0px 0px 5px #ffffff);
          `
        : css`
            filter: drop-shadow(0px 0px 5px #000);
          `}
  }
`;
