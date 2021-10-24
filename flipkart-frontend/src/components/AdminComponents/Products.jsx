import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import Marginer from "../../assets/Marginer";
import { Link, Redirect } from "react-router-dom";
import { useDispatch } from "react-redux";
import { allDetails } from "../../actions/details";
import ErrorFlash from "../../assets/ErrorFlash";

const Container = styled.div`
  height: 100%;
  width: 100%;
  padding: 2rem;
`;

const InputContainer = styled.div`
  width: 50%;
  height: 5rem;
  display: flex;
  justify-content: space-around;
  /* margin-top: 25rem; */
  margin-bottom: 2rem;
  align-items: center;
  left: 0;
`;
const Input = styled.input`
  width: 40%;
  height: 100%;
`;

const ImgContainer = styled.div`
  width: 50rem;
  height: 3rem;
  margin-bottom: 30rem;
  margin-left: 50%;
  transform: translateX(-50%);
`;

const Image = styled.img`
  width: 30rem;
  height: 30rem;
  border: 1px solid black;
`;

const Selection = styled.select`
  width: 50rem;
  height: 5rem;
  margin-left: 50%;
  transform: translateX(-50%);
  margin-bottom: 5rem;
`;

const Options = styled.option`
  font-size: 1.3rem;
  font-weight: 600;
`;

const ButtonContainer = styled.div`
  height: 10rem;
  width: fit-content;
  display: flex;
  align-items: center;
  transform: translateY(-10rem);
  cursor: pointer;
  margin-left: auto;
  margin-right: 25rem;
`;

const Button = styled.button`
  width: ${({ width }) => (width ? width : 0)};
  height: ${({ height }) => (height ? height : 0)};
  font-size: ${({ size }) => (size ? size : "4rem")};
  border-radius: 50%;
  background-color: #4eda4e;
  border: none;
  cursor: pointer;
`;

const Heading = styled.h1``;
const TextArea = styled.textarea`
  width: 500px;
  height: 300px;
  margin: 2rem;
`;

let arr = [];
let obj = {};

function Products() {
  const dispatch = useDispatch();
  const [inputList, setInputList] = useState([]);
  const [inputKey, setInputKey] = useState(null);
  const [inputValue, setInputValue] = useState("not defined");
  const [error, setError] = useState("");
  const [image, setImage] = useState(null);
  const [collection, setCollection] = useState("Laptops");
  const [description, setDescription] = useState(null);
  const input = () => {
    return (
      <InputContainer>
        <Input />
      </InputContainer>
    );
  };
  const generateInput = () => {
    return setInputList(
      inputList.concat(
        <InputContainer>
          <Input
            key={inputList.length}
            onChange={(e) => setInputKey(e.target.value)}
          />
          <Input
            key={inputList.length + 1}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </InputContainer>
      )
    );
  };
  const addOnClick = (e) => {
    e.preventDefault();
    if (!inputKey) {
      setError("Key is required");
    } else {
      if (inputKey || inputValue) {
        const newKey = inputKey[0].toUpperCase() + inputKey.slice(1);
        arr.push(inputKey[0].toUpperCase() + inputKey.slice(1));
        arr.push(inputValue[0].toUpperCase() + inputValue.slice(1));
      }
      setInputValue(null);
      setInputKey(null);
      console.log("arr", arr);
      setError("");
      generateInput();
    }
  };

  useEffect(() => {
    generateInput();
  }, []);
  useEffect(() => {
    return () => {
      generateInput();
    };
  }, []);

  const onImageChange = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    setImage(base64);
  };

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = () => {
        reject(error);
      };
    });
  };

  const handleCreateObject = (e) => {
    console.log("selection", collection);
    const arrLength = arr.length;
    for (var i = 0; i < arrLength; i += 2) {
      var value = arr[i + 1];
      if (!arr[i + 1]) {
        value = "not defined";
      }
      obj[arr[i]] = value;
    }
    console.log("final", obj);
    setError("");
    if (image) {
      dispatch(allDetails(JSON.stringify(obj), image, collection, description));
    } else {
      return;
    }
  };

  return (
    <Container>
      {error && <ErrorFlash indicator="error">{error}</ErrorFlash>}
      <Selection onChange={(e) => setCollection(e.target.value)}>
        <Options>Laptops</Options>
        <Options>Mobiles</Options>
        <Options>Watches For Men</Options>
        <Options>Shoes For Men</Options>
        <Options>Shoes For Women</Options>
      </Selection>
      <ImgContainer>
        {image && <Image src={image} alt="image preview" />}
        <Input type="file" onChange={onImageChange} />
      </ImgContainer>
      {inputList}
      <ButtonContainer>
        <Button
          onClick={(e) => addOnClick(e)}
          width="7rem"
          height="7rem"
          left="10rem"
        >
          +
        </Button>
        <Marginer direction="horizontal" margin="10rem" />
        <Link to="/admin/preview">
          <Button
            onClick={(e) => handleCreateObject(e)}
            width="9rem"
            height="9rem"
            size="2rem"
          >
            Submit
          </Button>
        </Link>
      </ButtonContainer>
      <Heading>Description</Heading>
      <TextArea
        placeholder="Enter Description"
        onChange={(e) => setDescription(e.target.value)}
      />
    </Container>
  );
}

export default Products;
