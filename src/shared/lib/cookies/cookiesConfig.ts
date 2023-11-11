import cookie from "cookie";
import * as process from "process";

import { JwtAccess, JwtRefresh } from "../types/common";
import { parseJwt } from "../auth/jwt";

function cookiesConfig(): cookie.CookieSerializeOptions {
  const baseConfig: cookie.CookieSerializeOptions = {
    path: "/",
  };

  if (process.env.NODE_ENV === "development") {
    return baseConfig;
  }

  return {
    ...baseConfig,
    sameSite: "strict",
    httpOnly: true,
    secure: true,
  };
}

export function cookiesConfigWithExpires(token: string): cookie.CookieSerializeOptions {
  const { exp: expirationTimestamp } = parseJwt(token, { header: true }) as JwtAccess | JwtRefresh;

  const config = cookiesConfig();
  const expires = new Date(expirationTimestamp * 1000);

  return {
    ...config,
    expires,
    maxAge: Number(expires),
  };
}
