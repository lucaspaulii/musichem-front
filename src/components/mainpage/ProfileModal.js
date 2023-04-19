import styled from "styled-components";
import Router from "next/router";
import UserContext from "@/context/UserContext";
import { useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LogOut from "../authpage/logOut";

export default function ProfileModal({ modal, setModal }) {
  const { userData } = useContext(UserContext);

  console.log(userData);

  function handleClick(route) {
    if (userData.token) {
      toast("You are already logged in!", {
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
      Router.push(`/auth/sign/${route}`);
    }
  }

  function handleAuthClick(e) {
    if (!userData.token) {
      Router.push("/auth/sign/in");
    } else if (!artistData.id) {
      Router.push("/artist/create");
    } else {
      Router.push("/construction");
    }
  }

  return (
    <Modal openModal={modal}>
      <ToastContainer />
      <h1>Hello, {userData?.user?.name ? userData.user.name : "Visitor"}</h1>
      <FirstSection>
        <a onClick={(e) => handleClick("up")}>New here? Sign up</a>
        <a onClick={(e) => handleClick("in")}>Log in</a>
      </FirstSection>
      <SecondSection>
        <a onClick={handleAuthClick}>Musichem yourself!</a>
        <a href="#">Account info</a>
      </SecondSection>
      <LogOut />
    </Modal>
  );
}

const Modal = styled.div`
  position: absolute;
  z-index: 100;
  top: 4vh;
  left: 6vh;
  width: 16vw;
  height: 25vh;
  background-color: rgba(230, 230, 230, 0.8);
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    color: #000;
    width: 100%;
    height: 4vh;
    text-align: center;
    margin-top: 2vh;
    font-size: 1vw;
    font-weight: 700;
  }

  a {
    color: #000;
    text-decoration: none;
    font-size: 0.7vw;
    font-weight: 600;
    margin-top: 1.2vh;
    transition: all 0.1s ease-in;
    :hover {
      transform: scale(1.1) translateX(1.2vh);
      cursor: pointer;
    }
  }

  @media only screen and (max-width: 768px) {
    width: 250px;
    height: 250px;
    left: 3px;
    top: 3px;
    z-index: 1000;
    background-color: rgba(230, 230, 230, 0.95);
    h1 {
      font-size: 15px;
    }
    a {
      font-size: 15px;
    }
  }
`;

const FirstSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 90%;
  height: 35%;
  border-bottom: 1px solid gray;
`;

const SecondSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 90%;
`;
