import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Imagesize from "../ImageSize";
import Beginning from "../Images/beggining.png";
import Button from "../Button";
import Carousel from "../Carousel";
import {
  ButtonFirst,
  ButtonLast,
  CarouselProvider,
  Slide,
  Slider,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

import Icons from "../Icons";

const Conatiner = styled.div`
  width: 100%;
  max-width: 1500px;
  height: 35rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  background-color: #fff;
`;
const Products = styled.div`
  width: ${({ width }) => (width ? width : "100%")};
  height: 100%;
  display: flex;
  flex-direction: column;
  border: 1px solid lightgray;
  margin-right: 1rem;
`;
const OfferTagDiv = styled.div`
  width: 100%;
  height: fit-content;
  border-bottom: 1px solid lightgray;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 1rem;
`;

const OfferTag = styled.span`
  font-size: 2.1rem;
  font-weight: 600;
  font-family: sans-serif;
  word-spacing: 0.2rem;
`;

const ProductsDiv = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 2rem;
  user-select: none;
  position: relative;
  outline: none;
`;

const StyledButtonFirst = styled(ButtonFirst)`
  z-index: 9;
  border: 1px solid black;
`;
const StyledButtonLast = styled(ButtonLast)`
  z-index: 9;
  border: 1px solid black;
`;

const StyledSlide = styled(Slide)`
  outline: none;
  width: 20rem;
  max-width: 220px;
  height: 238px;
  max-height: 238px;
  .focusRing___1airF.carousel__slide-focus-ring {
    outline: none !important;
  }
`;
function Index({ data, Tag, length, AdImg }) {
  const [allData, setAllData] = useState([]);
  useEffect(() => {
    if (allData.length === 0) {
      console.log("get Origin", data);
      setAllData(data.map((item) => item.productID));
    }
    return () => {
      console.log(
        "last all",
        allData.map((item) => item)
      );
    };
  }, [allData]);

  // console.log("carousel", data, Tag, length);
  const [visibleProduct, setVisibleProduct] = useState(5);
  const [disable, setDisable] = useState("left");
  useEffect(() => {
    if (!AdImg) {
      setVisibleProduct(6);
    }
  }, [setVisibleProduct]);

  const disableLeft = (e) => {
    e.preventDefault();
    setDisable("left");
  };
  const disableRight = (e) => {
    e.preventDefault();
    setDisable("right");
  };
  // data.data.map((item) => {
  //   console.log(item);
  // });

  // const generateCarousel = (Key, value, image) => {
  //   if (Key === "Name" || Key === "Price") {
  //     return (

  //     );
  //   }
  //   return;
  // };

  return (
    <Conatiner>
      <Products>
        <OfferTagDiv>
          <OfferTag>{Tag}</OfferTag>
          <Button
            width="10rem"
            height="4rem"
            backcolor="#2874f0"
            fontColor="#fff"
            radius="2px"
          >
            View All
          </Button>
        </OfferTagDiv>
        <ProductsDiv>
          <CarouselProvider
            naturalSlideHeight={238}
            naturalSlideWidth={220}
            totalSlides={length}
            visibleSlides={6}
            dragEnabled={false}
          >
            <Slider>
              {allData.length > 0 &&
                allData.map((item) => (
                  <StyledSlide>
                    <Carousel item={item} Tag={Tag} />
                  </StyledSlide>
                ))}
            </Slider>
            {disable === "right" && (
              <StyledButtonFirst onClick={disableLeft}>
                <Icons side="left" top="40%" />
              </StyledButtonFirst>
            )}
            {disable === "left" && (
              <StyledButtonLast onClick={disableRight}>
                <Icons side="right" top="40%" />
              </StyledButtonLast>
            )}
          </CarouselProvider>
        </ProductsDiv>
      </Products>
      {AdImg && <Imagesize imgUrl={Beginning} width="16%" height="100%" />}
    </Conatiner>
  );
}

export default Index;
