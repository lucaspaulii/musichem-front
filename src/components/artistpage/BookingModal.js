import UserContext from "@/context/UserContext";
import useCreateBooking from "@/hooks/useCreateBooking";
import { useContext } from "react";
import styled from "styled-components";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";

export default function BookingModal({
  modal,
  setModal,
  artistInfo,
  bookingInfo,
  setBookingInfo,
}) {
  const { userData } = useContext(UserContext);
  const { createBookingLoading, createBooking } = useCreateBooking();
  const router = useRouter();

  function handleCancel() {
    setModal(false);
    setBookingInfo(undefined);
  }

  async function handleConfirm() {
    try {
      await createBooking(
        bookingInfo.artistId,
        bookingInfo.date,
        userData.token
      );
      toast.success("Booked successfully!", {
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
        setModal(false);
      }, 3000);
      setTimeout(() => {
        router.reload(window.location.pathname);
      }, 5000);
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
    <BookingContainer>
      <BookingCard>
        <Toast />
        <BookingCardHeader>
          <h1>CONFIRM BOOKING</h1>
        </BookingCardHeader>
        <BookingCardContent>
          <InfoContainer>
            <h1>DATE:</h1>
            <p>{bookingInfo.date.split("T")[0]}</p>
          </InfoContainer>
          <InfoContainer>
            <h1>ARTIST:</h1>
            <p>{artistInfo.artistName}</p>
          </InfoContainer>
          <InfoContainer>
            <h1>GENRE:</h1>
            <p>{artistInfo.genre}</p>
          </InfoContainer>
          <InfoContainer>
            <h1>TYPE:</h1>
            <p>{artistInfo.type}</p>
          </InfoContainer>
          <InfoContainer>
            <h1>PRICE:</h1>
            <p>${artistInfo.price}</p>
          </InfoContainer>
          <ButtonContainer>
            <CancelButton onClick={handleCancel}>CANCEL</CancelButton>
            <ConfirmButton onClick={handleConfirm}>CONFIRM</ConfirmButton>
          </ButtonContainer>
        </BookingCardContent>
      </BookingCard>
    </BookingContainer>
  );
}

const BookingContainer = styled.div`
  position: fixed;
  z-index: 5000;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #00000099;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BookingCard = styled.div`
  width: 400px;
  height: 500px;
  background-color: #fff;
  border: 5px solid;
  border-image-slice: 1;
  border-image-source: linear-gradient(to right, #4259b0, #fba73e);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BookingCardHeader = styled.div`
  height: 20%;
  width: 100%;
  background-color: #000;
  border-bottom: 3px solid;
  border-image-slice: 1;
  border-image-source: linear-gradient(to right, #4259b0, #fba73e);
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 30px;
  font-weight: 500;
`;

const BookingCardContent = styled.div`
  width: 80%;
  padding: 30px;
`;

const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  color: #000;
  margin: 10px 0;
  padding: 10px 0;
  border-bottom: 0.5px dashed gray;
  p {
    font-weight: 600;
  }
`;

const ButtonContainer = styled.div`
  margin-top: 20px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 20%;

  button {
    width: 30%;
    height: 70%;
    border: none;
    color: #fff;
    font-weight: 700;
    border-radius: 5px;
    transition: all 0.1s ease-in;
    :hover {
      cursor: pointer;
      transform: scale(1.1);
    }
  }
`;
const CancelButton = styled.button`
  background-color: #f00241;
`;

const ConfirmButton = styled.button`
  background-color: #4caf50;
`;

const Toast = styled(ToastContainer)`
  position: fixed;
  z-index: 10000;
`;
