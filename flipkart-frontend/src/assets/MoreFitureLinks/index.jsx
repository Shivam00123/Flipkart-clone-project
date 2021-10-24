import React from "react";
import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  height: 100%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  text-align: left;
`;

const Title = styled.h3`
  color: #686868;
  font-size: ${({ size }) => (size ? size : "1.4rem")};
  font-family: sans-serif;
  text-transform: capitalize;
  margin-bottom: 2rem;
`;
const Links = styled.span`
  color: #fff;
  font-family: sans-serif;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  font-weight: 500;
  white-space: nowrap;
  line-height: 1.6;
  cursor: pointer;
  user-select: none;
  &:hover {
    text-decoration: underline;
  }
`;

const AddressLink = styled.span`
  color: #fff;
  font-family: sans-serif;
  font-size: 1.1rem;
  margin-bottom: 1rem;
  font-weight: 600;
  white-space: nowrap;
  line-height: 1.6;
  user-select: none;
`;

function index({ item, size }) {
  return (
    <Container>
      <Title size={size}>{item.title}</Title>
      {item.links &&
        item.links.map((link, index) => <Links key={index}>{link}</Links>)}
      {!item.links && <AddressLink>{item.content}</AddressLink>}
    </Container>
  );
}

export default index;
