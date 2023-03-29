import styled from "styled-components";
import background from "../../images/oportunityimg.jpeg";
import { AnimationOnScroll } from "react-animation-on-scroll";

export default function Oportunity() {
  return (
    <OportunityContainer imgUrl={background.src}>
      <OportunityTitleContainer>
        <h1>Sometimes they only need</h1>
        <AnimationOnScroll animateIn="animate__bounceIn">
          <h2>one oportunity</h2>
        </AnimationOnScroll>
      </OportunityTitleContainer>
      <p>Charlotte Campbell, solo artist</p>
    </OportunityContainer>
  );
}

const OportunityContainer = styled.div`
  width: 100%;
  height: 85vh;
  background-image: url(${(props) => props.imgUrl});
  background-size: cover;
  position: relative;

  p {
    position: absolute;
    font-size: 1.3vw;
    right: 25vw;
    top: 55vh;

    font-weight: 600;
  }
`;

const OportunityTitleContainer = styled.div`
  position: absolute;
  z-index: 300;
  top: 15vh;
  left: 5vw;
  font-size: 2.5vw;
  font-weight: 800;
  width: 40%;
  display: flex;
  flex-direction: column;
  h1 {
    color: #f00241;
  }
  h2 {
    color: #f88922;
  }
`;
