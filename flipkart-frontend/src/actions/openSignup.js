import { CLOSE_SIGNUP, OPEN_SIGNUP } from "./actionTypes";

export function openSignup() {
  return {
    type: OPEN_SIGNUP,
  };
}

export function closeSignup() {
  return {
    type: CLOSE_SIGNUP,
  };
}
