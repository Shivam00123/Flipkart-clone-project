import React, { useEffect, useState } from "react";
import AddTwoToneIcon from "@material-ui/icons/AddTwoTone";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import styled from "styled-components";
import ImageContainer from "../assets/ImageSize";
import Image from "../assets/Images/flipkartwhite.png";
import Marginer from "../assets/Marginer";
import SearchBox from "../assets/SearchBar";
import Button from "../assets/Button";
import DropDown from "../assets/Dropdown";
import Menu from "../assets/DropDownMenu";
import { logindata } from "../assets/Data";
import { myAccountData } from "../assets/Data";
import { connect, useDispatch } from "react-redux";
import { openLogin } from "../actions/openLogin";
import { Link } from "react-router-dom";
import Toggle from "../assets/Toggle";
import { ProductData } from "../assets/ToggleData";

const NavbarContainer = styled.div`
  width: 100%;
  height: 5.6rem;
  margin-top: 0;
  background-color: #2874f0;
  position: relative;
  display: flex;
  align-items: center;
  padding: 0.7rem;
  justify-content: center;
  z-index: 2;
`;

const LogoContainer = styled.div`
  width: fit-content;
  height: 100%;
  background: transparent;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Links = styled.div`
  width: 7.5rem;
  display: flex;
  justify-content: flex-start;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
    color: #fff;
  }
`;

const ExploreLinks = styled.span`
  font-style: italic;
  font-size: 1.2rem;
  color: #fff;
`;
const PlusLinks = styled.span`
  font-weight: bold;
  font-style: italic;
  font-size: 1.2rem;
  color: #ffe500;
`;

const Cart = styled.div`
  height: 100%;
  padding: 1rem;
  display: flex;
  align-items: center;
  cursor: pointer;
`;
const CartText = styled.span`
  font-weight: 600;
  color: #fff;
  font-size: 1.5rem;
`;

const DropButon = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 5.6rem;
`;

const MyAccocunt = styled.span`
  color: #fff;
  font-size: 1.4rem;
`;

function Navbar(props) {
  const { userLogged, isAdminLogged } = props;
  const [showMenu, setShowMenu] = useState(false);
  const [data, setData] = useState(null);
  const [adminMenu, setAdminMenu] = useState(false);
  const signup = true;
  const dispatch = useDispatch();
  const openLoginForm = () => {
    dispatch(openLogin());
  };

  return (
    <NavbarContainer>
      <LogoContainer>
        <ImageContainer imgUrl={Image} width="7.5rem" />
        <Links>
          <ExploreLinks>Explore</ExploreLinks>
          <Marginer direction="horizontal" margin="0.2rem" />
          <PlusLinks>Plus</PlusLinks>
          <AddTwoToneIcon fontSize="1.2rem" style={{ color: "#ffe500" }} />
        </Links>
      </LogoContainer>
      <Marginer direction="hori" margin="2rem" />
      <SearchBox />
      <Marginer direction="hori" margin="5rem" />
      <DropButon
        onMouseOver={() => setShowMenu(true)}
        onMouseLeave={() => setShowMenu(false)}
      >
        {userLogged || isAdminLogged ? (
          <DropDown>My Account</DropDown>
        ) : (
          <Button
            width="12rem"
            height="3.3rem"
            fontColor="#2874f0"
            onClick={() => openLoginForm()}
          >
            LOGIN
          </Button>
        )}
        {showMenu && userLogged && (
          <Menu
            data={data}
            onMouseOver={() => setShowMenu(true)}
            onMouseLeave={() => setShowMenu(false)}
          />
        )}
        {showMenu && isAdminLogged && (
          <Menu
            data={myAccountData}
            onMouseOver={() => setShowMenu(true)}
            onMouseLeave={() => setShowMenu(false)}
          />
        )}
      </DropButon>
      <Marginer direction="hori" margin="5rem" />
      <DropDown>More</DropDown>
      <Marginer direction="hori" margin="2rem" />
      {isAdminLogged && (
        <Cart
          onMouseOver={() => {
            setAdminMenu(true);
          }}
          onMouseLeave={() => setAdminMenu(false)}
        >
          <CartText>Products</CartText>
          {adminMenu && (
            <Toggle
              data={ProductData}
              top="4.7rem"
              link="true"
              onMouseOver={() => {
                setAdminMenu(true);
              }}
              onMouseLeave={() => setAdminMenu(false)}
            />
          )}
        </Cart>
      )}
      <Marginer direction="hori" margin="2rem" />
      <Cart>
        <ShoppingCartIcon fontSize="large" style={{ color: "#fff" }} />
        <CartText>Cart</CartText>
      </Cart>
    </NavbarContainer>
  );
}

function mapStateToProps(state) {
  return {
    userLogged: state.userLogged,
    isAdminLogged: state.isAdminLogged,
  };
}
export default connect(mapStateToProps)(Navbar);
