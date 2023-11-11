import { COOKIES } from "@shared/lib/types/common";
import { getCookie, setCookie } from "./cookies";

export const getLanguage = () => getCookie(COOKIES.LANGUAGE);
export const setLanguage = (language: string) => setCookie(COOKIES.LANGUAGE, language);
