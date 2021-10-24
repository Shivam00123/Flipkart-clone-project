import React, { useEffect, useRef, useState } from "react";
import styled, { css, keyframes } from "styled-components";

const Shift = keyframes`
  0%{
    
  }
  100%{
    font-size:1.3rem;
    top:0; 
  }
`;

const Container = styled.div`
  width: ${({ width }) => (width ? width : "100%")};
  height: ${({ height }) => (height ? height : "100%")};
  overflow: hidden;
  position: relative;
  margin-top: ${({ top }) => (top ? top : "0px")};
  background: #fff;
`;
const Input = styled.input`
  width: 100%;
  height: 70%;
  border: none;
  outline: none;
  border-bottom: 1px solid lightgray;
  font-size: 1.6rem;
  padding-left: 10px;
  font-family: sans-serif;
  font-weight: 500;
  position: absolute;
  bottom: 0;
  background: transparent;
  &:focus {
    background: transparent;
  }
`;

// const PlaceHolder = styled.span`
//   height: fit-content;
//   font-size: 1.6rem;
//   padding-left: 7px;
//   position: absolute;
//   z-index: 10;
//   bottom: 4px;
//   color: #878787;
//   /* ${({ Inputfield }) =>
//     Inputfield === "open"
//       ? css`
//           animation: ${Shift} 0.2s ease-in 1;
//           animation-fill-mode: forwards;
//         `
//       : null} */
// `;

function Index(props) {
  const { placeholder, type } = props;
  const [Inputfield, setInput] = useState("close");
  const [email, setEmail] = useState("");
  // const inputRef = useRef();
  return (
    <Container {...props}>
      {/* <PlaceHolder Inputfield={Inputfield}>
        Enter Email/Phone Number
      </PlaceHolder> */}
      <Input
        type={type}
        placeholder={placeholder}
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
    </Container>
  );
}

export default Index;
