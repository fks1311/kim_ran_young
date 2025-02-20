"use client";

import Slide from "./Slide";
import styled from "styled-components";
import { motion } from "framer-motion";
import Image from "next/image";
import me from "@/lib/me.jpg";

export default function Contact() {
  const arrayTxt = [
    "T",
    "h",
    "a",
    "n",
    "k",
    <>&nbsp;</>,
    "f",
    "o",
    "r",
    <>&nbsp;</>,
    "c",
    "o",
    "n",
    "t",
    "a",
    "c",
    "t",
  ];

  const variants = {
    init: { opacity: 0, y: 10 },
    animate: (idx) => ({
      opacity: 1,
      y: 1,
      transition: {
        delay: idx * 0.1,
      },
    }),
  };
  const content_variants = {
    init: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        delay: 3,
        duration: 3,
      },
    },
  };

  return (
    <Layout>
      <Slide />
      <Frame>
        <HeadContainer>
          {arrayTxt.map((txt, idx) => (
            <motion.div key={idx} custom={idx} variants={variants} initial="init" animate="animate">
              {txt}
            </motion.div>
          ))}
        </HeadContainer>
        <ContentContainer variants={content_variants} initial="init" animate="animate">
          <Image
            src={me}
            height={300}
            style={{
              borderRadius: "10px",
            }}
            alt="profile"
          />
          <p>KIM RAN YOUNG</p>
          <p>010 - 2994 - 3118</p>
          <p>fks1311@gmail.com</p>
        </ContentContainer>
      </Frame>
    </Layout>
  );
}

const Layout = styled.div`
  position: relative;
  display: flex;
`;
const Frame = styled.div`
  position: absolute;
  top: 50%; /* 화면의 세로 중앙으로 이동 */
  left: 50%; /* 화면의 가로 중앙으로 이동 */
  transform: translate(-50%, -50%); /* 실제 중앙 정렬 */
  min-width: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5rem;
  padding: 5rem;
  font-size: 2rem;
  border-radius: 10px;
  background-color: white;
`;
const HeadContainer = styled.div`
  display: flex;
  font-size: 5rem;
`;
const ContentContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.3rem;
`;
