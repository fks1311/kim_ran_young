"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { motion } from "framer-motion";
import styled from "styled-components";

export default function NavBar() {
  const router = useRouter();
  const [active, setActive] = useState(false);
  const nav = ["ABOUT", "CARRER", "PROJECT", " GIT & BLOG"];
  const onClick = (route) => {
    router.push(route.toLowerCase());
    setActive(!active);
  };
  const variants = {
    initial: {
      opacity: 0,
      scaleY: 0,
    },
    animate: {
      opacity: 1,
      scaleY: 1,
      transition: {
        duration: 1,
      },
    },
  };

  return (
    <Layout>
      <Container>
        <Logo onClick={() => router.push("/")}>KIMRANYOUNG</Logo>
        <Hamburger
          onClick={() => {
            setActive(!active);
          }}
        >
          <div />
          {!active && <div />}
        </Hamburger>
      </Container>
      {active && (
        <NavLayout variants={variants} initial="initial" animate="animate">
          {nav.map((nav, i) => (
            <Items key={i} onClick={() => onClick(nav)}>
              {nav} <MdOutlineKeyboardArrowRight />
            </Items>
          ))}
        </NavLayout>
      )}
    </Layout>
  );
}

const Layout = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 2rem;
  cursor: pointer;
`;
const Container = styled.nav`
  height: 30px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Logo = styled.div`
  color: white;
`;
const Hamburger = styled.div`
  height: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  padding: 10px;
  border: 1px solid #eeeeee;
  border-radius: 50%;
  div {
    width: 15px;
    border: 1px solid white;
  }
`;

const NavLayout = styled(motion.div)`
  position: absolute;
  height: 20rem;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: 1rem;
  margin-top: 5rem;
  border: 1px solid white;
  border-radius: 10px;
  background-color: white;
  div:nth-child(n + 1):nth-child(-n + 3) {
    border-right: 1px solid #eeeeee;
  }
`;
const Items = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 0px 1rem;
`;
