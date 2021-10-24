const { USER_LOGGED, USER_NOT_LOGGED } = require("./actionTypes");

export function userLogged() {
  return {
    type: USER_LOGGED,
  };
}

export function userNotLogged() {
  return {
    type: USER_NOT_LOGGED,
  };
}
