import Image from "next/image";
import { AnimationOnScroll } from "react-animation-on-scroll";
import styled from "styled-components";

export default function About() {
  return (
    <AboutContainer>
      <ContentContainer>
        <AnimationOnScroll animateIn="animate__fadeInLeft">
          <h2>WHAT IS MUSICHEMS?</h2>
        </AnimationOnScroll>
        <h3>
          We are a platform where you can find musicians, bands and DJs
          available in your area, check out their profile, ratings, pricing and
          then book them!
        </h3>
        <p>
          There are millions and millions of talent around the world, and there
          are lots in your area too! Sometimes they only need a bridge to be
          able to connect to you, and we are here to offer that bridge!
        </p>
      </ContentContainer>
      <ImageContainer>
        <Image src={"/images/aboutimg.jpeg"} fill style={{objectFit:"cover", zIndex: "800"}}/>
      </ImageContainer>
    </AboutContainer>
  );
}

const AboutContainer = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
`;

const ContentContainer = styled.div`
  height: 100%;
  width: 67%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgb(231, 211, 181);
  background: radial-gradient(
    circle,
    rgba(236, 228, 210, 1) 0%,
    rgba(247, 242, 228, 1) 0%
  );

  h2 {
    max-width: 100%;
    text-align: center;
    color: #30419f;
    font-size: 5vh;
    font-weight: 800;
    border-bottom: 0.5vw solid #ffa444;
    margin-bottom: 2vw;
  }
  h3 {
    width: 50%;
    font-weight: 600;
    font-size: 2.5vh;
    text-align: left;
    margin-bottom: 1.5vh;
  }
  p {
    width: 50%;
    text-align: left;
    font-size: 2vh;
  }

  @media only screen and (max-width: 768px) {
    z-index: 800;
    h3, p {
      width: 80%;
    }
    h2 {
      margin-bottom: 30px;
      font-size: 4vh;
    }
    h3 {
      font-size: 2.2vh;
    }
    p {
      font-size: 1.9vh;
    }
}
`;

const ImageContainer = styled.div`
  height: 100%;
  width: 33%;
  overflow: hidden;
  position: relative;
`;
