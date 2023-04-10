import Header from "@/components/resultspage/Header";
import ResultsSection from "@/components/resultspage/ResultsSection";
import styled from "styled-components";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Results() {
  const router = useRouter();
  const [params, setParams] = useState(undefined);

  useEffect(() => {
    const { searchParams } = router.query;
    if (searchParams) {
      setParams(JSON.parse(searchParams));
    }
  }, [router]);

  return (
    <>
      {params && (
        <ResultsContainer>
          <Header searchParams={params} />
          <ResultsSection searchParams={params} />
        </ResultsContainer>
      )}
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
