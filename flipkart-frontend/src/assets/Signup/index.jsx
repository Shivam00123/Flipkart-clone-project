import React, { useState } from "react";
import styled from "styled-components";
import Fonts from "../Fonts";
import Marginer from "../Marginer";
import LogoImage from "../Images/loginImage.png";
import ImageSize from "../ImageSize";
import Button from "../Button";
import { useDispatch } from "react-redux";
import { openLogin } from "../../actions/openLogin";
import axios from "../../axios";
import { closeSignup } from "../../actions/openSignup";

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
  margin: 2rem 0;
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: center;
`;
const Span = styled.span`
  font-size: 1.2rem;
  color: red;
  font-weight: bold;
`;

function Login(props) {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, setError] = useState("");
  const dispatch = useDispatch();

  const backToLogin = () => {
    dispatch(openLogin());
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    if (!name || !email || !password) {
      setError("All Fields are required");
    } else {
      let reg = /\w+([\. -]?\w+)*@\w+([\. -]?w+)*(\.\w\w+)+$/;
      if (reg.test(email) === false) {
        setError("Please check the email again");
        return;
      }
      axios
        .post("/signup", { name, email, password })
        .then((res) => {
          setError(res.data.message);
          if (res.data.message === "user-registered") {
            dispatch(closeSignup());
          }
        })
        .catch((err) => console.log(err));
    }
    setTimeout(() => {
      setError("");
    }, 2000);
  };

  return (
    <Container className="child" onClick={(e) => e.stopPropagation()}>
      <AboutContainer>
        <Fonts
          position="absolute"
          color="#fff"
          weight="600"
          size="2.8rem"
          top="50px"
          left="30px"
        >
          Looks like you're new here!
        </Fonts>
        <Fonts
          position="absolute"
          color="#fff"
          size="1.8rem"
          left="30px"
          top="140px"
          lspace="0.1rem"
          lheight="2.5rem"
        >
          Sign up with your mobile number to get started
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
            placeholder="Enter Name"
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </InnerContainer>
        <InnerContainer>
          {error ? (
            <Input
              style={{ borderBottom: "2px solid red" }}
              placeholder="Enter Email"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          ) : (
            <Input
              placeholder="Enter Email"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          )}
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
          onClick={(e) => handleSignUp(e)}
        >
          Signup
        </Button>
        <Button
          width="100%"
          height="50px"
          backcolor="#fff"
          fontColor="#2874f0"
          size="1.6rem"
          onClick={() => backToLogin()}
        >
          Existing User? Log in
        </Button>
      </InputField>
    </Container>
  );
}

export default Login;
