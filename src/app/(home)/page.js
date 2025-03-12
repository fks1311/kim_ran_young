"use client";

import ProfileCard from "@/components/ProfileCard";
import Metadata from "@/components/Metadata";
import styled from "styled-components";
import { motion } from "framer-motion";

export default function Home() {
  const text = ["F", "R", "O", "N", "T", "E", "N", "D", <>&nbsp;</>, "D", "E", "V", "E", "L", "O", "P", "E", "R"];
  const variants = {
    init: { opacity: 0, y: 20 },
    animate: (idx) => ({
      opacity: 1,
      y: 1,
      transition: {
        delay: idx * 0.1,
      },
    }),
  };
  const name_variants = {
    init: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        delay: 3,
        duration: 2,
      },
    },
  };

  return (
    <Container>
      <Metadata title={"HOME"} />
      <div className="header-container">
        <div className="txt-container">
          {text.map((txt, idx) => (
            <motion.div key={idx} custom={idx} variants={variants} initial="init" animate="animate">
              {txt}
            </motion.div>
          ))}
        </div>
        <motion.p variants={name_variants} initial="init" animate="animate">
          {`< KIMRANYOUNG />`}
        </motion.p>
      </div>
      {/* <ProfileCard /> */}
    </Container>
  );
}

const Container = styled.div`
  height: 80vh;
  color: white;
  font-size: 8vw;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .header-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;
  }
  .txt-container {
    display: flex;
  }
  p:nth-child(2) {
    letter-spacing: 1rem;
  }
`;
