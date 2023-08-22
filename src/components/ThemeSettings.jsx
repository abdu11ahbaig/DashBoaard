// eslint-disable-next-line
import React from "react";
// eslint-disable-next-line
import { MdOutlineCancel } from "react-icons/md";
// eslint-disable-next-line
import { BsCheck } from "react-icons/bs";
// eslint-disable-next-line
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
// eslint-disable-next-line
import { themeColors } from "../data/dummy";
// eslint-disable-next-line
import { useStateContext } from "../contexts/ContextProvider";
// eslint-disable-next-line
const ThemeSettings = () => {
  // eslint-disable-next-line
  const { setColor, setMode, currentMode, currentColor, setThemeSettings } =
    // eslint-disable-next-line
    useStateContext();
  // eslint-disable-next-line

  return (
    <div className="bg-half-transparent w-screen fixed nav-item top-0 right-0">
      {/* // eslint-disable-next-line */}
      <div className="float-right h-screen dark:text-gray-200  bg-white dark:bg-[#484B52] w-400">
        {/* // eslint-disable-next-line */}
        <div className="flex justify-between items-center p-4 ml-4">
          {/* // eslint-disable-next-line */}
          <p className="font-semibold text-lg">Settings</p>
          <button
            // eslint-disable-next-line
            type="button"
            onClick={() => setThemeSettings(false)}
            // eslint-disable-next-line
            style={{ color: "rgb(153, 171, 180)", borderRadius: "50%" }}
            // eslint-disable-next-line
            className="text-2xl p-3 hover:drop-shadow-xl hover:bg-light-gray"
          >
            <MdOutlineCancel />
          </button>
        </div>
        {/* // eslint-disable-next-line */}
        <div className="flex-col border-t-1 border-color p-4 ml-4">
          {/* // eslint-disable-next-line */}
          <p className="font-semibold text-xl ">Theme Option</p>
          <div className="mt-4">
            <input
              // eslint-disable-next-line
              type="radio"
              id="light"
              name="theme"
              value="Light"
              className="cursor-pointer"
              onChange={setMode}
              // eslint-disable-next-line
              checked={currentMode === "Light"}
            />
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label htmlFor="light" className="ml-2 text-md cursor-pointer">
              Light
            </label>
          </div>
          <div className="mt-2">
            <input
              type="radio"
              id="dark"
              name="theme"
              value="Dark"
              // eslint-disable-next-line
              onChange={setMode}
              className="cursor-pointer"
              // eslint-disable-next-line
              checked={currentMode === "Dark"}
            />
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label htmlFor="dark" className="ml-2 text-md cursor-pointer">
              Dark
            </label>
          </div>
        </div>
        <div className="p-4 border-t-1 border-color ml-4">
          <p className="font-semibold text-xl ">Theme Colors</p>
          <div className="flex gap-3">
            {themeColors.map((item, index) => (
              <TooltipComponent
                key={index}
                content={item.name}
                position="TopCenter"
              >
                <div
                  className="relative mt-2 cursor-pointer flex gap-5 items-center"
                  key={item.name}
                >
                  <button
                    type="button"
                    className="h-10 w-10 rounded-full cursor-pointer"
                    style={{ backgroundColor: item.color }}
                    onClick={() => setColor(item.color)}
                  >
                    {/* // eslint-disable-next-line */}
                    <BsCheck
                      // eslint-disable-next-line
                      className={`ml-2 text-2xl text-white ${
                        // eslint-disable-next-line
                        item.color === currentColor ? "block" : "hidden"
                      }`}
                    />
                    {/* // eslint-disable-next-line */}
                  </button>
                </div>
              </TooltipComponent>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThemeSettings;
