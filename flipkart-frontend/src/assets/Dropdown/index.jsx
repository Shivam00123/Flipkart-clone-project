import React, { useState } from "react";
import styled from "styled-components";
import ExpandMoreTwoToneIcon from "@material-ui/icons/ExpandMoreTwoTone";
import Menu from "../DropDownMenu";
import { data } from "../Data";

const DropdownContainer = styled.div`
  height: 5.6rem;
  width: fit-content;
  display: flex;
  align-items: center;
  cursor: pointer;
  flex-direction: column;
  justify-content: center;
  line-height: 2rem;
`;

const MoreContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const MoreDiv = styled.div`
  display: flex;
  align-items: center;
`;

const More = styled.span`
  color: ${({ color }) => (color ? color : "#fff")};
  font-size: ${({ size }) => (size ? size : "1.4rem")};
  font-weight: ${({ weight }) => (weight ? weight : "600")};
`;

const IconBoxDown = styled.div`
  width: fit-content;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  animation: rotatedown 0.4s 1;
  animation-fill-mode: forwards;

  @keyframes rotatedown {
    from {
      transform: rotate(-180deg);
    }
    to {
      transform: rotate(0deg);
    }
  }
`;

const IconBoxUp = styled.div`
  width: fit-content;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  animation: rotateup 0.4s 1;
  animation-fill-mode: forwards;

  @keyframes rotateup {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(-180deg);
    }
  }
`;

export default function Index(props) {
  const [openDropDown, setOpenDropDown] = useState(false);
  const Data = props.data;
  return (
    <DropdownContainer
      onMouseOver={() => setOpenDropDown(true)}
      onMouseLeave={() => setOpenDropDown(false)}
    >
      <MoreContainer>
        <MoreDiv>
          <More {...props}>{props.children}</More>
        </MoreDiv>
        {openDropDown ? (
          <IconBoxUp>
            <ExpandMoreTwoToneIcon style={{ color: "#fff" }} />
          </IconBoxUp>
        ) : (
          <IconBoxDown>
            <ExpandMoreTwoToneIcon style={{ color: "#fff" }} />
          </IconBoxDown>
        )}
        {openDropDown && (
          <Menu
            data={data}
            onMouseOver={() => setOpenDropDown(true)}
            onMouseLeave={() => setOpenDropDown(false)}
          />
        )}
      </MoreContainer>
    </DropdownContainer>
  );
}
