import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styled, { css } from "styled-components";

export default function DateInput({ setDate, searchParams, route }) {
  const [startDate, setStartDate] = useState();
  const [placeholder, setPlaceholder] = useState();

  useEffect(() => {
    if (searchParams) {
      setStartDate(new Date(searchParams));
    }
    const date = new Date();
    setPlaceholder(((date.getMonth() > 8) ? (date.getMonth() + 1) : ('0' + (date.getMonth() + 1))) + '/' + ((date.getDate() > 9) ? date.getDate() : ('0' + date.getDate())) + '/' + date.getFullYear())
  }, []);

  return (
    <Picker
      selected={startDate}
      required
      onChange={(date) => {
        setStartDate(date);
        setDate(date);
      }}
      route={route}
      placeholderText={placeholder}
      minDate={new Date()}
    />
  );
}

const Picker = styled(DatePicker)`
  height: 4vh;
  background-color: rgba(266, 266, 266, 0.9);
  border: 1px solid grey;
  text-align: center;
  width: 5vw;
  background-color: transparent;
  color: #fff;
  border: 0.5px solid #ffffff60;
  ::placeholder {
            color: #ffffff60;
          }

  ${(props) =>
    props.route === "results" &&
    css`
      background-color: #fff;
      color: #000;
      border: 0.5px solid #00000060;
    `}

  @media only screen and (max-width: 768px) {
    width: 165px; 
    text-align: left;
    box-sizing: border-box;
    padding-left: 10px;
    background-color: #ffffff90;
    color: #000;
    ::placeholder {
      color: #00000090;
    }
}
`;
