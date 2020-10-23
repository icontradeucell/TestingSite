import React, { useState, createContext, useEffect } from "react";
import axios from "axios";

export const AcessTokenContext = createContext();

const getlocalData = () => {
  const localData = JSON.parse(localStorage.getItem("riseUpAccess"));
  return localData;
};

const AccessTokenContextProvider = (props) => {
  const [registered, setRegistered] = useState(null);
  const [riseUpAccess, setriseUpAccess] = useState(getlocalData());
  const [avatar, setAvatar] = useState(null);

  console.log(riseUpAccess);

  useEffect(() => {
    if (riseUpAccess === null) {
      setRegistered(false);
    } else if (
      riseUpAccess.api === "IT RISE UP" &&
      riseUpAccess.hasOwnProperty("accessToken")
    ) {
      setRegistered(true);
    }
  }, [riseUpAccess]);

  const registerUser = () => {
    setRegistered(true);
  };

  const authMe = () => {
    if (riseUpAccess) {
      console.log(riseUpAccess.accessToken);
      axios
        .get("https://itriceapp.apicrm.online/api/auth/me", {
          headers: {
            "x-access-token": riseUpAccess.accessToken,
          },
          "Content-Type": "application/json",
        })
        .then((res) => {
          console.log(res);
          let avatarUrl = res.data.avatar;
          setAvatar(avatarUrl);
        });
    }
  };

  return (
    <AcessTokenContext.Provider
      value={{
        registered,
        registerUser,
        riseUpAccess,
        avatar,
        setAvatar,
        authMe,
        setriseUpAccess,
      }}
    >
      {props.children}
    </AcessTokenContext.Provider>
  );
};

export default AccessTokenContextProvider;
