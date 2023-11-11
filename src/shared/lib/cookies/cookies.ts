import Cookies from "universal-cookie";
import { CookieSetOptions } from "universal-cookie/cjs/types";

const cookies = new Cookies();

export function setCookie(key: string, value: string, options?: CookieSetOptions) {
  return cookies.set(key, value, { ...options, path: "/" });
}

export const getCookie = (key: string) => cookies.get(key);

export const delCookie = (key: string) =>
  cookies.remove(key, {
    path: "/",
    maxAge: -1,
  });
