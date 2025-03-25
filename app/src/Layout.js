import React from "react";
import "./Layout.css"; 

const Layout = ({ children }) => {
  return (
    <div className="widget-container">
      <div className="drag-bar"></div> {}
      <div className="content">{children}</div> {}
      <div className="borders"></div>
    </div>
  );
};

export default Layout;
