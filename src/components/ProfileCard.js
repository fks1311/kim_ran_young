import Image from "next/image";
import profile from "@/lib/image.jpeg";
import { motion } from "framer-motion";
import styled from "styled-components";

export default function ProfileCard() {
  const variants = {
    initial: {
      opacity: 0,
      y: -500,
    },
    animate: {
      opacity: 1,
      y: 10,
      rotateY: 360,
      transition: {
        duration: 2,
      },
    },
    bounce: {
      y: [0, -10, 0, -10, 0],
      transition: {
        duration: 10,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
      },
    },
  };

  return (
    <Container variants={variants} initial="initial" animate="animate">
      <motion.div variants={variants} initial="initial" animate={["animate", "bounce"]}>
        <Image src={profile} alt="프로필 사진" style={{ width: "300px", height: "350px", borderRadius: "10px" }} />
      </motion.div>
    </Container>
  );
}

const Container = styled(motion.div)``;
