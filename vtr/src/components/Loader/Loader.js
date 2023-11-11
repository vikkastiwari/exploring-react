// Loader.js

import React from "react";
import "./Loader.css";

const Loader = () => {
  return (
    <div className="vtr-preloader">
      <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loader;
