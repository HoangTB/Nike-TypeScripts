import { ReactNode } from "react";

export interface LoginRegisterFormProps {
  setIsShow: (value: boolean) => void;
}

export interface DefaultLayoutProps {
  children: ReactNode;
}

export interface SlickSliderProps {
  slickPrev: () => void;
  slickNext: () => void;
}
