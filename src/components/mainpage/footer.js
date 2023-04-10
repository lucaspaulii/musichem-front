import styled from "styled-components";
import Image from "next/image";

export default function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <LogoContainer>
          <Image
            src={"/images/logo.png"}
            fill
            style={{ objectFit: "cover", zIndex: "100" }}
            alt="logo"
          />
        </LogoContainer>
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
`;

const LogoContainer = styled.div`
  height: 7vh;
  width: 8vh;
  margin-left: 2vh;
  margin-right: 2vh;
  position: relative;
`;
