import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import Fonts from "../Fonts";
import Marginer from "../Marginer";
import LogoImage from "../Images/loginImage.png";
import ImageSize from "../ImageSize";
import Button from "../Button";
import { openLogin } from "../../actions/openLogin";
import { openSignup } from "../../actions/openSignup";
import axios from "../../axios";
import { userLogged } from "../../actions/userLogged";
import { isAdmin } from "../../actions/isAdmin";

const Container = styled.div`
  min-width: 50vw;
  height: 80vh;
  z-index: 100;
  position: absolute;
  top: 60px;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 5px;
  display: flex;
`;
const AboutContainer = styled.div`
  width: 40%;
  height: 100%;
  background-color: #2874f0;
  display: flex;
  flex-direction: column;
  position: relative;
`;
const InputField = styled.div`
  width: 60%;
  height: 100%;
  background-color: #fff;
  padding: 3rem;
`;

const InnerContainer = styled.div`
  width: 100%;
  height: 5rem;
  overflow: hidden;
  position: relative;
  margin-top: 3rem;
  background: #fff;
`;
const Input = styled.input`
  width: 100%;
  height: 70%;
  border: none;
  outline: none;
  border-bottom: 1px solid lightgray;
  font-size: 1.6rem;
  padding-left: 10px;
  font-family: sans-serif;
  font-weight: 500;
  position: absolute;
  bottom: 0;
  background: transparent;
  &:focus {
    background: transparent;
  }
`;

const Or = styled.div`
  margin: 1rem 0;
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: center;
  cursor: pointer;
`;
const OrText = styled.p`
  color: #878787;
  font-size: 1.4rem;
`;
const Span = styled.span`
  font-size: 1.2rem;
  color: red;
  font-weight: bold;
`;
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();

  const goToSignup = () => {
    dispatch(openSignup());
  };
  const handleLogin = () => {
    let reg = /^\w+([\. -]?\w+)*@\w+([\. -]?w+)*(\.\w\w+)+$/;
    if (reg.test(email) === false) {
      setError("Invalid Email");
      setEmail("");
      setPassword("");
      setTimeout(() => {
        setError("");
      }, 2000);
      return;
    } else {
      console.log("front", email, password);
      axios
        .post("/login", {
          email,
          password,
        })
        .then((res) => {
          console.log(res.data);
          if (res.data.message === "User found") {
            if (res.data.userRole === "admin") {
              dispatch(isAdmin());
            } else {
              dispatch(userLogged());
            }
          } else {
            setError(res.data.message);
          }
        });
    }
  };

  return (
    <Container className="child" onClick={(e) => e.stopPropagation()}>
      <AboutContainer>
        <Fonts
          color="#fff"
          weight="600"
          size="2.8rem"
          top="50px"
          left="30px"
          position="absolute"
        >
          Login
        </Fonts>
        <Fonts
          color="#fff"
          size="1.8rem"
          left="30px"
          top="120px"
          lspace="0.1rem"
          lheight="2.5rem"
          position="absolute"
        >
          Get access to your Orders, Wishlist and Recommendations
        </Fonts>
        <ImageSize
          width="20rem"
          height="12rem"
          position="absolute"
          bottom="30px"
          imgUrl={LogoImage}
          left="30px;"
        />
      </AboutContainer>
      <InputField>
        {error && (
          <Or>
            <Span>{error}</Span>
          </Or>
        )}
        <InnerContainer>
          <Input
            placeholder="Enter Email/Phone Number"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </InnerContainer>
        <InnerContainer>
          <Input
            placeholder="Enter Password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </InnerContainer>

        <Marginer direction="vertical" margin="5rem" />
        <Fonts
          top="2rem"
          size="11px"
          lspace="0.1rem"
          weight="500"
          color="#878787"
        >
          By continuing you agree to Flipkart's Terms of Use and Privacy Policy.
        </Fonts>
        <Button
          width="100%"
          height="50px"
          backcolor="#fb641b"
          top="90px"
          size="1.6rem"
          onClick={() => handleLogin()}
        >
          Login
        </Button>
        <Or>
          <OrText>OR</OrText>
        </Or>
        <Button
          width="100%"
          height="50px"
          backcolor="#fff"
          fontColor="#2874f0"
          size="1.6rem"
        >
          Request OTP
        </Button>

        <Or onClick={() => goToSignup()}>
          <Fonts top="20px" size="1.3rem" color="#2874f0" weight="600">
            New to Flipkart? Create an account
          </Fonts>
        </Or>
      </InputField>
    </Container>
  );
}

export default Login;
