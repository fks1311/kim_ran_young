"use client";

import ProfileCard from "@/components/ProfileCard";
import { useRouter } from "next/navigation";
import styled, { keyframes } from "styled-components";

export default function Slide() {
  const router = useRouter();

  return (
    <SlideText>
      <h1>
        ABOUT ME ABOUT ME ABOUT ME ABOUT ME ABOUT ME ABOUT ME ABOUT ME ABOUT ME ABOUT ME ABOUT ME ABOUT ME ABOUT ME
        ABOUT ME ABOUT ME ABOUT ME ABOUT ME ABOUT ME ABOUT ME ABOUT ME ABOUT ME ABOUT ME ABOUT ME ABOUT ME ABOUT ME
        ABOUT ME ABOUT ME ABOUT ME ABOUT ME ABOUT ME ABOUT ME ABOUT ME ABOUT ME ABOUT ME ABOUT ME ABOUT ME ABOUT ME
        ABOUT ME ABOUT ME ABOUT ME ABOUT ME
      </h1>
      <ViewProject>
        Go to the project right away.
        <button onClick={() => router.push("/project")}>VIEW MY PROJECTS</button>
      </ViewProject>
      <ProfileCard />
    </SlideText>
  );
}

const SlideAni = keyframes`
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-50%);
  }
`;
const SlideText = styled.div`
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  white-space: nowrap;
  box-sizing: border-box;
  overflow: hidden;
  margin-top: 5rem;
  h1 {
    flex: 0.7;
    display: flex;
    align-items: flex-end;
    color: white;
    font-size: 35rem;
    font-weight: bold;
    animation: ${SlideAni} 250s linear infinite;
  }
`;
const ViewProject = styled.div`
  flex: 0.3;
  width: 100%;
  display: flex;
  flex-direction: column;
  color: white;
  font-size: 2rem;
  gap: 2rem;
  button {
    // width: 15%;
    width: 250px;
    padding: 1rem;
    color: white;
    border: 1px solid white;
    border-radius: 2rem;
    background-color: transparent;
    cursor: pointer;
  }
  @media ${({
      theme: {
        media: { smaller },
      },
    }) => smaller} {
    align-items: center;
  }
`;

// about me 텍스트를 배열로 하여 무한히 흐르는 텍스트 효과를 하려 했으나,
// 애니메이션이 단일 텍스트 스트림 기준으로 움직이기 때문에 keyframes의 transition이 벗어나면 다시 첫 번째 텍스트로 돌아가는 이슈가 발생
// 해결 방법은 >> 텍스트를 배열이 아닌, 단일로 표현하는 방법
