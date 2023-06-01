import React from "react";

import SideBarRight from "./components/SideBarRight/SideBarRight";
import SideBarLeft from "./components/SideBarLeft/SideBarLeft";
import Header from "./components/header/Header";
import SectionStatistics from "./components/sectionStatistics/SectionStatistics";
import HydrationTips from "./components/hydrationTips/HydrationTips";
import Chart from "./components/chart/Chart";

function App() {
  return (
    <div className="container">
      <SideBarLeft />
      <main className="main">
        <Header />
        <SectionStatistics />
        <Chart />
        <HydrationTips />
      </main>
      <SideBarRight />
    </div>
  );
}

export default App;
