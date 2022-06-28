import React from "react";
const Header = () => {
  return (
    <nav className="navbar navbar-expand navbar-light bg-black">
      <div className="container">
        <a href="/" className="navbar-brand">
          <img
            src="/assets/Pluc.png"
            width="100"
            height="30"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </a>
      </div>
    </nav>
  );
};

export default Header;
