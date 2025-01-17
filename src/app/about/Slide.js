"use client";

import ProfileCard from "@/components/ProfileCard";
import styled, { keyframes } from "styled-components";

export default function Slide() {
  return (
    <SlideText>
      <h1>
        ABOUT ME ABOUT ME ABOUT ME ABOUT ME ABOUT ME ABOUT ME ABOUT ME ABOUT ME ABOUT ME ABOUT ME ABOUT ME ABOUT ME
        ABOUT ME ABOUT ME ABOUT ME ABOUT ME ABOUT ME ABOUT ME ABOUT ME ABOUT ME ABOUT ME ABOUT ME ABOUT ME ABOUT ME
        ABOUT ME ABOUT ME ABOUT ME ABOUT ME ABOUT ME ABOUT ME ABOUT ME ABOUT ME ABOUT ME ABOUT ME ABOUT ME ABOUT ME
        ABOUT ME ABOUT ME ABOUT ME ABOUT ME
      </h1>
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
  align-items: center;
  white-space: nowrap;
  box-sizing: border-box;
  overflow: hidden;
  h1 {
    color: white;
    font-size: 23rem;
    font-weight: bold;
    animation: ${SlideAni} 250s linear infinite;
  }
`;

// about me 텍스트를 배열로 하여 무한히 흐르는 텍스트 효과를 하려 했으나,
// 애니메이션이 단일 텍스트 스트림 기준으로 움직이기 때문에 keyframes의 transition이 벗어나면 다시 첫 번째 텍스트로 돌아가는 이슈가 발생
// 해결 방법은 >> 텍스트를 배열이 아닌, 단일로 표현하는 방법
