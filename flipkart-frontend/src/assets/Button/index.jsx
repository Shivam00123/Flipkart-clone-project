import React from "react";
import styled from "styled-components";

const ButtonContainer = styled.button`
  width: ${({ width }) => (width ? width : 0)};
  height: ${({ height }) => (height ? height : "100%")};
  background-color: ${({ backcolor }) => (backcolor ? backcolor : "#fff")};
  color: ${({ fontColor }) => (fontColor ? fontColor : "#fff")};
  border: none;
  outline: none;
  font-weight: 600;
  font-size: ${({ size }) => (size ? size : "1.4rem")};
  cursor: pointer;
  font-family: sans-serif;
  border-radius: ${({ radius }) => (radius ? radius : "0px")};
  margin-top: ${({ top }) => (top ? top : null)};
`;

export default function index(props) {
  return <ButtonContainer {...props}>{props.children}</ButtonContainer>;
}
