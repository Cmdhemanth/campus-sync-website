import axios from "axios";
import {
  GetRefreshTokenCookie,
  SaveRefreshTokenCookie,
  SaveTokenCookie,
  SaveUserCookie,
} from "./cookies";
import { GetUserLocalStorage, SaveUserLocalStorage } from "./local-storage";
import { PostRequest } from "../axios-requests/post-request";

export const RefreshUser = async () => {
  console.log("Refreshing");
  const refreshToken = GetRefreshTokenCookie();
  const user = GetUserLocalStorage();
  if (!refreshToken || !user) {
    return;
  }

  const endpoint = `${import.meta.env.VITE_API_URL}/user/refresh`;
  const reqData = {
    phone: user.phone,
  };
  const headers = {
    "x-refresh-token": refreshToken,
    "x-account-id": user.id,
    "x-account-type": user.account_type,
  };

  try {
    const response = await PostRequest(endpoint, reqData, headers);
    const data = response.data;

    if (response.success) {
      SaveTokenCookie(data.access_token);
      SaveUserCookie(user);
      return true;
    }
    return false;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const SaveUserData = (user, token, refreshToken) => {
  SaveUserLocalStorage(user);
  SaveUserCookie(user);
  SaveTokenCookie(token);
  SaveRefreshTokenCookie(refreshToken);
};
