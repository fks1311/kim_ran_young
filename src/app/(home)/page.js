"use client";

import styled from "styled-components";

export default function Home() {
  return (
    <Container>
      <Title>title</Title>
    </Container>
  );
}

const Container = styled.div``;
const Title = styled.div`
  color: ${({ theme }) => console.log(theme)};
`;
