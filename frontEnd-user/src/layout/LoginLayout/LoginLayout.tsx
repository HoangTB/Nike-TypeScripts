import React, { Children } from "react";
import Header from "../../components/Header/Header";
import Navibar from "../../components/Navibar/Navibar";
import Footer from "../../components/Footer/Footer";
import { DefaultLayoutProps } from "../../types/Types";

const LoginLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
  return (
    <div className="vh-100">
      <Header />
      <Navibar />
      <br />
      {children}
      <br />
      <Footer />
    </div>
  );
};

export default LoginLayout;
