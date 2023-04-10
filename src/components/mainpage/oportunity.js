import styled from "styled-components";
import { AnimationOnScroll } from "react-animation-on-scroll";
import Image from "next/image";

export default function Oportunity() {
  return (
    <OportunityContainer>
      <Image src={"/images/oportunityimg.jpeg"} fill style={{objectFit:"cover", zIndex:"200"}} alt="street musician"/>
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
  background-size: cover;
  position: relative;
  p {
    position: absolute;
    font-size: 1.3vw;
    right: 5vw;
    top: 5vh;
    z-index: 400;
    font-weight: 600;
  }

  @media only screen and (max-width: 768px) {
    p {
      font-size: 13px;
      top: 95%;
      color: #fff;
      font-weight: 400;
    }
    
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
  z-index: 400;
  h1 {
    color: #f00241;
  }
  h2 {
    color: #f88922;
  }
  @media only screen and (max-width: 768px) {
    font-size: 20px;
    width: 80%;
  }
`;
