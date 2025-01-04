"use client";

import { useState } from "react";
import styled from "styled-components";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

export default function NavBar() {
  const [active, setActive] = useState(true);

  return (
    <Layout>
      <Container>
        <Logo>KIMRANYOUNG</Logo>
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
        <NavLayout $isActive={active}>
          <Items>
            ABOUT <MdOutlineKeyboardArrowRight />
          </Items>
          <Items>
            CARRER
            <MdOutlineKeyboardArrowRight />
          </Items>
          <Items>
            PROJECT
            <MdOutlineKeyboardArrowRight />
          </Items>
          <Items>
            GIT & BLOG
            <MdOutlineKeyboardArrowRight />
          </Items>
        </NavLayout>
      )}
    </Layout>
  );
}

const Layout = styled.div`
  cursor: pointer;
`;
const Container = styled.nav`
  height: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
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

const NavLayout = styled.div`
  height: 13rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: 1rem;
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
