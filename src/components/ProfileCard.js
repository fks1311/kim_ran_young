import Image from "next/image";
import me from "@/lib/me.jpg";
import { motion } from "framer-motion";
import styled from "styled-components";
import { usePathname } from "next/navigation";

export default function ProfileCard() {
  const pathname = usePathname();
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
      y: [0, -15, 0, -15, 0],
      transition: {
        duration: 10,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
      },
    },
  };

  return (
    <Container variants={variants} initial="initial" animate="animate" pathname={pathname}>
      <motion.div variants={variants} initial="initial" animate={["animate", "bounce"]}>
        <Image src={me} alt="프로필 사진" style={{ width: "300px", height: "350px", borderRadius: "10px" }} />
      </motion.div>
    </Container>
  );
}

const Container = styled(motion.div)`
  position: ${({ pathname }) => (pathname.includes("about") ? `absolute` : `relative`)};
  top: ${({ pathname }) => (pathname.includes("about") ? `25%` : `null`)};
  left: ${({ pathname }) => (pathname.includes("about") ? `70%` : `null`)};
  @media ${({
      theme: {
        media: { laptop },
      },
    }) => laptop} {
    left: ${({ pathname }) => (pathname.includes("about") ? `70%` : `null`)};
  }
  @media ${({
      theme: {
        media: { tablet },
      },
    }) => tablet} {
    left: ${({ pathname }) => (pathname.includes("about") ? `50%` : `null`)};
  }
  @media ${({
      theme: {
        media: { smaller },
      },
    }) => smaller} {
    left: ${({ pathname }) => (pathname.includes("about") ? `22%` : `null`)};
  }
`;
