import React from "react";
import sun from "./svg/sun-icon.svg";
import SideBarRight from "./components/SideBarRight/SideBarRight";
import SideBarLeft from "./components/SideBarLeft/SideBarLeft";
import Header from "./components/header/Header";
import SectionStatistics from "./components/sectionStatistics/SectionStatistics";
import HydrationTips from "./components/hydrationTips/HydrationTips";
import Chart from "./components/chart/Chart";
import data from "./data.json";

function App() {
  return (
    <div className="container">
      <SideBarLeft />
      <main className="main">
        <Header />
        <div className=" wrapper">
          <img src={sun} alt="" />
          <span >26 &deg;C</span>
          <span className="wrapper__span2">Sunny Day</span>
          <span>Don’t forget to take your water bottle with you. </span>
        </div>
        <SectionStatistics data={data.sectionStatistics} />
        <Chart data={data.chart} />
        <HydrationTips />
      </main>
      <SideBarRight data={data.drinkLog} />
    </div>
  );
}

export default App;
