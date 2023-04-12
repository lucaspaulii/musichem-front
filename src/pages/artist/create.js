import Input from "@/components/authpage/Input";
import BackOne from "@/components/authpage/backOne";
import { AuthContainer, Form, SubmitButton } from "@/components/authpage/style";
import useCreateArtist from "@/hooks/useCreateArtist";
import Image from "next/image";
import { useContext, useState } from "react";
import styled from "styled-components";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UserContext from "@/context/UserContext";
import ArtistContext from "@/context/ArtistContext";
import Router from "next/router";

export default function CreateArtist() {
  const [formInfo, setFormInfo] = useState({
    artistName: undefined,
    coverPicture: undefined,
    description: undefined,
    youtubeUrl: undefined,
    spotifyUrl: undefined,
    instagramUrl: undefined,
    soundCloudUrl: undefined,
    location: {
      type: "Point",
      coordinates: [],
    },
    allowedArea: undefined,
    genre: undefined,
    type: undefined,
    price: undefined,
    pictures: [],
  });
  const { userData } = useContext(UserContext);
  const { setArtistData } = useContext(ArtistContext);
  const { createArtistLoading, createArtist } = useCreateArtist();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      console.log(formInfo);
      console.log(userData);
      const submitForm = { ...formInfo, userId: userData.user.id };
      console.log(submitForm);
      const artistData = await createArtist(submitForm);
      setArtistData(artistData);
      toast.success("Artist page created successfuly!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      setTimeout(() => {
        Router.back();
      }, 3000);
    } catch (error) {
      console.log(error);
      toast.error("something went wrong", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  }

  return (
    <CreateContainer>
      <Image
        src={"/images/createartist.jpg"}
        fill
        style={{ objectFit: "cover", zIndex: "-10" }}
        quality={20}
        alt="background"
      />
      <AuthContainer route="artist">
        <BackOne />
        <h1>SET UP YOUR ARTIST PAGE!</h1>
        <ToastContainer />
        <Form onSubmit={handleSubmit}>
          <AuxDiv>
            <Input
              text="ARTIST NAME"
              type={"text"}
              field="artistName"
              setFormInfo={setFormInfo}
              formInfo={formInfo}
              route="artist"
              placehold="How would you like to be called?"
            />
            <Input
              text="PROFILE PICTURE"
              type={"url"}
              field="coverPicture"
              setFormInfo={setFormInfo}
              formInfo={formInfo}
              route="artist"
              placehold="Choose a nice profile pic! (URL)"
            />
          </AuxDiv>
          <Input
            text="DESCRIPTION"
            type={"text"}
            field="description"
            setFormInfo={setFormInfo}
            formInfo={formInfo}
            route="artist"
            placehold="How you want people to know you?"
          />
          <AuxDiv>
            <Input
              text="GENRE"
              type={"genre"}
              field={"genre"}
              setFormInfo={setFormInfo}
              formInfo={formInfo}
              route="artist"
            />
            <Input
              text="TYPE"
              type={"type"}
              field="type"
              setFormInfo={setFormInfo}
              formInfo={formInfo}
              route="artist"
            />
            <Input
              text="PRICE"
              type={"number"}
              field="price"
              setFormInfo={setFormInfo}
              formInfo={formInfo}
              route="artist"
              placehold="How much is your show?"
            />
          </AuxDiv>
          <AuxDiv>
            <Input
              text="YOUTUBE URL"
              type={"url"}
              field="youtubeUrl"
              setFormInfo={setFormInfo}
              formInfo={formInfo}
              route="artist"
              placehold="Your YouTube channel URL (optional)"
              optional={true}
            />
            <Input
              text="SPOTIFY URL"
              type={"url"}
              field="spotifyUrl"
              setFormInfo={setFormInfo}
              formInfo={formInfo}
              route="artist"
              placehold="Your Spotify artist page URL (optional)"
              optional={true}
            />
            <Input
              text="INSTAGRAM URL"
              type={"url"}
              field="instagramUrl"
              setFormInfo={setFormInfo}
              formInfo={formInfo}
              placehold="Your Instagram profile URL (optional)"
              optional={true}
            />
            <Input
              text="SOUNDCLOUD URL"
              type={"url"}
              field="soundCloudUrl"
              setFormInfo={setFormInfo}
              formInfo={formInfo}
              route="artist"
              placehold="Your SoundCloud profile URL (optional)"
              optional={true}
            />
          </AuxDiv>
          <AuxDiv>
            <Input
              text="LOCATION"
              type={"location"}
              field="location"
              setFormInfo={setFormInfo}
              formInfo={formInfo}
              route={"artist"}
            />
            <Input
              text="TRAVELLING DISTANCE"
              type={"number"}
              field="allowedArea"
              setFormInfo={setFormInfo}
              formInfo={formInfo}
              route="artist"
              placehold="How far are you willing to go?"
            />
          </AuxDiv>
          <AuxDiv>
            <Input
              text="PICTURE 1"
              type={"url"}
              field="pictures"
              setFormInfo={setFormInfo}
              formInfo={formInfo}
              route="artist"
              placehold="image URL (optional)"
              optional={true}
            />
            <Input
              text="PICTURE 2"
              type={"url"}
              field="pictures1"
              setFormInfo={setFormInfo}
              formInfo={formInfo}
              route="artist"
              placehold="image URL (optional)"
              optional={true}
            />
            <Input
              text="PICTURE 3"
              type={"url"}
              field="pictures2"
              setFormInfo={setFormInfo}
              formInfo={formInfo}
              route="artist"
              placehold="image URL (optional)"
              optional={true}
            />
          </AuxDiv>
          <SubmitButton type="submit" route="artist">
            SUBMIT PROFILE
          </SubmitButton>
        </Form>
      </AuthContainer>
    </CreateContainer>
  );
}

const CreateContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Montserrat", sans-serif;
`;

const AuxDiv = styled.div`
  box-sizing: border-box;
  display: flex;
  width: 90%;
  gap: 20px;
  * {
    width: 100% !important;
    box-sizing: border-box;
    input {
      color: #000;
      height: calc(4vh - 2px) !important;
      ::placeholder {
        color: #777;
      }
    }
  }
`;
