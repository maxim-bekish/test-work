import React from "react";
import './style.scss'


function Chart(props) {
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
        <div className="chart__table__line">
          <hr />
          <hr />
          <hr />
          <hr />
          <hr />
        </div>
        {props.data.map((el) => {
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
        {props.data.map((el) => {
          return <span>{el.time}</span>;
        })}
      </div>
    </div>
  );
}

export default Chart;
