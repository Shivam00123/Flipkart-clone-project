import React, { useEffect, useRef, useState } from "react";
import { connect, useDispatch } from "react-redux";
import styled from "styled-components";
import { closeLogin } from "../actions/openLogin";
import Login from "../assets/Login";
import SignUp from "../assets/Signup";

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  position: absolute;
  z-index: 101;
  display: grid;
  place-items: center;
  background-color: rgba(55, 55, 55, 0.89);

  /* border: 10px solid black; */
`;

function LoginComponent(props) {
  const { login, signup } = props;
  const dispatch = useDispatch();
  const [rerender, setrerender] = useState(login);

  useEffect(() => {
    document.addEventListener("mousedown", (e) => {
      if (e.target.className.includes("parent")) {
        dispatch(closeLogin());
      }
    });
  }, []);
  useEffect(() => {
    if (login) {
      console.log("login");
      setrerender(login);
    }
    if (signup) {
      console.log("signup");
      setrerender(signup);
    }
    console.log("rerender", rerender);
  }, [login, signup]);

  return (
    <Container className="parent">
      {rerender === login && <Login />}
      {rerender === signup && <SignUp />}
    </Container>
  );
}

function mapStateToProps(state) {
  return {
    login: state.login,
    signup: state.signup,
  };
}
export default connect(mapStateToProps)(LoginComponent);
