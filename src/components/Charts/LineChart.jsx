// eslint-disable-next-line
import React from "react";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  LineSeries,
  DateTime,
  Legend,
  Tooltip,
  // eslint-disable-next-line
} from "@syncfusion/ej2-react-charts";
// eslint-disable-next-line

import {
  lineCustomSeries,
  LinePrimaryXAxis,
  LinePrimaryYAxis,
  // eslint-disable-next-line
} from "../../data/dummy";
// eslint-disable-next-line
import { useStateContext } from "../../contexts/ContextProvider";

const LineChart = () => {
  const { currentMode } = useStateContext();

  return (
    <ChartComponent
      id="line-chart"
      height="420px"
      primaryXAxis={LinePrimaryXAxis}
      primaryYAxis={LinePrimaryYAxis}
      chartArea={{ border: { width: 0 } }}
      tooltip={{ enable: true }}
      // eslint-disable-next-line
      background={
        // eslint-disable-next-line
        currentMode === "Dark" ? "#33373E" : "#fff"
      }
      // eslint-disable-next-line
      legendSettings={{ background: "white" }}
    >
      <Inject services={[LineSeries, DateTime, Legend, Tooltip]} />
      <SeriesCollectionDirective>
        {lineCustomSeries.map((item, index) => (
          // eslint-disable-next-line
          <SeriesDirective key={index} {...item} />
        ))}
      </SeriesCollectionDirective>
    </ChartComponent>
  );
};

export default LineChart;
