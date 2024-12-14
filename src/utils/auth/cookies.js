import Cookies from "universal-cookie";

export const SaveUserCookie = (user) => {
  const cookies = new Cookies(null, { path: "/" });
  const userCookie = JSON.stringify(user);

  cookies.set("user", userCookie, { expires: new Date(Date.now() + 3600000) });
};

export const GetUserCookie = () => {
  const cookies = new Cookies(null, { path: "/" });
  const userCookie = cookies.get("user");
  return userCookie;
};

export const DeleteUserCookie = () => {
  const cookies = new Cookies(null, { path: "/" });
  cookies.remove("user");
};

export const SaveTokenCookie = (token) => {
  const cookies = new Cookies(null, { path: "/" });
  cookies.set("token", token, { expires: new Date(Date.now() + 3600000) });
};

export const GetTokenCookie = () => {
  const cookies = new Cookies(null, { path: "/" });
  const token = cookies.get("token");
  return token;
};

export const DeleteTokenCookie = () => {
  const cookies = new Cookies(null, { path: "/" });
  cookies.remove("token");
};

export const SaveRefreshTokenCookie = (token) => {
  const cookies = new Cookies(null, { path: "/" });
  cookies.set("refreshToken", token, {
    expires: new Date(Date.now() + 2592000000),
  });
};

export const GetRefreshTokenCookie = () => {
  const cookies = new Cookies(null, { path: "/" });
  const token = cookies.get("refreshToken");
  return token;
};

export const DeleteRefreshTokenCookie = () => {
  const cookies = new Cookies(null, { path: "/" });
  cookies.remove("refreshToken");
};
