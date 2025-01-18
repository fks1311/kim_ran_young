"use client";

import styled, { keyframes } from "styled-components";

export default function Slide() {
  return (
    <SlideText>
      <h1>
        PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS
        PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS
        PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS
        PROJECTS PROJECTS PROJECTS PROJECTS
      </h1>
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
  height: 90vh;
  display: flex;
  justify-content: center;
  white-space: nowrap;
  box-sizing: border-box;
  overflow: hidden;
  // margin-top: 5rem;
  h1 {
    color: white;
    font-size: 23rem;
    font-weight: bold;
    margin-top: 10rem;
    animation: ${SlideAni} 250s linear infinite;
  }
`;
