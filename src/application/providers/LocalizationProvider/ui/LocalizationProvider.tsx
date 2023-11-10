import React, { ReactNode } from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider as Provider } from "@mui/x-date-pickers";

interface LocalizationProviderProps {
  children?: ReactNode;
}

export const LocalizationProvider = ({ children }: LocalizationProviderProps) => (
  <Provider dateAdapter={AdapterDayjs}>{children}</Provider>
);
