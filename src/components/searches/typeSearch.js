import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";
import styled from "styled-components";
import "@reach/combobox/styles.css";
import { useEffect, useState } from "react";

export default function TypeSearch({ setType, searchParams }) {
  const [value, setValue] = useState("");
  const [isFilled, setIsFilled] = useState(false);

  useEffect(() => {
    if (searchParams) {
      setValue(searchParams);
      setIsFilled(true);
    }
  }, []);

  const types = ["Acoustic", "Band", "DJ", "Solo", "Duet", "Trio"];

  const handleSelect = (type) => {
    setValue(type);
    setIsFilled(true);
    setType(type);
  };

  return (
    <Combobox onSelect={handleSelect}>
      <Input
        value={value}
        onChange={(e) => {
          setIsFilled(false);
          setValue(e.target.value);
        }}
        required={true}
      />
      <ComboboxPopover hidden={isFilled}>
        <ComboboxList hidden={isFilled}>
          {types.map((type, i) => {
            return <ComboboxOption key={i} value={type} />;
          })}
        </ComboboxList>
      </ComboboxPopover>
    </Combobox>
  );
}

const Input = styled(ComboboxInput)`
  background-color: rgba(266, 266, 266, 0.9);
  padding-left: 1vh;
  padding-right: 1vh;
  border: 1px solid grey;
  height: 4vh;
  width: 5vw;
`;
