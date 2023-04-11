import { useContext, useState } from "react";
import Input from "./Input";
import BackOne from "./backOne";
import Router from "next/router";
import { AuthContainer, Form, LinkTo, SubmitButton } from "./style";
import useSignIn from "@/hooks/useSignIn";
import UserContext from "@/context/UserContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Login() {
  const [formInfo, setFormInfo] = useState({
    email: undefined,
    password: undefined,
  });
  const { loadingSignIn, signIn } = useSignIn();
  const { setUserData } = useContext(UserContext);

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(formInfo);

    try {
      const userData = await signIn(formInfo);
      console.log(userData);
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
