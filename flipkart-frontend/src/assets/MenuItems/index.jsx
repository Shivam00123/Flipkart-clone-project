import React, { useState } from "react";
import styled from "styled-components";
import { connect, useDispatch } from "react-redux";
import { addTag, removeTag } from "../../actions";

const Item = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-bottom: 1px solid #f8f5f5;
  z-index: 1;
  padding: 2rem 0;
  position: relative;
  cursor: pointer;
  &:hover {
    background-color: #f1f3f6;
    color: #2874f0;
  }
`;

const TextDiv = styled.div`
  position: absolute;
  left: 0;
  height: 2rem;
  padding: 2rem;
`;

const ItemText = styled.span`
  flex: 1;
  font-size: 1.3rem;
  font-weight: 600;
  font-family: sans-serif;
`;
const Icon = styled.div`
  display: flex;
  justify-content: center;
  color: #2874f0;
  flex: 0;
  margin: 0rem 1rem;
`;
const SignUp = styled.div`
  width: 100%;
`;

function Index(props) {
  const [hover, setHover] = useState(null);
  const dispatch = useDispatch();
  const ChangeState = (tag) => {
    dispatch(addTag(tag));
  };
  const RemoveTag = () => {
    dispatch(removeTag());
  };
  return (
    <Item onMouseOver={() => ChangeState(props.item)}>
      {props.item.icon && <Icon>{props.item.icon}</Icon>}
      {props.item.name ? (
        <ItemText>{props.item.name}</ItemText>
      ) : (
        <TextDiv>
          <ItemText>{props.item}</ItemText>
        </TextDiv>
      )}
    </Item>
  );
}

function mapStateToProps(state) {
  return {
    hover: state.hover,
    tag: state.tag,
  };
}

export default connect(mapStateToProps)(Index);
