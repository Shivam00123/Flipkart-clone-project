import React, { useEffect, useState } from "react";
import { Slider, Slide, CarouselProvider } from "pure-react-carousel";
import styled, { keyframes } from "styled-components";
import ImageOne from "../Images/Beardo.png";
import ImageTwo from "../Images/realme.jpg";
import AdImage from "../AdImage";
import AdImageThree from "../Images/BlendersPride.jpeg";
import Icons from "../Icons";

const Container = styled.div`
  width: 100%;
  height: 30rem;
  padding: 1rem;
  position: relative;
  background-color: #fff;
  cursor: pointer;
`;
const IconContainer = styled.div``;

export default function Index() {
  const Ad = [ImageOne, ImageTwo, AdImageThree];
  const [current, setCurrent] = useState(0);
  const [move, setMove] = useState("next");
  const [hover, setHover] = useState(false);

  const nextImage = () => {
    setCurrent(current === Ad.length - 1 ? 0 : (prevIndex) => prevIndex + 1);
    setMove("next");
  };

  const prevImage = () => {
    setCurrent(current === 0 ? Ad.length - 1 : (prevIndex) => prevIndex - 1);
    setMove("prev");
  };

  useEffect(() => {
    if (!hover) {
      const HandleNext = setInterval(nextImage, 3000);
      return () => clearInterval(HandleNext);
    }
  }, [nextImage]);

  return (
    <Container
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <AdImage src={Ad[current]} move={move} />
      <IconContainer onClick={prevImage}>
        <Icons side="left" />
      </IconContainer>
      <IconContainer onClick={nextImage}>
        <Icons side="right" />
      </IconContainer>
    </Container>
  );
}
