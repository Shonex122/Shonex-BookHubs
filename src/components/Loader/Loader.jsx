import React from "react";
import LoaderImg from "../../images/loader.png";
import "./Loader.css";

function Loader() {
  return (
    <div className="loader flex flex-c">
      <img src={LoaderImg} alt="Loader" />
    </div>
  );
}

export default Loader;
