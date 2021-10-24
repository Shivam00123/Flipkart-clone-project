import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ImageSize from "../ImageSize";
import More from "../Dropdown";
import ExpandMoreTwoToneIcon from "@material-ui/icons/ExpandMoreTwoTone";
import Menu from "../DropDownMenu";
import { TopOffers } from "../Data";
import { connect, useDispatch } from "react-redux";
import { addTag } from "../../actions";
import { addProducts, removeProducts } from "../../actions/products";

const ItemDiv = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 0 3rem;
  padding-top: 2rem;
`;

const ItemTagDiv = styled.div`
  height: 3rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0;
  margin-top: 2rem;
  cursor: pointer;
`;
const Tag = styled.span`
  font-size: 1.3rem;
  color: #000;
  font-weight: 600;
  font-family: sans-serif;
  /* padding: 1rem; */
`;

const TagDrop = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;
  flex-direction: column;
`;

const Dropper = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: center;
  z-index: 1;
  position: relative;
`;

const IconBoxDown = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
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

const IconBox = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

// const DropDown = styled.div`
//   width: fit-content;
//   height: fit-content;
//   display: flex;
//   flex-direction: column;
//   z-index: 0;
// `;

function Index(props) {
  const { tag, products } = props;
  const [openDropDown, setOpenDropDown] = useState(false);
  // const dispatch = useDispatch();
  let allKeys = [];

  // const setTagGo = () => {
  //   setOpenDropDown(true);
  //   console.log("setTagGo", props.item.Tag, tag);
  //   if (tag === undefined) {
  //     console.log("unnndefined");
  //     const first = props.item.subTags[0].products;
  //     for (let item of first) {
  //       console.log("item", item);
  //       dispatch(addProducts(item));
  //     }
  //   } else {
  //     for (var j = 0; j < props.item.subTags.length; j++) {
  //       if (
  //         JSON.stringify(props.item.subTags[j].name) === JSON.stringify(tag)
  //       ) {
  //         const prod = props.item.subTags[j].products;
  //         for (var item of prod) {
  //           console.log("String", String(item));
  //           dispatch(addProducts(item));
  //         }
  //       }
  //     }
  //   }
  // };

  // const removeState = () => {
  //   setOpenDropDown(false);
  //   dispatch(removeProducts());
  // };

  if (props.item.subTags) {
    for (var i = 0; i < props.item.subTags.length; i++) {
      allKeys.push(props.item.subTags[i].name);
    }
  }

  {
    // console.log("pro", tag);
  }
  return (
    <ItemDiv>
      <ImageSize width="5rem" height="5rem" imgUrl={props.item.Image} />
      <TagDrop
        onMouseOver={() => setOpenDropDown(true)}
        onMouseLeave={() => setOpenDropDown(false)}
      >
        <ItemTagDiv>
          <Tag>{props.item.Tag}</Tag>
          {props.item.subTags.length >= 1 && (
            <IconBox>
              {openDropDown ? (
                <IconBoxUp>
                  <ExpandMoreTwoToneIcon />
                </IconBoxUp>
              ) : (
                <IconBoxDown>
                  <ExpandMoreTwoToneIcon />
                </IconBoxDown>
              )}
            </IconBox>
          )}
        </ItemTagDiv>
        {openDropDown && (
          <Dropper onMouseOver={() => setOpenDropDown(true)}>
            <Menu top="0" width="25rem" data={allKeys} />
            {/* <DropDown onMouseOver={() => setOpenDropDown(true)}> */}
            {/* {products &&
                products.map((item) => (
                  <Menu width="20rem" top="0" left="14.8rem" data={item} />
                ))} */}
            {/* </DropDown> */}
          </Dropper>
        )}
      </TagDrop>
    </ItemDiv>
  );
}

function mapStateToProps(state) {
  return {
    hover: state.hover,
    tag: state.tag,
    // products: state.products,
  };
}
export default connect(mapStateToProps)(Index);
