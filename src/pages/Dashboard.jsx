import React from "react";
import { DropDownListComponent } from "@syncfusion/ej2-react-dropdowns";

import { Stacked, LineChart } from "../components";
import { earningData, dropdownData } from "../data/dummy";
import { useStateContext } from "../contexts/ContextProvider";
const DropDown = ({ currentMode }) => (
  <div className="w-28 border-1 border-color px-2 py-1 rounded-md">
    <DropDownListComponent
      id="time"
      fields={{ text: "Time", value: "Id" }}
      style={{ border: "none", color: currentMode === "Dark" && "white" }}
      value="1"
      dataSource={dropdownData}
      popupHeight="220px"
      popupWidth="120px"
    />
  </div>
);

const Dashboard = () => {
  const { currentMode } = useStateContext();

  return (
    <div className="mt-24">
      <div
        className="flex flex-wrap lg:flex-nowrap justify-center  "
        style={{
          borderRadius: `16px`,
        }}
      >
        <div className="flex m-4 flex-wrap justify-center gap-1 items-center">
          {earningData.map((item) => (
            <div
              key={item.title}
              className="bg-white h-44 dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56  p-4 pt-9 rounded-sm "
            >
              <div className="flex items-center">
                <button
                  type="button"
                  style={{
                    color: item.iconColor,
                  }}
                  className="text-2sm opacity-0.9 rounded-full p-4 hover:drop-shadow-xl"
                >
                  {item.icon}
                </button>
                <p className="text-sm text-gray-400 ml-2 mt-1">{item.title}</p>
              </div>
              <p className="mt-3">
                <span className="text-lg font-semibold">{item.amount}</span>
                <span className={`text-sm text-${item.pcColor} ml-2`}>
                  {item.percentage}
                </span>
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex gap-10 m-4 flex-wrap justify-center">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-6 rounded-2xl w-96 md:w-760">
          <div className="flex justify-between items-center gap-2 mb-10">
            <p className="text-xl font-semibold">Sales Overview</p>
            <DropDown currentMode={currentMode} />
          </div>
          <div className="md:w-full overflow-auto">
            <LineChart />
          </div>
        </div>
      </div>

      <div className="flex gap-10 flex-wrap justify-center">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-780  ">
          <div className="flex justify-between">
            <p className="font-semibold text-xl">Top Products</p>
            <div className="flex items-center gap-4"></div>
          </div>
          <div className="mt-10 flex gap-10 flex-wrap justify-center">
            <div>
              <Stacked currentMode={currentMode} width="320px" height="360px" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
