// import { NextApiResponse } from "next";
// import cookie from "cookie";

// import { setCookie, splitJwtToken } from "./cookies";
// import { ACCESS_TOKEN, COOKIES, REFRESH_TOKEN, SplitJwtToken } from "../types/common";
// import { cookiesConfigWithExpires } from "./cookiesConfig";

// export interface TokenData {
//   accessToken: string;
//   refreshToken: string;
// }

// export function saveJwtGuestTokens(guestToken: string) {
//   setCookie(COOKIES.GUEST_TOKEN, guestToken);
// }

/*export function setCookieViaProxy(res: NextApiResponse, { accessToken, refreshToken }: TokenData) {
  const cookies: string[] = [];
  const tokenData: Record<string, SplitJwtToken> = {
    accessToken: splitJwtToken(accessToken),
    refreshToken: splitJwtToken(refreshToken),
  };

  // eslint-disable-next-line guard-for-in
  for (const tokenType in tokenData) {
    // const token: SplitJwtToken = tokenData[tokenType];
    const config = cookiesConfigWithExpires(token.BODY);

    // eslint-disable-next-line guard-for-in
    for (const TOKEN_KEY in token) {
      const enumToken = tokenType === "accessToken" ? ACCESS_TOKEN : REFRESH_TOKEN;

      const key = (enumToken as any)[TOKEN_KEY];
      const cookieConfig = TOKEN_KEY === "BODY" ? { ...config, httpOnly: false } : config;
      const value = (token as any)[TOKEN_KEY];

      cookies.push(cookie.serialize(key, value, cookieConfig));
    }
  }

  res.setHeader("Set-Cookie", [
    ...cookies,
    // cookie.serialize(COOKIES.GUEST_TOKEN, "", {
    //   path: "/",
    //   maxAge: -1,
    // }),
  ]);
}
*/
