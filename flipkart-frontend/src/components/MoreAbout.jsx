import React from "react";
import styled from "styled-components";
import Moretext from "../assets/MoreText";
import { data } from "../assets/MoreData";
import MoreText from "../assets/MoreText";

const Container = styled.div`
  width: 100vw;
  background-color: #fff;
  text-align: left;
  padding: 1rem;
  padding-top: 3rem;
`;

function MoreAbout() {
  return (
    <Container>
      {data.map((paragraph, index) => (
        <MoreText text={paragraph} key={index} />
      ))}
    </Container>
  );
}

export default MoreAbout;
