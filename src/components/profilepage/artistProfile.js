import useArtistById from "@/hooks/useArtistById";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import MapPlaces from "./map";
import "react-calendar/dist/Calendar.css";
import UserContext from "@/context/UserContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CarrouselImages from "../artistpage/Carousel";
import CalendarContainer from "../artistpage/Calendar";
import BookingModal from "../artistpage/BookingModal";
import Router from "next/router";

export default function ArtistProfile({ id }) {
  const [artistInfo, setArtistInfo] = useState();
  const [selectedDate, setSelectedDate] = useState();
  const [bookingInfo, setBookingInfo] = useState();
  const [modal, setModal] = useState(false);
  const artist = useArtistById(id);
  const { userData } = useContext(UserContext);

  useEffect(() => {
    if (!artist.artistLoading) {
      setArtistInfo(artist.artist.data);
    }
  }, [artist.artistLoading]);

  function handleBooking() {
    if (!userData.token) {
      Router.push("/auth/sign/in");
    } else if (!selectedDate) {
      toast.error("You need to select a date!", {
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      const bookingInfo = {
        artistId: id,
        date: selectedDate.toISOString(),
      };
      setBookingInfo(bookingInfo);
      setModal(true);
    }
  }

  return (
    <ArtistContainer>
      {artistInfo && (
        <>
          <ArtistHeader>
            <Toast />
            <div>
              <h1>{artistInfo.artistName}</h1>
              <h2>{artistInfo.ratings.length === 0 ? "5.0★" : "5.0★"}</h2>
            </div>
            <div>
              <h2>{artistInfo.genre}</h2>
              <h2>/</h2>
              <h2>{artistInfo.type}</h2>
            </div>
          </ArtistHeader>
          <ContentContainer>
            <CarrouselImages
              coverPicture={artistInfo.coverPicture}
              pictures={artistInfo.pictures}
            />
            <DescriptionContainer>
              <h2>DESCRIPTION:</h2>
              <p>{artistInfo.description}</p>
              <h2>PRICE:</h2>
              <p>${artistInfo.price}.00</p>
              <h2>LOCATION:</h2>
              <div>
                <MapPlaces coordinates={artistInfo.location.coordinates} />
              </div>
            </DescriptionContainer>
          </ContentContainer>
          <ContentContainer>
            <DescriptionContainer>
              <h2>AVAILABLE DATES</h2>
              <CalendarContainer
                setSelectedDate={setSelectedDate}
                bookedDates={artistInfo.bookedDates}
              />
              <BookButton onClick={handleBooking}>BOOK THIS ARTIST!</BookButton>
            </DescriptionContainer>
            <DescriptionContainer></DescriptionContainer>
          </ContentContainer>
        </>
      )}
      {modal && (
        <BookingModal
          modal={modal}
          setModal={setModal}
          bookingInfo={bookingInfo}
          setBookingInfo={setBookingInfo}
          artistInfo={artistInfo}
        />
      )}
    </ArtistContainer>
  );
}

const ArtistContainer = styled.div`
  position: absolute;
  z-index: 400;
  width: 100%;
  padding-bottom: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
  color: #fff;

  @media only screen and (max-width: 768px) {
    overflow-x: hidden;
    ::-webkit-scrollbar {
      display: none;
    }
  }
`;

const ArtistHeader = styled.div`
  margin-top: 40px;
  height: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-weight: 700;
    font-size: 55px;
  }
  h2 {
    font-size: 22px;
    margin-left: 15px;
  }

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
  }

  @media only screen and (max-width: 768px) {
    width: 100%;
    margin-top: 5px;
    h1 {
      font-size: 25px;
    }
    h2 {
      font-size: 14px;
    }
    ::-webkit-scrollbar {
      display: none;
    }
  }
`;

const ContentContainer = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
`;

const DescriptionContainer = styled.div`
  box-sizing: border-box;
  width: 35%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 50px;

  p,
  h2 {
    width: 100%;
    text-align: left;
  }
  h2 {
    font-size: 22px;
    font-weight: 700;
    margin-bottom: 10px;
  }
  p {
    margin-bottom: 30px;
    font-size: 18px;
    font-weight: 300;
  }
  div {
    width: 100%;
  }

  @media only screen and (max-width: 768px) {
    width: 100%;
    margin-bottom: 40px;
    padding: 10px 50px;
    h2 {
      font-size: 16px;
    }
    p {
      font-size: 16px;
    }
  }
`;

const BookButton = styled.button`
  margin-top: 40px;
  width: 25vh;
  height: 10vh;
  background-color: #f00241;
  border: none;
  border-radius: 2vh;
  font-size: 15px;
  font-weight: 700;
  color: #fff;
  text-shadow: 0px 0px 7px #000000;
  transition: all 0.1s ease-in;
  :hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;

const Toast = styled(ToastContainer)`
  position: fixed;
  top: 100px;
  z-index: 900 !important;
`;
