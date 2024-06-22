import React from "react";
import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

function Header() {
  return (
    <div className="holder">
      <header className="header">
        <Navbar />
        <div className="header-content flex flex-c text-center text-white">
          <h2 className="header-title text-capitalize">
            Find Your Book Of Choice
          </h2>
          <br />
          <p className="header-text fs-18">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Repudiandae eveniet animi molestias, officia sapiente quasi
            excepturi cupiditate, minima accusantium sed voluptatum nihil
            laborum libero quod corporis? Molestiae, dicta!
          </p>
          <SearchForm />
        </div>
      </header>
    </div>
  );
}

export default Header;
