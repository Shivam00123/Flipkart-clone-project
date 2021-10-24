import React from "react";
import styled from "styled-components";
import Marginer from "../Marginer";

const Container = styled.div`
  width: 100%;
  height: fit-content;
  text-align: left;
`;
const Title = styled.h1`
  font-family: sans-serif;
  color: #686868;
  font-size: 1.7rem;
  margin-bottom: 1rem;
`;

const Content = styled.p`
  color: #878787;
  margin-bottom: 1rem; ;
`;

function Index({ text }) {
  return (
    <Container>
      <Title>{text.title}</Title>

      <Content>{text.content}</Content>
    </Container>
  );
}

export default Index;
