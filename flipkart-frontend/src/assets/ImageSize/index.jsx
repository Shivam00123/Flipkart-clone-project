import React from "react";
import styled from "styled-components";

const ImageContainer = styled.div`
  width: ${({ width }) => (width ? width : "auto")};
  height: ${({ height }) => (height ? height : "auto")};
  display: flex;
  border: none;
  justify-content: ${({ justify }) => (justify ? justify : "center")};
  align-items: center;
  overflow: hidden;
  position: ${({ position }) => (position ? position : null)};
  top: ${({ top }) => (top ? top : null)};
  left: ${({ left }) => (left ? left : null)};
  right: ${({ right }) => (right ? right : null)};
  bottom: ${({ bottom }) => (bottom ? bottom : null)};
`;
const Image = styled.img`
  height: 100%;
  width: 100%;
`;

export default function index(props) {
  const { imgUrl } = props;
  return (
    <ImageContainer {...props}>
      <Image src={imgUrl} />
    </ImageContainer>
  );
}
