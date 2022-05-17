import { serialize, parse } from "cookie";
import cookie from "js-cookie";
import { Router, useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { authenticate, reauthenticate } from "store/actions/auth";

const TOKEN_NAME = "token";
const MAX_AGE = 30 * 24 * 60 * 60;

export const setCookie = (key, value) => {
  if (process.browser) {
    cookie.set(key, value, {
      expires: 30,
      path: "/",
    });
  }
};

export const removeCookie = (key) => {
  if (process.browser) {
    cookie.remove(key, {
      expires: 1,
    });
  }
};

export const getCookie = (key, req) => {
  return process.browser
    ? getCookieFromBrowser(key)
    : getCookieFromServer(key, req);
};

const getCookieFromBrowser = (key) => {
  return cookie.get(key);
};

const getCookieFromServer = (key, req) => {
  if (!req.headers.cookie) {
    return undefined;
  }
  const rawCookie = req.headers.cookie
    .split(";")
    .find((c) => c.trim().startsWith(`${key}=`));
  if (!rawCookie) {
    return undefined;
  }
  return rawCookie.split("=")[1];
};

export const checkServerSideCookie = (ctx, actions) => {
  // if (ctx.isServer) {
  //   if (ctx.req.headers.cookie) {
  const token = getCookie("token", ctx.req);
  console.log(token, "TOKEN DARI CHECK");
  actions.dispatch(reauthenticate(token));
  //   }
  // }
};

export const setTokenCookie = (res, token) => {
  const cookie = serialize(TOKEN_NAME, token, {
    maxAge: MAX_AGE,
    expires: new Date(Date.now() + MAX_AGE * 1000),
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    path: "/",
    sameSite: "lax",
  });

  res.setHeader("Set-Cookie", cookie);
};

export const removeTokenCookie = (res) => {
  const cookie = serialize(TOKEN_NAME, "", {
    maxAge: -1,
    path: "/",
  });

  res.setHeader("Set-Cookie", cookie);
};

export const parseCookies = (req) => {
  // For API Routes we don't need to parse the cookies.
  if (req.cookies) return req.cookies;

  // For pages we do need to parse the cookies.
  const cookie = req.headers?.cookie;
  return parse(cookie || "");
};

export const getTokenCookie = (req) => {
  const cookies = parseCookies(req);
  return cookies[TOKEN_NAME];
};

export const getHeaders = (token) => {
  const header = {
    AppAuthorization: `Bearer ${token}`,
    Accept: "application/json",
    "Content-Type": "application/json",
    "Access-Control-Allow-Headers": "*",
    "Access-Control-Allow-Origin": "*",
  };

  return header;
};

export const loadState = () => {
  try {
    const serializedState = {};

    if (typeof window !== "undefined") {
      serializedState = localStorage.getItem("state");
    }

    console.log(serializedState);

    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (error) {
    console.log(error);
  }
};

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);

    if (typeof window !== "undefined") {
      localStorage.setItem("state", serializedState);
    }
  } catch (error) {
    console.log(error);
  }
};
