import styled from "styled-components";
import { AnimationOnScroll } from "react-animation-on-scroll";
import Router from "next/router";
import Image from "next/image";

export default function Special() {
  return (
    <SpecialContainer>
      <ImageContainer>
        <Image
          src={"/images/specialimg.jpeg"}
          fill
          style={{ objectFit: "cover" }}
          alt="local musician"
        />
      </ImageContainer>
      <ContentContainer>
        <h1>What makes us special?</h1>
        <h2>By Lady Hamsworth, Pretty Nails lead singer (and sax!)</h2>
        <p>
          Musichem allowed me to perform in stages I would never think I could
          reach, connecting me to oportunities all around my community, and
          since I decided to allow a bigger area radius it was even more
          satisfying, now I know every Jazz bar in the south!
        </p>
        <ButtonsContainer>
          <AnimationOnScroll animateIn="animate__flipInX">
            <Button
              color={"#F00241"}
              onClick={(e) => Router.push("/construction")}
            >
              Set up your <br /> <span> ARTIST PROFILE </span>
            </Button>
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="animate__flipInX">
            <Button
              color={"#F88922"}
              onClick={(e) => Router.push("/construction")}
            >
              Set up your <br /> <span> CONTRACTOR PROFILE </span>
            </Button>
          </AnimationOnScroll>
        </ButtonsContainer>
      </ContentContainer>
    </SpecialContainer>
  );
}

const SpecialContainer = styled.div`
  width: 100%;
  height: 70vh;
  background-color: #171717;
  display: flex;

  @media only screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const ContentContainer = styled.div`
  height: 100%;
  margin-left: 33%;
  width: 67%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 300;
  overflow: hidden;

  h1 {
    text-align: center;
    font-size: 40px;
    font-weight: 800;
    color: #f00241;
    margin-bottom: 15px;
    width: 50%;
  }
  h2 {
    color: #f88922;
    margin-bottom: 5vh;
    width: 50%;
  }
  p {
    color: #fff;
    font-size: 2.5vh;
    width: 50%;
  }

  @media only screen and (max-width: 768px) {
    margin: 0;
    width: 90%;
    height: 90%;
    background-color: rgba(0, 0, 0, 0.7);
    p,
    h1,
    h2 {
      width: 95%;
      text-align: center;
    }
    h1 {
      font-size: 3vh;
      margin-bottom: 3px;
    }
    h2 {
      font-size: 1.8vh;
    }
    p {
      font-size: 2vh;
      width: 80%;
      text-align: left;
      margin-bottom: 20px;
    }
  }
`;

const ImageContainer = styled.div`
  position: absolute;
  height: 90%;
  width: 33%;
  overflow: hidden;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const ButtonsContainer = styled.div`
  height: 15vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 50%;
  margin: 0 90px;

  @media only screen and (max-width: 768px) {
    margin: 10px 0;
    width: 70%;
  }
`;

const Button = styled.button`
  width: 25vh;
  height: 10vh;
  background-color: ${(props) => props.color};
  border: none;
  border-radius: 2vh;
  font-size: 1.5vh;
  color: #fff;
  font-weight: 300;
  text-shadow: 0px 0px 7px #000000;
  transition: all 0.1s ease-in;
  :hover {
    cursor: pointer;
    transform: scale(1.1);
  }
  span {
    font-size: 1.8vh;
    font-weight: 700;
  }
  @media only screen and (max-width: 768px) {
    width: 28vw;
    height: 18vw;

    span {
      font-size: 14px;
      font-weight: 600;
    }
  }
`;
