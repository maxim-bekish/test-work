import React from "react";
import search from "../../svg/search-Icon.svg";
import "./style.scss";

function Header() {
  return (
    <section className="header">
      <h1>Welcome back</h1>
      <div className="search">
        <img className="search__img" src={search} alt="search" />
        <input className="search__input" type="text" placeholder="Search" />
      </div>
    </section>
  );
}

export default Header;
