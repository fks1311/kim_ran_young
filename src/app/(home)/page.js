"use client";

import ProfileCard from "@/components/ProfileCard";
import styled from "styled-components";

export default function Home() {
  return (
    <Container>
      <div>
        <p>FRONTEND ENGINEER</p>
        <p>KIMRANYOUNG</p>
      </div>
      <ProfileCard />
    </Container>
  );
}

const Container = styled.div`
  height: 85vh;
  color: white;
  font-size: 8vw;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;
  }
  p:nth-child(2) {
    letter-spacing: 1rem;
  }
`;
