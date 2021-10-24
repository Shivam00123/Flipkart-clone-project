import React from "react";
import styled from "styled-components";
import SearchIcon from "@material-ui/icons/Search";

const SearchContainer = styled.div`
  width: 100%;
  max-width: 550px;
  display: flex;
  background-color: #fff;
  border: none;
  align-items: center;
  overflow: hidden;
  padding: 0.8rem;
`;
const InputBox = styled.input`
  flex: 1;
  outline: none;
  border: none;

  &:focus {
    outline: none;
    padding-left: 1rem;
    letter-spacing: 0.1rem;
  }
`;

const IconContainer = styled.div`
  flex: 0;
  border: none;
  outline: none;
  cursor: pointer;
`;

export default function index() {
  return (
    <SearchContainer>
      <InputBox placeholder="Search for products,brands or more" />
      <IconContainer>
        <SearchIcon style={{ color: "#2874f0", fontSize: "large" }} />
      </IconContainer>
    </SearchContainer>
  );
}
