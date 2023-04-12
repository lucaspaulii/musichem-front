import useArtistById from "@/hooks/useArtistById";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import MapPlaces from "./map";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import UserContext from "@/context/UserContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ArtistProfile({ id }) {
  const [artistInfo, setArtistInfo] = useState();
  const [selectedDate, setSelectedDate] = useState();
  const artist = useArtistById(id);
  const { userData } = useContext(UserContext);

  const disabledDates = [
    new Date("2023-04-11T03:00:00.000Z"),
    new Date("2023-04-12T03:00:00.000Z"),
  ]; //change to booked dates when there are bookings
  const now = new Date();

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
        userId: userData.user.id,
        artistId: id,
        date: selectedDate.toISOString(),
      };
      console.log(bookingInfo);
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
            <CarouselContainer>
              <Carousel showArrows={true} showThumbs={false}>
                <CarouselImage>
                  <Image
                    src={artistInfo.coverPicture}
                    fill
                    alt="artist"
                    style={{ objectFit: "cover" }}
                  />
                </CarouselImage>
                {artistInfo.pictures.map((pic) => {
                  return (
                    <CarouselImage>
                      <Image
                        src={pic}
                        fill
                        alt="alt"
                        style={{ objectFit: "cover" }}
                      />
                    </CarouselImage>
                  );
                })}
              </Carousel>
            </CarouselContainer>
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
              <Calendar
                onClickDay={(value) => setSelectedDate(value)}
                tileDisabled={({ date }) =>
                  disabledDates.some(
                    (disabledDate) =>
                      date.getFullYear() === disabledDate.getFullYear() &&
                      date.getMonth() === disabledDate.getMonth() &&
                      date.getDate() === disabledDate.getDate()
                  ) ||
                  (date.getFullYear() <= now.getFullYear() &&
                    date.getMonth() <= now.getMonth() &&
                    date.getDate() < now.getDate()) ||
                  (date.getFullYear() <= now.getFullYear() &&
                    date.getMonth() < now.getMonth()) ||
                  date.getFullYear() < now.getFullYear()
                }
              />
              <BookButton onClick={handleBooking}>BOOK THIS ARTIST!</BookButton>
            </DescriptionContainer>
            <DescriptionContainer></DescriptionContainer>
          </ContentContainer>
        </>
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
`;

const ContentContainer = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;
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
`;

const CarouselImage = styled.div`
  height: 400px;
  width: 200px;
`;

const CarouselContainer = styled.div`
  width: 500px;
  height: 500px;
  position: relative;
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
