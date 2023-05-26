import React from "react";
import calendar from "../../svg/calendarTwo.svg";
import water from "../../svg/water.svg";
import bottle from "../../png/bottle.png";
import shadow from "../../svg/shadow.svg";
import circle from "../../svg/circle.svg";
import vectorOne from "../../svg/vector-one.svg";
import vectorTwo from "../../svg/vector-two.svg";
import drop from "../../svg/drop.svg";
import more from "../../svg/more.svg";

const drinlLog = [
  { ml: 250, time: "8:00 am" },
  { ml: 200, time: "9:30 am" },
  { ml: 500, time: "11:00 am" },
  { ml: 200, time: "01:00 pm" },
  { ml: 250, time: "03:00 pm" },
];

function SideBarRight() {
  return (
    <aside className="sideBarRight">
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
      <div className="sideBarRight__cardAll">
        <div className="sideBarRight__cardOne">
          <div className="sideBarRight__cardOne__SVG">
            <img src={bottle} alt="" />
            <img src={water} alt="" />
            <img src={shadow} alt="" />
            <img src={circle} alt="" />
            <img src={vectorOne} alt="" />
            <img src={vectorTwo} alt="" />
          </div>
          <span>Stay Hydrated and beat heat.</span>
        </div>
        <div className="sideBarRight__cardTwo">
          <div className="sideBarRight__cardTwo__SVG">
            <svg
              width="113"
              height="32"
              viewBox="0 0 113 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.2"
                d="M1 30.9124C9.14881 31.4293 29.675 29.9044 46.5893 19.6698C67.7321 6.87651 83.5893 0.286032 112 1.06138"
                stroke="url(#paint0_linear_150_494)"
                stroke-width="1.30286"
                stroke-linecap="round"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_150_494"
                  x1="56.5"
                  y1="1"
                  x2="56.5"
                  y2="31"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="white" />
                  <stop offset="1" stop-color="white" stop-opacity="0" />
                </linearGradient>
              </defs>
            </svg>
            <svg
              width="149"
              height="40"
              viewBox="0 0 149 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.2"
                d="M1.00006 38.9441C9.16673 39.464 43.8673 36.4825 57.946 24.7828C79.1352 7.17421 119.527 0.279176 148 1.05904"
                stroke="url(#paint0_linear_150_495)"
                stroke-width="1.30286"
                stroke-linecap="round"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_150_495"
                  x1="74.5001"
                  y1="1"
                  x2="74.5001"
                  y2="39"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="white" />
                  <stop offset="1" stop-color="white" stop-opacity="0" />
                </linearGradient>
              </defs>
            </svg>
            <svg
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_150_501)">
                <path
                  d="M8.45401 9.95384L18 0.407837L27.546 9.95384C29.434 11.8419 30.7197 14.2473 31.2406 16.8661C31.7615 19.4848 31.4942 22.1992 30.4724 24.666C29.4506 27.1328 27.7202 29.2412 25.5002 30.7246C23.2801 32.208 20.67 32.9997 18 32.9997C15.33 32.9997 12.7199 32.208 10.4998 30.7246C8.27976 29.2412 6.54944 27.1328 5.52765 24.666C4.50586 22.1992 4.23851 19.4848 4.75939 16.8661C5.28028 14.2473 6.56601 11.8419 8.45401 9.95384Z"
                  fill="url(#paint0_linear_150_501)"
                  fill-opacity="0.24"
                />
                <path
                  opacity="0.18"
                  d="M19.9286 6.42822C21.6429 7.92822 25.0714 11.0568 25.0714 11.5711"
                  stroke="url(#paint1_linear_150_501)"
                  stroke-width="1.30286"
                  stroke-linecap="round"
                />
              </g>
              <defs>
                <linearGradient
                  id="paint0_linear_150_501"
                  x1="18"
                  y1="0.407837"
                  x2="18"
                  y2="32.9997"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="white" />
                  <stop offset="1" stop-color="white" stop-opacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_150_501"
                  x1="22.5"
                  y1="6.42822"
                  x2="22.5"
                  y2="11.5711"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="white" />
                  <stop offset="1" stop-color="white" stop-opacity="0" />
                </linearGradient>
                <clipPath id="clip0_150_501">
                  <rect width="36" height="36" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <svg
              width="66"
              height="40"
              viewBox="0 0 66 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.2"
                d="M1.29614 38.606C2.72544 31.006 10.3007 15.2849 29.1674 13.2003C48.0341 11.1158 60.0633 7.5 64.4515 1.5"
                stroke="url(#paint0_linear_150_499)"
                stroke-width="1.30286"
                stroke-linecap="round"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_150_499"
                  x1="29.5247"
                  y1="4.08032"
                  x2="29.5247"
                  y2="38.606"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="white" />
                  <stop offset="1" stop-color="white" stop-opacity="0" />
                </linearGradient>
              </defs>
            </svg>
            <svg
              width="58"
              height="37"
              viewBox="0 0 58 37"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.2"
                d="M0.727966 35.8171C2.15726 28.2171 9.73252 12.496 28.5992 10.4114C47.4659 8.32681 55.5176 3.46281 57.1851 1.29138"
                stroke="url(#paint0_linear_150_500)"
                stroke-width="1.30286"
                stroke-linecap="round"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_150_500"
                  x1="28.9565"
                  y1="1.29138"
                  x2="28.9565"
                  y2="35.8171"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="white" />
                  <stop offset="1" stop-color="white" stop-opacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <h5>Intake Goal</h5>
          <span>18000 ml / 25000 ml</span>
        </div>
        <div className="sideBarRight__cardThree">
          <div className="sideBarRight__cardThree__Drink">
            <h3>Drink Log</h3>
            <button>
              <img src={more} />
            </button>
          </div>
          {drinlLog.map((el) => {
            return (
              <div className="sideBarRight__cardThree__item">
                <span>
                  <img src={drop} /> {el.ml} ml
                </span>
                <span> {el.time}</span>
              </div>
            );
          })}
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
              fill="#7B81A6"
            ></path>
          </svg>
        </div>
      </div>
    </aside>
  );
}

export default SideBarRight;
