import React from "react";
import { Link, Redirect } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;
  flex-direction: column;
  padding: 10px;
  z-index: 100;
  background-color: white;
  position: ${({ position }) => (position ? position : "absolute")};
  top: ${({ top }) => (top ? top : null)};
  left: ${({ left }) => (left ? left : null)};
  right: ${({ right }) => (right ? right : null)};
  bottom: ${({ bottom }) => (bottom ? bottom : null)};
  box-shadow: -0.5px 4px 12px -7px rgba(0, 0, 0, 0.75);
`;

const Item = styled.div`
  width: 100%;
  height: fit-content;
  border-bottom: 1px solid #f8f5f5;
  background-color: #fff;
  padding: 1rem;
  &:hover {
    background-color: #f1f3f6;
    color: #2874f0;
  }
`;
const ItemText = styled.span`
  font-size: 1.4rem;
`;

function index(props) {
  const handleClick = (e) => {
    var p = e.target.innerText.replace(/\s/g, "");
    const path = p.toLowerCase();
    <Redirect to={`/admin/${path}`} />;
  };

  return (
    <Container onClick={(e) => handleClick(e)} {...props}>
      {props.data.map((item) => (
        <Link to={item.link} style={{ textDecoration: "none" }}>
          <Item>
            <ItemText>{item.name}</ItemText>
          </Item>
        </Link>
      ))}
    </Container>
  );
}

export default index;
