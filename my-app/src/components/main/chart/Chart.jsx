import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,

} from "chart.js";
import { Bar } from "react-chartjs-2";
import faker from "faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
 
);


const labels = ["06", "08", "10", "12", "2", "4", "6", "8", "10"];

export const data = {
  labels,
  datasets: [
    {
      label: "Glass 1",
      data: labels.map(() => faker.datatype.number({ min: 20, max: 53 })),
      backgroundColor: "rgba(54, 41, 183)",
      stack: "Stack 0",
    },
    {
      label: "Glass 2",
      data: labels.map(() => faker.datatype.number({ min: -22, max: 22 })),
      backgroundColor: "rgb(251, 184, 255)",
      stack: "Stack 0",
    },
    {
      label: "Glass 3",
      data: labels.map(() => faker.datatype.number({ min: -20, max: -49 })),
      backgroundColor: "rgb(255, 66, 103)",
      stack: "Stack 0",
    },
  ],
};

function Chart() {
  return <Bar  data={data} />;
}
export default Chart;
