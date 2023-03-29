import {
    Combobox,
    ComboboxInput,
    ComboboxPopover,
    ComboboxList,
    ComboboxOption,
  } from "@reach/combobox";
  import styled from "styled-components";
  import "@reach/combobox/styles.css";
  import { useState } from "react";
  
  export default function TypeSearch() {
    const [value, setValue] = useState("");

    const types = ["Acoustic", "Band", "DJ", "Solo", "Duet", "Trio"]
  
    const handleSelect = (style) => {
      setValue(style);
    };
  
    return (
      <Combobox onSelect={handleSelect}>
        <Input
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <ComboboxPopover>
          <ComboboxList>
            {
              types.map((type, i) => {
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