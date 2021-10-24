import React, { useEffect, useState } from "react";
import styled, { keyframes, css } from "styled-components";

const NextImage = keyframes`
  0%{
    transform:translateX(100%);
    filter: blur(10px);
  }

  90%{
    filter: blur(10px);
  }
  100%{
    transform:translateX(0)
    filter: blur(0px);
  }
`;
const PrevImage = keyframes`
  0%{
    transform:translateX(-100%);
    filter: blur(10px);
  }
  90%{
    filter: blur(10px);
  }
  100%{
    transform:translateX(0)
    filter: blur(0px);
  }
`;

const FadeInImageContainer = styled.div`
  width: 100%;
  height: 100%;
  ${(props) =>
    props.move === "next"
      ? css`
          animation: ${NextImage} 0.2s ease;
        `
      : css`
          animation: ${PrevImage} 0.2s ease;
        `};
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
`;

export default function Index({ src, move, prevSrc }) {
  const [currentImage, setCurrentImage] = useState("");

  useEffect(() => {
    setCurrentImage(src);
  }, [src]);
  return (
    <>
      {currentImage === src && (
        <FadeInImageContainer move={move}>
          <Image src={src} />
        </FadeInImageContainer>
      )}
    </>
  );
}
