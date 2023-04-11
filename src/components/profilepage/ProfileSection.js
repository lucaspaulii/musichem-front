import styled from "styled-components";
import ArtistProfile from "./artistProfile";
import UserProfile from "./userProfile";
import Image from "next/image";

export default function ProfileSection({ profileInfo }) {
  return (
    <ProfileContainer>
      <Image
        src={"/images/resultsbg.png"}
        fill
        style={{ objectFit: "cover", zIndex: "100" }}
        quality={50}
        alt="background"
      />
      {profileInfo.type === "artist" && <ArtistProfile id={profileInfo.id} />}
      {profileInfo.type === "user" && <UserProfile id={profileInfo.id} />}
    </ProfileContainer>
  );
}

const ProfileContainer = styled.div`
  padding-top: 80px;
  width: 100%;
  height: calc(100vh - 80px);
  background-color: black;
  position: relative;
  overflow-y: scroll;
`;
