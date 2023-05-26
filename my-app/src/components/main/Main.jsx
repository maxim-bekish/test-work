import React from "react";
import Header from "./header/Header";
import Section_statistics from "./section_statistics/Section_statistics";
import HydrationTips from "./hydrationTips/HydrationTips";

function Main() {
  return (
    <div className="main">
      <Header />
      <Section_statistics/>
      <HydrationTips/>
    </div>
  );
}

export default Main;
