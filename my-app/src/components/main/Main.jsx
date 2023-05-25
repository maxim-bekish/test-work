import React from "react";
import search from "../../svg/search-Icon.svg";
function Main() {
  return (
    <div className="main">
      <section className="section-one">
        <h1>Welcome back</h1>
        <div className="search">
          <img className="search__img" src={search} alt="search" />
          <input className="search__input" type="text" placeholder="Search" />
        </div>
      </section>
    </div>
  );
}

export default Main;
