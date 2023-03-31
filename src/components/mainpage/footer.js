import styled from "styled-components";
import background from "../../../public/images/logo.png";

export default function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <img src={background.src} />
        <div>
          <p>
            © 2023 Musichems Inc
            <br />
            contactus@musichems.com
            <br />
            +55 00 0000-0000
          </p>
        </div>
      </FooterContent>
    </FooterContainer>
  );
}

const FooterContainer = styled.div`
  width: 100%;
  height: 10vh;
  background-color: #171717;
  display: flex;
  align-items: center;
`;

const FooterContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

p {
    color: #fff;
    line-height: 130%;
    font-size: 1.2vh;
}

  img {
    height: 7vh;
    width: auto;
    margin-left: 2vh;
    margin-right: 2vh;
  }
`;
