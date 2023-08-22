// eslint-disable-next-line
import React from "react";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  Legend,
  Category,
  StackingColumnSeries,
  Tooltip,
  // eslint-disable-next-line
} from "@syncfusion/ej2-react-charts";
// eslint-disable-next-line
import {
  stackedCustomSeries,
  stackedPrimaryXAxis,
  stackedPrimaryYAxis,
  // eslint-disable-next-line
} from "../../data/dummy";
// eslint-disable-next-line
import { useStateContext } from "../../contexts/ContextProvider";

const Stacked = ({ width, height }) => {
  const { currentMode } = useStateContext();

  return (
    <ChartComponent
      id="charts"
      primaryXAxis={stackedPrimaryXAxis}
      primaryYAxis={stackedPrimaryYAxis}
      width={width}
      height={height}
      chartArea={{ border: { width: 0 } }}
      // eslint-disable-next-line
      tooltip={{ enable: true }}
      // eslint-disable-next-line
      background={currentMode === "Dark" ? "#33373E" : "#fff"}
      // eslint-disable-next-line
      legendSettings={{ background: "white" }}
    >
      <Inject services={[StackingColumnSeries, Category, Legend, Tooltip]} />
      <SeriesCollectionDirective>
        {/* // eslint-disable-next-line */}
        {stackedCustomSeries.map((item, index) => (
          // eslint-disable-next-line
          <SeriesDirective key={index} {...item} />
        ))}
      </SeriesCollectionDirective>
    </ChartComponent>
  );
};

export default Stacked;
