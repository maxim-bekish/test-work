import React from "react";
import line from "../../svg/line.svg";
import "./style.scss";
let radius = 20;

function SectionStatisticsCopy(props) {
  let circumference = (x) => 2 * Math.PI * x;
  let fillingPercentage = (q) =>
    circumference(radius) - (q / 100) * circumference(radius);

  return (
    <section className="section_statistics">
      {props.data.map((el) => {
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
              <p>{el.ml} ml</p>
            </div>
            <img className="line" src={line} alt="" />
          </div>
        );
      })}
    </section>
  );
}

export default SectionStatisticsCopy;
