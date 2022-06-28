import React from "react";
import Footer from "../Footer/Footer";
import { Header } from "../Header";

const AppLayout = (props) => {
  return (
    <div className="layout">
      <Header />
      {props.children}
      <Footer />
    </div>
  );
};

export default AppLayout;
