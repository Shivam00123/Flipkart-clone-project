import React from "react";
import styled from "styled-components";
import Conatent from "./Conatent";
import MoreAbout from "./MoreAbout";
import Footer from "./Footer";

const Container = styled.div`
  height: fit-content;
  width: fit-content;
  /* background-color: red; */
`;

export default function Home() {
  return (
    <Container>
      <Conatent />
      <MoreAbout />
      <Footer />
    </Container>
  );
}
