"use client";

import Slide from "./Slide";
import styled from "styled-components";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";
import ProfileContent from "./Content";

export default function About() {
  return (
    <div className="about-layout">
      <Slide />
      <ContentContainer>
        <IconFrame>
          <img src="https://cdn.prod.website-files.com/63d056ea7d536409ca9ada63/63d056ea7d53645c5e9ada93_Pre-order_curve.svg" />
          <MdOutlineKeyboardDoubleArrowDown size={30} />
        </IconFrame>
        <ProfileContent />
      </ContentContainer>
      <style jsx>{`
        .about-layout {
          positon: relative;
        }
      `}</style>
    </div>
  );
}

const ContentContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const IconFrame = styled.div`
  position: absolute;
  top: -50px;
  display: flex;
  justify-content: center;
  width: 100%;
  img {
    height: 50px;
    position: absolute;
  }
  svg {
    z-index: 1;
    position: relative;
    top: 10px;
  }
`;
