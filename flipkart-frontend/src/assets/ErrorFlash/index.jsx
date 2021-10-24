import React from "react";
import styled, { keyframes } from "styled-components";

const slipDown = keyframes`
    100%{
        top:0;
    }
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
  background-color: ${({ indicator }) =>
    indicator === "error" ? "red" : "green"};
`;
const ErrorText = styled.span`
  color: #fff;
  font-weight: 600;
  font-size: 1.1rem;
  word-spacing: 0.3rem;
`;

function index(props) {
  return (
    <ErrorContainer {...props}>
      <ErrorText>{props.children}</ErrorText>
    </ErrorContainer>
  );
}

export default index;
