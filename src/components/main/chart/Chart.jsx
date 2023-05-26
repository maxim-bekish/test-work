import React from "react";

const frameItem = [
  { blue: 20, pink: 20, red: 20, time: "6 am" },
  { blue: 27, pink: 32, red: 28, time: "8 am" },
  { blue: 53, pink: 43, red: 49, time: "10 am" },
  { blue: 44, pink: 32, red: 37, time: "12 pm" },
  { blue: 20, pink: 20, red: 20, time: "2 pm" },
  { blue: 44, pink: 32, red: 37, time: "4 pm" },
  { blue: 27, pink: 32, red: 28, time: "6 pm" },
  { blue: 36, pink: 32, red: 41, time: "8 pm" },
  { blue: 20, pink: 20, red: 20, time: "10 pm" },
];

function Chart() {
  return (
    <div className="chart">
      <div className="chart__title">
        <div className="chart__title__intake">
          <h6>Glass Intake</h6>
          <span>200 ml</span>
        </div>
        <div className="chart__title__glass">
          <span>Glass 1</span>
          <span>Glass 2</span>
          <span>Glass 3</span>
        </div>
      </div>
      <div className="chart__table">
        <div className="chartLine">
          <hr />
          <hr />
          <hr />
          <hr />
          <hr />
        </div>
        {frameItem.map((el) => {
          return (
            <div className="chart__table__frame">
              <div style={{ height: el.blue }} className="frame-blue"></div>
              <div style={{ height: el.pink }} className="frame-pink"></div>
              <div style={{ height: el.red }} className="frame-red"></div>
            </div>
          );
        })}
      </div>
      <div className="chart__table__time">
        {frameItem.map((el) => {
          return <span>{el.time}</span>;
        })}
      </div>
    </div>
  );
}

export default Chart;
