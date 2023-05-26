
import React from "react";
import calendar from'../../svg/calendarTwo.svg'

function SideBarRight() {
  return (
    <div className="sideBarRight">
      <button>
        <img src={calendar} /> Tue, 24 Nov 2021{" "}
        <svg
          width="14"
          height="7"
          viewBox="0 0 14 7"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M6.99997 6.99998C6.77197 6.99998 6.54497 6.92298 6.35997 6.76798L0.35997 1.76798C-0.0640299 1.41498 -0.12203 0.783984 0.23197 0.359984C0.58497 -0.0640163 1.21497 -0.121016 1.63997 0.231984L7.01097 4.70798L12.373 0.392984C12.803 0.0469837 13.433 0.114984 13.779 0.544984C14.125 0.974984 14.057 1.60398 13.627 1.95098L7.62697 6.77898C7.44397 6.92598 7.22197 6.99998 6.99997 6.99998Z"
            fill="#3629B7"
          />
        </svg>
      </button>
      <div></div>
    </div>
  );

} 

export default SideBarRight;
