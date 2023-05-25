import React from "react";
import sun from "../../../svg/sun-icon.svg";
let radius = 20;

let card = [
  {
    colorDark: "#55A55E",
    colorLight: "#BAE7B6",
    percent: 80,
    ml: 5000,
    text: "Daily Intake",
    className: "wrapper-two wrapper-all",
  },
  {
    colorDark: "#5E5498",
    colorLight: "#D8D3F5",
    percent: 85,
    ml: 2500,
    text: "Average Intake",
    className: "wrapper-three wrapper-all",
  },
  {
    colorDark: "#9B715D",
    colorLight: "#F3D5C8",
    percent: 68,
    ml: 17000,
    text: "Total Intake",
    className: "wrapper-four wrapper-all",
  },
];
function Section_statistics() {
  let circumference = (x) => 2 * Math.PI * x;
  let fillingPercentage = (q) =>
    circumference(radius) - (q / 100) * circumference(radius);

  return (
    <section className="section_statistics">
      <div className=" wrapper-one  ">
        <img src={sun} alt="" />
        <span className="wrapper__span1">26 &deg;C</span>
        <span className="wrapper__span2">Sunny Day</span>
        <span>Don’t forget to take your water bottle with you. </span>
      </div>

      {card.map((el) => {
        return (
         <div className={el.className}>
        <div>
          <svg
            width="50"
            height="50"
            viewBox=" 0 0 50 50"
            xmlns="http://www.w3.org/2000/svg"
          >
            <text
              x="25"
              y="25"
              text-anchor="middle"
              dy="5"
              font-size="14"
              fill="#11263C"
            >
              {el.percent}%
            </text>
            <circle
              r="20"
              cx="25"
              cy="25"
              stroke-width="5"
              fill="transparent"
              stroke={el.colorLight}
              stroke-dasharray={circumference(radius)}
            ></circle>
            <circle
              stroke-width="5"
              r="20"
              cx="25"
              cy="25"
              fill="transparent"
              stroke={el.colorDark}
              stroke-dasharray={`${circumference(radius)} ${circumference(
                radius
              )}`}
              stroke-dashoffset={fillingPercentage(el.percent)}
            ></circle>
          </svg>
        </div>
        <div>
          <p>{el.text}</p>
          <p>
            <b>{el.ml} ml</b>
          </p>
        </div>
      </div>
        );
      })}

     
    </section>
  );
}

export default Section_statistics;
