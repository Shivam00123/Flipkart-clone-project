import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import Button from "../assets/Button";
import axios from "../axios";
import Fonts from "../assets/Fonts";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const DisplayProduct = styled.div`
  height: fit-content;
  display: flex;
  justify-content: space-around;
  border-bottom: 2px solid #f8f5f5;
  padding: 1rem;
`;
const ImageContainer = styled.div`
  width: 40%;
  height: 400px;
  border: 1px solid black;
`;
const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const SpecsDiv = styled.div`
  width: 30%;
  height: fit-content;
  border: 1px solid black;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
`;
const KeyValue = styled.div`
  width: 100%;
  height: fit-content;
  padding: 2rem;
  display: flex;
  border-bottom: 1px solid #c9c4c4;
`;
const KeyValueItem = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;

const ButtonContainer = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: space-around;
`;

function BuyProduct({ buyingProduct, TagName }) {
  console.log(TagName, buyingProduct);
  const [Image, setImage] = useState(null);
  const [details, setDetails] = useState([]);
  useEffect(() => {
    if ((TagName, buyingProduct)) {
      const newTag = TagName.replace(/\s/g, "");
      console.log(newTag);
      axios
        .get(`/fetch/buyProduct/:${newTag}/:${buyingProduct}`)
        .then((res) => {
          setImage(res.data.data[0].productID.imageUrl);
          const Details = JSON.parse(res.data.data[0].productID.details[0]);
          setDetails([Details]);
        });
    }
  }, [TagName, buyingProduct]);
  return (
    <Container>
      <DisplayProduct>
        {Image && (
          <ImageContainer>
            <ProductImage src={Image} alt="Product Image" />
          </ImageContainer>
        )}
        <SpecsDiv>
          <center>
            <h1>Specifications</h1>
          </center>
          {details.length > 0 &&
            Object.entries(details[0]).map(([key, value]) => (
              <KeyValue>
                <KeyValueItem>
                  <Fonts size="2rem" weight="600">
                    {key}
                  </Fonts>
                </KeyValueItem>
                <KeyValueItem>
                  <Fonts size="1.5rem" weight="500">
                    {value}
                  </Fonts>
                </KeyValueItem>
              </KeyValue>
            ))}
        </SpecsDiv>
      </DisplayProduct>
      <ButtonContainer>
        <Button
          width="45%"
          height="5rem"
          backcolor="#E65100"
          size="1.6rem"
          radius="5px"
        >
          Buy Now
        </Button>
        <Button
          width="45%"
          height="5rem"
          backcolor="#E65100"
          size="1.6rem"
          radius="5px"
        >
          Add To Cart
        </Button>
      </ButtonContainer>
    </Container>
  );
}

function mapStateToProps({ buyingProduct, TagName }) {
  return {
    buyingProduct,
    TagName,
  };
}

export default connect(mapStateToProps)(BuyProduct);
