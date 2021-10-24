import React, { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import styled, { keyframes } from "styled-components";
import { allDetails } from "../../actions/details";
import Marginer from "../../assets/Marginer";
import Button from "../../assets/Button";
import axios from "../../axios";
import { Link } from "react-router-dom";

const slipDown = keyframes`
    100%{
        top:0;
    }
`;
const Container = styled.div`
  width: 100vw;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ImageContainer = styled.div`
  width: 350px;
  height: 300px;
  overflow: hidden;
  border: 1px solid black;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
`;

const KeyValue = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-wrap: wrap;
`;
const ErrorContainer = styled.div`
  margin-top: -2rem;
  margin-left: 50%;
  transform: translateX(-50%);
  height: fit-content;
  width: 50rem;
  padding: 0.5rem;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  animation: ${slipDown} 0.5s ease-in-out 1;
  animation-fill-mode: forwards;
  background-color: red;
`;
const ErrorText = styled.span`
  color: #fff;
  font-weight: 600;
  font-size: 1.1rem;
  word-spacing: 0.3rem;
`;

const KeyItem = styled.div`
  width: 50%;
  height: 5rem;
  box-sizing: border-box;
  text-align: ${({ align }) => (align ? align : null)};
`;
const ItemText = styled.span`
  font-size: ${({ size }) => (size ? size : "0")};
  font-weight: ${({ weight }) => (weight ? weight : "normal")};
`;

function Preview({ details, previewImage, collection }) {
  const [error, setError] = useState("");
  console.log(details, collection);
  const generateKeyValue = () => {
    if (details) {
      const allDetails = JSON.parse(details);
      console.log("JSON", allDetails);
      return Object.keys(allDetails).map((key, index) => (
        <KeyValue key={index}>
          <KeyItem align="center">
            <ItemText size="1.4rem" weight="600">
              {key}
            </ItemText>
          </KeyItem>
          <KeyItem align="center" key={index + 1}>
            <ItemText size="1.2rem" weight="500">
              {allDetails[key]}
            </ItemText>
          </KeyItem>
        </KeyValue>
      ));
    }
  };

  const handleSubmitDetails = () => {
    if (!details || !previewImage || !collection) {
      return setError("Nothing to placed");
    } else {
      const newCollection = collection.replace(/\s/g, "");
      axios
        .post("/admin/addProduct", {
          details,
          previewImage,
          newCollection,
        })
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  };

  console.error("ERROR", error);

  return (
    <Container>
      {error && (
        <ErrorContainer>
          <ErrorText>{error}</ErrorText>
        </ErrorContainer>
      )}
      {collection && <h1>{collection}</h1>}
      {previewImage && (
        <ImageContainer>
          <Image src={previewImage} />
        </ImageContainer>
      )}
      <Marginer direction="vertical" margin="5rem" />
      {allDetails !== undefined && generateKeyValue()}
      <Link to="/">
        <Button
          onClick={() => handleSubmitDetails()}
          width="10rem"
          height="5rem"
          backcolor="#2874f0"
          radius="5px"
        >
          ADD
        </Button>
      </Link>
    </Container>
  );
}

function mapStateToProps({ details, previewImage, collection }) {
  return {
    details,
    previewImage,
    collection,
  };
}
export default connect(mapStateToProps)(Preview);
