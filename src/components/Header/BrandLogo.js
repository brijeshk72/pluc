import React from "react";
import Navbar from "react-bootstrap/Navbar";
const BrandLogo = () => {
  return (
    <Navbar.Brand href="/">
      <img
        src="/assets/Pluc.png"
        width="100"
        height="30"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      />
    </Navbar.Brand>
  );
};

export default BrandLogo;
