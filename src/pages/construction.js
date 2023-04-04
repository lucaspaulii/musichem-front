import styled from "styled-components";
import Router from "next/router";
import BackOne from "@/components/authpage/backOne";

export default function Construction() {
  return (
    <ConstructionContainer>
      <ConstructionDiv>
        <BackOne />
        <div>
          <img src="/images/logo2.png" onClick={(e) => Router.push("/")} />
        </div>

        <h1>WE'RE SETTING UP THIS STAGE FOR YOU!</h1>
        <img
          src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/5e78de96409099.5eadb592c78ed.gif"
          alt="drums"
        />
        <h2>Please come back later</h2>

        <button onClick={(e) => Router.push("/")}>Back to main page</button>
      </ConstructionDiv>
    </ConstructionContainer>
  );
}

const ConstructionContainer = styled.div`
  font-family: "Montserrat", sans-serif;
  width: 100%;
  height: 100vh;
  background-image: url("/images/constructionbg.png");
  background-size: cover;
  background-color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ConstructionDiv = styled.div`
  width: 50%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    font-size: 4vh;
    font-weight: 800;
    color: #f00241;
    text-align: center;
    text-shadow: 0px 0px 10px #000000;
  }

  h2 {
    font-size: 3vh;
    font-weight: 600;
    color: #fff;
    text-shadow: 0px 0px 10px #000000;
  }

  img {
    width: 40%;
  }

  button {
    margin-top: 5vh;
    height: 5vh;
    width: 20vh;
    border: none;
    border-radius: 2vh;
    font-size: 1.5vh;
    font-weight: 700;
    background-color: #f88922;
    color: #fff;
    text-shadow: 0px 0px 10px #000000;
    transition: all 0.1s ease-in;
    cursor: pointer;
    :hover {
      cursor: pointer;
      transform: scale(1.3);
    }
  }

  div {
    background-color: rgba(266, 266, 266, 0.7);
    height: 10vh;
    width: 20vh;
    margin-bottom: 6vh;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 90%;
      cursor: pointer;
    }
  }

  @media only screen and (max-width: 768px) {
    h2 {
      font-size: 14px;
    }

    img {
      width: 55%;
    }
}
`;
