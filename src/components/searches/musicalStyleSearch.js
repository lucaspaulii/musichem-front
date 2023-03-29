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
import musicalStyles from "@/sources/musicStyles";

export default function MusicalStyleSearch() {
  const [value, setValue] = useState("");

  const handleSelect = (style) => {
    setValue(style);
  };

  const handleFilter = (search) => {
    const regexp = new RegExp(search, "i");
    const filteredResult = musicalStyles.filter((style) => regexp.test(style));
    return filteredResult;
  };

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

  return (
    <Combobox onSelect={handleSelect}>
      <Input
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <Popover>
        <ComboboxList>
          {value.length >= 3 &&
            handleFilter(value).map((style, i) => {
              return <ComboboxOption key={i} value={capitalizeFirstLetter(style)} />;
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
  width: 9vw;
`;

const Popover = styled(ComboboxPopover)`
max-height: 50vh;
overflow-y: scroll;
`