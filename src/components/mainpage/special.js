import styled from "styled-components";
import background from "../../images/specialimg.jpeg";
import { AnimationOnScroll } from "react-animation-on-scroll";

export default function Special() {
  return (
    <SpecialContainer>
      <ImageContainer>
        <SpecialImage src={background.src} />
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
            <Button color={"#F00241"}>
              Set up your <br /> <span> ARTIST PROFILE </span>
            </Button>
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="animate__flipInX">
            <Button color={"#F88922"}>
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
`;

const ContentContainer = styled.div`
  height: 100%;
  width: 67%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  * {
    width: 50%;
  }

  h1 {
    text-align: center;
    font-size: 2.5vw;
    font-weight: 800;
    color: #f00241;
    margin-bottom: 1vh;
  }
  h2 {
    color: #f88922;
    margin-bottom: 3vh;
  }
  p {
    color: #fff;
    font-size: 2.5vh;
  }
`;

const ImageContainer = styled.div`
  height: 100%;
  width: 33%;
  overflow: hidden;
`;

const SpecialImage = styled.img`
  height: 100%;
  width: auto;
`;

const ButtonsContainer = styled.div`
  height: 15vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
`;
