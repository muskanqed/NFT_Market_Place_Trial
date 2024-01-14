import React from "react";
import PropTypes from "prop-types";
import NavBar from "./navbar";
import Footer from "./footer";

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
};

Layout.propType = {
  children: PropTypes.node.isRequired,
};

export default Layout;
