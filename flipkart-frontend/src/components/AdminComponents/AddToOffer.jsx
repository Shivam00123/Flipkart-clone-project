import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Button from "../../assets/Button";
import axios from "../../axios";
import Toggle from "../../assets/Toggle";
import { ProductData } from "../../assets/ToggleData";
import { connect } from "react-redux";
import ErrorFlash from "../../assets/ErrorFlash";

const Container = styled.div`
  width: 100%;
  height: 100%;
  user-select: none;
  display: grid;
  margin-top: 2rem;
  position: relative;
`;

const TopContainer = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: space-around;
`;

const Selection = styled.select`
  width: 50%;
  height: 6rem;
`;
const Options = styled.option`
  font-size: 1.4rem;
  font-weight: 600;
`;

const ItemsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
`;
const Item = styled.div`
  width: 300px;
  height: 400px;
  margin: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  cursor: pointer;
  position: relative;
  border: 1px solid black;
  border-radius: 10px;
  position: relative;
`;
const Image = styled.img`
  width: 100%;
  height: 220px;
  margin-bottom: 2rem;
  object-fit: contain;
`;

const KeyValue = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  margin: 2rem 0;
  text-align: center;
`;

const Key = styled.div`
  width: 50%;
  height: fit-content;
  font-size: 1.6rem;
  font-weight: 600;
`;

const ItemCover = styled.div`
  width: 100%;
  height: 100%;
  background: transparent;
  position: absolute;
  top: 0;
`;

const SubmitContainer = styled.div`
  width: 100px;
  height: 50px;
  position: fixed;
  bottom: 20px;
  right: 20px;
  border-radius: 50%;
  overflow: hidden;
`;
const ToggleContainer = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;
  flex-direction: column;
  padding: 10px;
  z-index: 100;
  background-color: white;
  position: fixed;
  right: 20px;
  bottom: 80px;
  box-shadow: -0.5px 4px 12px -7px rgba(0, 0, 0, 0.75);
`;

const ToggleItem = styled.div`
  width: 100%;
  height: 100%;
  border-bottom: 1px solid #f8f5f5;
  background-color: #fff;
  padding: 1rem;
  &:hover {
    background-color: #f1f3f6;
    color: #2874f0;
  }
`;

function AddToOffer({ toggleCollection }) {
  const [dataOf, setDataOf] = useState("Mobiles");
  const [data, setData] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [selectedItem, setSelectedItem] = useState([]);
  const [success, setSucess] = useState("");
  const [error, setError] = useState("");
  let breakLoop = true;
  const [collectionTo, setCollectionTo] = useState(null);

  let count = 0;

  const handleFetchData = () => {
    console.log("dataOf", dataOf);
    const newData = dataOf;
    axios
      .post("/admin/fetch/data", {
        newData,
      })
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.error("Error", err));
  };
  if (data.length) {
    console.log("data");
  }
  function Target(e) {}

  function addToggle(e, ID) {
    if (selectedItem.includes(ID)) {
      console.log("before", selectedItem);
      setSelectedItem(selectedItem.filter((item) => item !== ID));
      e.target.parentElement.style.borderColor = "black";
      e.target.parentElement.style.borderWidth = "1px";
      e.target.parentElement.style.opacity = "1";
    } else {
      if (selectedItem.length > 10) {
        return;
      }
      setSelectedItem([...selectedItem, ID]);
      e.target.parentElement.style.borderColor = "green";
      e.target.parentElement.style.borderWidth = "4px";
      e.target.parentElement.style.opacity = "0.5";
    }
    console.log("array1", selectedItem);
  }

  function setDefault(imageUrl) {
    count = 0;
    return <Image src={imageUrl} />;
  }

  function generateProfile(key, value) {
    if (count <= 2) {
      if (key === "Name" || key === "Price") {
        count += 1;
        return (
          <KeyValue>
            <Key>{key}</Key>
            <Key>{value}</Key>
          </KeyValue>
        );
      }
    }
    return;
  }

  function addNow(e) {
    e.preventDefault();
    setToggle(true);
  }

  function handleToggleClicked(e) {
    const coll = e.target.innerText.replace(/\s/g, "");
    setCollectionTo(coll);
  }

  function addProductToOffer() {
    const length = selectedItem.length;
    if (length === 0) {
      return;
    }
    if (length > 0) {
      console.log("axios");
      axios
        .post("/admin/addProductToOffer", {
          productID: selectedItem[0],
          collectionName: collectionTo,
        })
        .then((res) => {
          setSucess(res.data.message);
          selectedItem.shift();
          const newLength = selectedItem.length;
          if (length != newLength) {
            addProductToOffer();
          }
        })
        .catch((err) => {
          setError(err);
        });
    }
    console.log("last");
  }
  useEffect(() => {
    if (collectionTo) {
      addProductToOffer();
      setDataOf("Mobiles");
      setCollectionTo(null);
      setData([]);
      setSelectedItem([]);
      setToggle(false);
    }
  }, [collectionTo]);

  return (
    <Container>
      {success && <ErrorFlash indicator="success">{success}</ErrorFlash>}
      {error && <ErrorFlash indicator="error">{error}</ErrorFlash>}
      <TopContainer>
        <Selection onChange={(e) => setDataOf(e.target.value)}>
          <Options>Laptops</Options>
          <Options selected>Mobiles</Options>
        </Selection>
        <Button
          onClick={() => handleFetchData()}
          width="10rem"
          height="5rem"
          backcolor="#2874f0"
          radius="5px"
        >
          Request
        </Button>
      </TopContainer>
      <ItemsContainer onClick={(e) => Target(e)}>
        {data.length &&
          data.map((item, index) => (
            <Item key={index}>
              {(breakLoop = false)}
              {setDefault(item.imageUrl)}
              {!breakLoop &&
                Object.entries(JSON.parse(item.details)).map(([key, value]) =>
                  count !== 2 ? generateProfile(key, value) : (breakLoop = true)
                )}
              <ItemCover onClick={(e) => addToggle(e, item._id)} />
            </Item>
          ))}
      </ItemsContainer>
      {toggle && (
        <ToggleContainer onClick={(e) => handleToggleClicked(e)}>
          <ToggleItem>Top Offers</ToggleItem>
          <ToggleItem>Deals Of The Day</ToggleItem>
        </ToggleContainer>
      )}
      {data.length && (
        <SubmitContainer>
          <Button
            width="100%"
            height="100%"
            backcolor="#2874f0"
            onClick={(e) => addNow(e)}
          >
            ADD
          </Button>
        </SubmitContainer>
      )}
    </Container>
  );
}

function mapStateToProps({ toggleCollection }) {
  return {
    toggleCollection,
  };
}

export default connect(mapStateToProps)(AddToOffer);
