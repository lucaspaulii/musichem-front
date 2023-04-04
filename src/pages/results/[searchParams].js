import Header from "@/components/resultspage/Header";
import ResultsSection from "@/components/resultspage/ResultsSection";
import styled from "styled-components";
import { useRouter } from "next/router";

export default function Results() {
  const router = useRouter();
  const { searchParams } = router.query;

  return (
    <>
      <ResultsContainer>
        <Header
          searchParams={searchParams ? JSON.parse(searchParams) : undefined}
        />
        <ResultsSection
          searchParams={searchParams ? JSON.parse(searchParams) : undefined}
        />
      </ResultsContainer>
    </>
  );
}

const ResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Montserrat", sans-serif;
  position: relative;

  @media only screen and (max-width: 768px) {
    overflow-y: scroll;
  }
`;
