import React from "react";
import Main from "./components/main/Main";
import SideBarRight from "./components/SideBarRight/SideBarRight";
import SideBarLeft from "./components/SideBarLeft/SideBarLeft";

function App() {
  return(
  <div className="container" >
    <SideBarLeft />
    <Main />
    <SideBarRight />
  
  </div>)
}

export default App;
