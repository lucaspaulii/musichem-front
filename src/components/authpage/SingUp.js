import { useState } from "react";
import Input from "./Input";
import BackOne from "./backOne";
import { AuthContainer, Form, LinkTo, SubmitButton } from "./style";
import useSignUp from "@/hooks/useSignUp";
import Router from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function SingUp() {
  const [formInfo, setFormInfo] = useState({
    email: undefined,
    name: undefined,
    password: undefined,
    confirmPassword: undefined,
    address: undefined,
    name: undefined,
    businessName: undefined,
    description: undefined,
    pictures: [],
  });
  const { loadingSignUp, signUp } = useSignUp();

  async function handleSubmit(e) {
    e.preventDefault();
    if (formInfo.password !== formInfo.confirmPassword) {
      toast.error("Passwords are not matching!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else {
      try {
        const submitForm = { ...formInfo };
        delete submitForm.confirmPassword;
        await signUp(submitForm);
        toast.success("Sign up successfuly!", {
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
          Router.push('/auth/sign/in');
        }, 3000);
      } catch (error) {
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
  }

  return (
    <AuthContainer>
      <h1>JOIN US!</h1>
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
          text={"NAME"}
          type={"text"}
          setFormInfo={setFormInfo}
          formInfo={formInfo}
          field={"name"}
        />
        <Input
          text={"PASSWORD"}
          type={"password"}
          setFormInfo={setFormInfo}
          formInfo={formInfo}
          field={"password"}
        />
        <Input
          text={"CONFIRM PASSWORD"}
          type={"password"}
          field={"confirmPassword"}
          setFormInfo={setFormInfo}
          formInfo={formInfo}
        />
        <Input
          text={"DESCRIPTION"}
          type={"text"}
          setFormInfo={setFormInfo}
          formInfo={formInfo}
          field="description"
        />
        <Input
          text={"ADDRESS"}
          type="location"
          setFormInfo={setFormInfo}
          formInfo={formInfo}
          field="address"
          route="auth"
        />
        <Input
          text={"BUSINESS NAME"}
          type={"text"}
          setFormInfo={setFormInfo}
          formInfo={formInfo}
          field="businessName"
        />
        <Input
          text={"PICTURE"}
          type={"text"}
          setFormInfo={setFormInfo}
          formInfo={formInfo}
          field="pictures"
          optional={true}
        />
        <SubmitButton type="submit" disabled={loadingSignUp}>
          {loadingSignUp ? "loading" : "SIGN UP"}
        </SubmitButton>
      </Form>

      <LinkTo href="/auth/sign/in">
        ALREADY HAVE AN ACCOUNT? <span>LOG IN!</span>
      </LinkTo>
      <BackOne />
    </AuthContainer>
  );
}
