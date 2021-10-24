import React from "react";
import styled from "styled-components";

const Font = styled.span`
  font-size: ${({ size }) => (size ? size : "1rem")};
  font-weight: ${({ weight }) => (weight ? weight : "normal")};
  color: ${({ color }) => (color ? color : "#000")};
  font-family: sans-serif;
  position: ${({ position }) => (position ? position : null)};
  top: ${({ top }) => (top ? top : "0px")};
  left: ${({ left }) => (left ? left : "0px")};
  right: ${({ right }) => (right ? right : "0px")};
  letter-spacing: ${({ lspace }) => (lspace ? lspace : null)};
  line-height: ${({ lheight }) => (lheight ? lheight : null)};
  word-spacing: 0.1rem;
  bottom: ${({ bottom }) => (bottom ? bottom : null)};
`;

function index(props) {
  const Data = JSON.stringify(props.children);
  // const newData = Data.replace(/,/g, "\n");

  return <Font {...props}>{props.children}</Font>;
}

export default index;
