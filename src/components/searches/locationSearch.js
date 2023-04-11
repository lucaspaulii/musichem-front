import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";
import { useLoadScript } from "@react-google-maps/api";
import "@reach/combobox/styles.css";
import styled from "styled-components";
import { useEffect } from "react";
import css from "styled-jsx/css";

export default function Places({
  setLocation,
  searchParams,
  setAddress,
  route,
  setFormInfo,
  formInfo,
}) {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_MAPS_KEY,
    libraries: ["places"],
  });

  if (!isLoaded) return <div>Loading...</div>;
  return (
    <PlacesAutocomplete
      setLocation={setLocation}
      searchParams={searchParams}
      setAddress={setAddress}
      route={route ? route : undefined}
      setFormInfo={setFormInfo}
      formInfo={formInfo}
    />
  );
}
function PlacesAutocomplete({
  setLocation,
  searchParams,
  setAddress,
  route,
  setFormInfo,
  formInfo,
}) {
  const {
    ready,
    value,
    setValue,
    suggestions: { status, data },
    clearSuggestions,
  } = usePlacesAutocomplete();

  useEffect(() => {
    if (searchParams) {
      setValue(searchParams.address, false);
    }
  }, []);

  const handleSelect = async (address) => {
    setValue(address, false);
    clearSuggestions();
    const result = await getGeocode({ address });
    const { lat, lng } = getLatLng(result[0]);

    if (route === "auth") {
      formInfo.address = address;
      setFormInfo(formInfo);
    } else {
      setLocation({ lat, lng });
      setAddress(address);
    }
  };

  return (
    <Combobox onSelect={handleSelect}>
      <Input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        disabled={!ready}
        required={true}
        route={route}
        placeholder="Where are you?"
      />
      <ComboboxPopover style={{ zIndex: 3000 }}>
        <ComboboxList>
          {status === "OK" &&
            data.map(({ place_id, description }) => (
              <ComboboxOption key={place_id} value={description} />
            ))}
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
  ${(props) =>
    props.route === "auth"
      ? css`
          width: 24vw !important;
          height: 3vh;

          @media only screen and (max-width: 768px) {
            width: 260px !important;
            height: 30px !important;
          }
        `
      : props.route === "results"
      ? css`
          height: 4vh;
          width: 11vw;
          background-color: #fff;
          color: #000;
          border: 0.5px solid #00000060;
        `
      : css`
          height: 4vh;
          width: 11vw;
          background-color: transparent;
          color: #fff;
          border: 0.5px solid #ffffff60;
          ::placeholder {
            color: #ffffff60;
          }
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
