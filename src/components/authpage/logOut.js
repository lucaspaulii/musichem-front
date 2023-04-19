import { GrLogout } from "react-icons/gr";
import { useContext } from "react";
import UserContext from "@/context/UserContext";
import ArtistContext from "@/context/ArtistContext";
import styled from "styled-components";
import useSignOut from "@/hooks/useSignOut";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function LogOut() {
  const { setUserData, userData } = useContext(UserContext);
  const { setArtistData } = useContext(ArtistContext);
  const { signOut } = useSignOut();

  async function handleClick() {
    try {
      await signOut(userData.token);
    } catch (error) {
      console.log(error);
    }

    setUserData({});
    setArtistData({});
  }

  return (
    <>
      <ToastContainer />
      <LogoutIcon onClick={handleClick} size={"25"} />
    </>
  );
}

const LogoutIcon = styled(GrLogout)`
  color: #000;
  position: absolute;
  top: 6.5%;
  right: 2.5%;
  transition: all 0.1s ease-in;
  :hover {
    transform: scale(1.2);
    cursor: pointer;
  }
`;
