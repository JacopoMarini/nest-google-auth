import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import { useDispatch } from "react-redux";
import { authActions } from "../features/auth/reducer";
import axios from "axios";

export const GoogleLoginCmp = () => {
  const dispatch = useDispatch();
  return (
    <GoogleLogin
      useOneTap={true}
      onSuccess={async (credentialResponse) => {
        console.log(credentialResponse);
        const { data } = await axios.post("http://localhost:8080/login", {
          token: credentialResponse.credential,
        });
        localStorage.setItem("AuthData", JSON.stringify(data));
        dispatch(authActions.setAuthData(data));
      }}
      onError={() => {
        console.log("Login Failed");
      }}
    />
  );
};
