import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styled from "styled-components";

export default function DateInput({ setDate, searchParams }) {
  const [startDate, setStartDate] = useState(new Date());

  useEffect(() => {
    if (searchParams) {
      setStartDate(new Date(searchParams));
    }
  }, []);

  return (
    <Picker
      selected={startDate}
      onChange={(date) => {
        setStartDate(date);
        setDate(date);
      }}
    />
  );
}

const Picker = styled(DatePicker)`
  height: 4vh;
  background-color: rgba(266, 266, 266, 0.9);
  border: 1px solid grey;
  text-align: center;
  width: 4vw;

  @media only screen and (max-width: 768px) {
    width: 170px; 
    text-align: left;
    box-sizing: border-box;
    padding-left: 10px;
}
`;
