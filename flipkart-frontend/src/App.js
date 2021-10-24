import "./App.css";
import styled from "styled-components";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Login from "./assets/Login";
import LoginComponent from "./components/LoginComponent";
import { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import axios from "./axios";
import { userLogged, userNotLogged } from "./actions/userLogged";
import Products from "./components/AdminComponents/Products";
import Preview from "./components/AdminComponents/Preview";
import AddToOffer from "./components/AdminComponents/AddToOffer";
import { isAdmin } from "./actions/isAdmin";
import BuyProduct from "./components/BuyProduct";

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  overflow-y: hidden;
`;

const PrivateRoute = (PrivateRouteProps) => {
  const { isAdminLogged, path, component: Component } = PrivateRouteProps;
  return (
    <Route
      path={path}
      render={(props) => {
        return isAdminLogged ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/" }} />
        );
      }}
    />
  );
};

function App(props) {
  const { login, isAdminLogged } = props;
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get("/").then((res) => {
      if (res.data.message === "verifiedUser") {
        if (res.data.role === "admin") {
          dispatch(isAdmin());
        } else {
          dispatch(userLogged());
        }
      } else {
        dispatch(userNotLogged());
      }
    });
  }, []);

  useEffect(() => {
    if (login) {
      window.onscroll = function () {
        window.scrollTo(0, 0);
      };
    } else {
      window.onscroll = function () {};
    }
  });

  return (
    <Router>
      <Container login={login}>
        {/* <Switch> */}
        <Navbar />
        {login && <LoginComponent />}
        <Route exact path="/" component={Home} />
        <PrivateRoute
          path="/admin/addproduct"
          component={Products}
          isAdminLogged={isAdminLogged}
        />
        <PrivateRoute
          path="/admin/preview"
          component={Preview}
          isAdminLogged={isAdminLogged}
        />
        <PrivateRoute
          path="/admin/addProductsToOffer"
          component={AddToOffer}
          isAdminLogged={isAdminLogged}
        />
        <Route path="/fetch/buyingProduct" component={BuyProduct} />
        {/* </Switch> */}
      </Container>
    </Router>
  );
}
function mapStateToProps({ login, isAdminLogged }) {
  return {
    login,
    isAdminLogged,
  };
}
export default connect(mapStateToProps)(App);
