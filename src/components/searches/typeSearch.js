import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";
import styled, { css } from "styled-components";
import "@reach/combobox/styles.css";
import { useEffect, useState } from "react";

export default function TypeSearch({
  setType,
  searchParams,
  route,
  setFormInfo,
  formInfo,
  field,
}) {
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
    if (route === "artist") {
      const newInfo = { ...formInfo, [field]: type };
      console.log(newInfo);
      setFormInfo(newInfo);
    } else {
      setType(type);
    }
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
        placeholder="Band, DJ ..."
        route={route}
      />
      <ComboboxPopover hidden={isFilled} style={{ zIndex: 3000 }}>
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
    width: 150px;
    background-color: #ffffff90;
    color: #000;
    ::placeholder {
      color: #00000090;
    }
  }
`;
