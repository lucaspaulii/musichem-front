import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Cover from "@/components/mainpage/cover";
import About from "@/components/mainpage/about";
import Oportunity from "@/components/mainpage/oportunity";
import Footer from "@/components/mainpage/footer";
import Special from "@/components/mainpage/special";
import styled from "styled-components";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <MainContainer>
      <Cover />
      <About />
      <Special />
      <Oportunity />
      <Footer />
    </MainContainer>
  );
}

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'Montserrat', sans-serif;
`;
