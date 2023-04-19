import Header from "@/components/resultspage/Header";
import styled from "styled-components";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ProfileSection from "@/components/profilepage/ProfileSection";

export default function Profile() {
  const router = useRouter();
  const [info, setInfo] = useState(undefined);

  useEffect(() => {
    const { profileInfo } = router.query;
    if (profileInfo) {
      setInfo(JSON.parse(profileInfo));
    }
  }, [router]);

  return (
    <>
      {info && (
        <ResultsContainer>
          <Header route="profile"/>
          <ProfileSection profileInfo={info} />
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
    ::-webkit-scrollbar {
      display: none;
    }
    width: 100vw;
  }
`;
