import React from "react";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import styled from "styled-components";

const IconRightDiv = styled.div`
  width: 5rem;
  height: 10rem;
  position: absolute;
  top: ${({ top }) => (top ? top : "40%")};
  right: 0;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: cursor;
  border-radius: 2px;
  box-shadow: -1px 4px 20px -6px rgba(0, 0, 0, 0.75);
`;
const IconLeftDiv = styled.div`
  width: 5rem;
  height: 10rem;
  position: absolute;
  top: ${({ top }) => (top ? top : "40%")};
  left: 0;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: cursor;
  border-radius: 2px;
  box-shadow: -1px 4px 20px -6px rgba(0, 0, 0, 0.75);
`;

function index({ side, top }) {
  return (
    <>
      {side === "left" ? (
        <IconLeftDiv top={top}>
          <ChevronLeftIcon style={{ color: "#000", fontSize: "5rem" }} />
        </IconLeftDiv>
      ) : (
        <IconRightDiv top={top}>
          <ChevronRightIcon style={{ color: "#000", fontSize: "5rem" }} />
        </IconRightDiv>
      )}
    </>
  );
}

export default index;
