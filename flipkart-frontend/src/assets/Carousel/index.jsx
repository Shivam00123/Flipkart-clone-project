import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import Marginer from "../Marginer";
import { Link } from "react-router-dom";
import { CarouselProvider, Slide, Slider } from "pure-react-carousel";
import Font from "../Fonts";
import { useDispatch } from "react-redux";
import { buyProduct } from "../../actions/products";

const CarouselDiv = styled.div`
  width: 100%;
  max-width: 20rem;
  height: 23rem;
  max-height: 23rem;
  display: flex;
  padding: 1rem;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1rem;
  cursor: pointer;
  outline: none;
  text-align: center;
  position: relative;
`;

const CarouselImage = styled.img`
  width: ${({ pop }) => (pop === true ? "72%" : "65%")};
  height: ${({ pop }) => (pop === true ? "72%" : "65%")};
  object-fit: contain;
  transition: all 0.1s linear;
  z-index: -1;
`;
const CarouselDetail = styled.div`
  display: flex;
  width: 100%;
  height: fit-content;
  flex-direction: column;
`;

const Cover = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background: transparent;
  z-index: 100;
`;

const KeyValue = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
`;

function Index({ item, Tag }) {
  const [run, setRun] = useState(false);
  const refDIV = useRef();
  const dispatch = useDispatch();

  const [hover, setHover] = useState(false);
  function generateValue(key, value) {
    if (key === "Name" || key === "Price") {
      return (
        <KeyValue>
          <Font size="1.5rem" weight="500" bottom="1rem" color="#4a984e">
            {value}
          </Font>
        </KeyValue>
      );
    }
    return;
  }
  const getItem = (e) => {
    dispatch(
      buyProduct(
        e.target.getAttribute("data-ID"),
        e.target.getAttribute("data-Tag")
      )
    );
  };

  return (
    <CarouselDiv
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {item && (
        <>
          <Link to="/fetch/buyingProduct">
            <Cover
              onClick={(e) => getItem(e)}
              data-ID={item._id}
              data-Tag={Tag}
            />
          </Link>
          <CarouselImage pop={hover} src={item.imageUrl} />
          <Marginer direction="vertical" margin="1rem" />
          <CarouselDetail>
            {Object.entries(JSON.parse(item.details)).map(([key, value]) =>
              generateValue(key, value)
            )}
          </CarouselDetail>
        </>
      )}
    </CarouselDiv>
  );
}

export default Index;
