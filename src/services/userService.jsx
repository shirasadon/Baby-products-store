import httpService from "./httpService";
import jwt_decode from "jwt-decode";
const TOKEN_KEY = "token";
setTokenHeader();

function setTokenHeader() {
  httpService.setCommonHeader("x-auth-token", getJwt());
}

export function getJwt() {
  return localStorage.getItem(TOKEN_KEY);
}

export const createUser = (user) => {
  return httpService.post("/user", user);
};

export async function loginUser(credentials) {
  const { data } = await httpService.post("/auth", credentials);
  console.log(data);
  console.log(credentials);
  localStorage.setItem(TOKEN_KEY, data.token);
  setTokenHeader();
  const userLogin = data.user;
  return userLogin;
}

export function logoutUser() {
  localStorage.removeItem(TOKEN_KEY);
  setTokenHeader();
}
export function getUser() {
  try {
    const token = getJwt();
    return jwt_decode(token);
  } catch (err) {
    console.log(err);
    return null;
  }
}

const userService = {
  createUser,
  loginUser,
  logoutUser,
  getUser,
  getJwt,
};

export default userService;
