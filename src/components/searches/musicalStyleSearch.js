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
import musicalStyles from "@/sources/musicStyles";

export default function MusicalStyleSearch({ setStyle, searchParams, route }) {
  const [value, setValue] = useState("");
  const [isFilled, setIsFilled] = useState(false);

  useEffect(() => {
    if (searchParams) {
      setValue(searchParams);
      setIsFilled(true);
    }
  }, []);

  const handleSelect = (style) => {
    setValue(style);
    setIsFilled(true);
    setStyle(style);
  };

  const handleFilter = (search) => {
    const regexp = new RegExp(search, "i");
    const filteredResult = musicalStyles.filter((style) => regexp.test(style));
    return filteredResult;
  };

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <Combobox onSelect={handleSelect}>
      <Input
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          setIsFilled(false);
        }}
        required={true}
        placeholder="Rock, Reggae ..."
        route={route}
      />
      <Popover hidden={isFilled} style={{ zIndex: 3000 }}>
        <ComboboxList hidden={isFilled}>
          {value.length >= 3 &&
            handleFilter(value).map((style, i) => {
              return (
                <ComboboxOption key={i} value={capitalizeFirstLetter(style)} />
              );
            })}
        </ComboboxList>
      </Popover>
    </Combobox>
  );
}

const Input = styled(ComboboxInput)`
  background-color: rgba(266, 266, 266, 0.9);
  padding-left: 1vh;
  padding-right: 1vh;
  border: 1px solid grey;
  height: 4vh;
  width: 7vw;
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

const Popover = styled(ComboboxPopover)`
  max-height: 50vh;
  overflow-y: scroll;
`;
