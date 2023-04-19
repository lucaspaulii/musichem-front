import { useContext, useState } from "react";
import Input from "./Input";
import BackOne from "./backOne";
import Router from "next/router";
import { AuthContainer, Form, LinkTo, SubmitButton } from "./style";
import useSignIn from "@/hooks/useSignIn";
import UserContext from "@/context/UserContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useArtistByToken from "@/hooks/useArtistByToken";
import ArtistContext from "@/context/ArtistContext";
import artistService from "@/services/artistsServices";

export default function Login() {
  const [formInfo, setFormInfo] = useState({
    email: undefined,
    password: undefined,
  });
  const { loadingSignIn, signIn } = useSignIn();
  const { setUserData } = useContext(UserContext);
  const { setArtistData } = useContext(ArtistContext);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const userData = await signIn(formInfo);
      if (userData.user.hasArtistPage) {
        await handleArtist(userData.token);
      }
      setUserData(userData);
      toast.success("Login successfully!", {
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
      toast.error("Something went wrong!", {
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

  async function handleArtist(token) {
    try {
      const artist = await artistService.getInfoByUserId(token);
      setArtistData(artist.data);
    } catch (error) {
    }
  }

  return (
    <AuthContainer>
      <h1>WELCOME BACK!</h1>
      <ToastContainer />
      <Form onSubmit={handleSubmit}>
        <Input
          text={"EMAIL"}
          type={"email"}
          setFormInfo={setFormInfo}
          formInfo={formInfo}
          field={"email"}
        />
        <Input
          text={"PASSWORD"}
          type={"password"}
          setFormInfo={setFormInfo}
          formInfo={formInfo}
          field={"password"}
        />
        <SubmitButton type="submit" disabled={loadingSignIn}>
          LOGIN
        </SubmitButton>
      </Form>
      <LinkTo href="/auth/sign/up">
        NEW HERE? <span>SIGN UP!</span>
      </LinkTo>
      <BackOne />
    </AuthContainer>
  );
}
