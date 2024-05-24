import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Year", "Sales", "Expenses", "Profit"],
  ["2014", 1000, 400, 200],
  ["2015", 1170, 460, 250],
  ["2016", 660, 1120, 300],
  ["2017", 1030, 540, 350],
];

function Graph() {
  const options = {
    chart: {
      // Adjust padding as needed
      // padding: {
      //   top: 15,
      //   bottom: 15,
      //   left: 15,
      //   right: 15
      // }
    }
  };

  return (
    <Chart
      chartType="Bar"
      width="100%"
      height="180px" // Reduced height to accommodate padding
      data={data}
      options={options}
    />
  );
}

export default Graph
