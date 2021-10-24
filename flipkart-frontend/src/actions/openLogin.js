import { CLOSE_LOGIN, OPEN_LOGIN } from "./actionTypes";

export function openLogin() {
  return {
    type: OPEN_LOGIN,
  };
}

export function closeLogin() {
  return {
    type: CLOSE_LOGIN,
  };
}
