import styled from "styled-components";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";

export default function CarrouselImages({coverPicture, pictures}) {
  return (
    <CarouselContainer>
      <Carousel showArrows={true} showThumbs={false}>
        <CarouselImage>
          <Image
            src={coverPicture}
            fill
            alt="artist"
            style={{ objectFit: "cover" }}
          />
        </CarouselImage>
        {pictures.map((pic, i) => {
          return (
            <CarouselImage key={i}>
              <Image src={pic} fill alt="alt" style={{ objectFit: "cover" }} />
            </CarouselImage>
          );
        })}
      </Carousel>
    </CarouselContainer>
  );
}

const CarouselImage = styled.div`
  height: 400px;
  width: 200px;

  @media only screen and (max-width: 768px) {
    width: 100px;
    height: 200px;
  }
`;

const CarouselContainer = styled.div`
  width: 500px;
  height: 500px;
  position: relative;

  @media only screen and (max-width: 768px) {
    width: 200px;
    height: 200px;
    margin-bottom: 35px;
  }
`;