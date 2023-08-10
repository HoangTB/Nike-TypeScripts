import React from "react";
import Header from "../../components/Header/Header";
import Navibar from "../../components/Navibar/Navibar";
import SwiperNotification from "../../components/SwiperNotification/SwiperNotification";
import Footer from "../../components/Footer/Footer";
import { DefaultLayoutProps } from "../../types/Types";
const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <Navibar />
      <SwiperNotification />
      <br />
      {children}
      <br />
      <Footer />
    </>
  );
};

export default DefaultLayout;
