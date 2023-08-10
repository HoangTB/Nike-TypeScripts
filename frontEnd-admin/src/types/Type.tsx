import { ReactNode } from "react";

export interface DefaultLayoutProps {
  children: ReactNode;
}

export interface IErrors {
  email?: string;
  password?: string;
}
