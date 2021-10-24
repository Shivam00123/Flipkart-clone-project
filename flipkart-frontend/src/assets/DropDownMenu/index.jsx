import React from "react";
import styled from "styled-components";
import MenuItem from "../MenuItems";
import { data } from "../Data";
import { connect, useDispatch } from "react-redux";
import { removeTag } from "../../actions";
import { userNotLogged } from "../../actions/userLogged";
import axios from "../../axios";
import { logout } from "../../actions/logout";

const MenuCard = styled.div`
  width: ${({ width }) => (width ? width : "25rem")};
  background-color: #fff;
  display: flex;
  flex-direction: column;
  border: none;
  border-radius: 2px;
  position: absolute;
  top: ${({ top }) => (top ? top : "5.6rem")};
  left: ${({ left }) => (left ? left : null)};
  box-shadow: -0.5px 4px 12px -7px rgba(0, 0, 0, 0.75);
  z-index: 100;
`;

function Index({ data, top, left, width }) {
  const dispatch = useDispatch();
  const setChangeBack = () => {
    dispatch(removeTag());
  };
  const handleLinks = (e) => {
    e.preventDefault();
    if (e.target.innerText === "Logout") {
      dispatch(logout());
      axios.get("/logout");
    }
  };

  return (
    <MenuCard
      top={top}
      left={left}
      width={width}
      onClick={(e) => handleLinks(e)}
    >
      {data && data.map((item) => <MenuItem item={item} />)}
    </MenuCard>
  );
}

export default connect()(Index);
