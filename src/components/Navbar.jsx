import React, { useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";

import { RiNotification3Line } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import { Notification, UserProfile } from ".";
import { useStateContext } from "../contexts/ContextProvider";

const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
  <TooltipComponent content={title} position="BottomCenter">
    <button
      type="button"
      onClick={() => customFunc()}
      style={{ color }}
      className="relative text-xl rounded-full p-3 hover:bg-light-gray"
    >
      <span
        style={{ background: dotColor }}
        className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
      />
      {icon}
    </button>
  </TooltipComponent>
);

const Navbar = () => {
  const {
    currentColor,
    activeMenu,
    setActiveMenu,
    handleClick,
    isClicked,
    setScreenSize,
    screenSize,
  } = useStateContext();

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  const handleActiveMenu = () => setActiveMenu(!activeMenu);

  return (
    <div className="flex justify-between p-2 md:ml-6 md:mr-6 relative">
      <NavButton
        title="Menu"
        customFunc={handleActiveMenu}
        color={currentColor}
        icon={<AiOutlineMenu />}
      />
      <div className="flex">
        <NavButton
          title="Notification"
          customFunc={() => handleClick("notification")}
          color={currentColor}
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
            >
              <g clip-path="url(#clip0_127_1415)">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M20 25.3332C20.0003 26.0059 19.7462 26.6539 19.2887 27.1472C18.8313 27.6405 18.2042 27.9427 17.5334 27.9932L17.3334 27.9998H14.6667C13.9939 28.0001 13.346 27.746 12.8526 27.2885C12.3593 26.8311 12.0572 26.204 12.0067 25.5332L12 25.3332H20ZM16 2.6665C18.42 2.66646 20.7454 3.60636 22.4857 5.28794C24.226 6.96951 25.2451 9.26129 25.328 11.6798L25.3334 11.9998V17.0185L27.7627 21.8772C27.8687 22.0892 27.9218 22.3237 27.9173 22.5607C27.9129 22.7977 27.8511 23.0301 27.7372 23.2379C27.6233 23.4458 27.4607 23.623 27.2634 23.7543C27.066 23.8856 26.8398 23.9671 26.604 23.9918L26.4507 23.9998H5.54938C5.31226 23.9999 5.07866 23.9425 4.8686 23.8325C4.65854 23.7225 4.47828 23.5632 4.34326 23.3683C4.20825 23.1734 4.12251 22.9486 4.09338 22.7133C4.06426 22.478 4.09262 22.2391 4.17604 22.0172L4.23738 21.8772L6.66671 17.0185V11.9998C6.66671 9.52448 7.65004 7.15051 9.40038 5.40017C11.1507 3.64983 13.5247 2.6665 16 2.6665ZM16 5.33317C14.2821 5.33327 12.6305 5.99656 11.3897 7.18472C10.1489 8.37288 9.4146 9.99417 9.34004 11.7105L9.33338 11.9998V17.0185C9.33339 17.3492 9.2719 17.677 9.15204 17.9852L9.05204 18.2118L7.49204 21.3332H24.5094L22.9494 18.2105C22.8014 17.9149 22.7096 17.5943 22.6787 17.2652L22.6667 17.0185V11.9998C22.6667 10.2317 21.9643 8.53603 20.7141 7.28579C19.4638 6.03555 17.7682 5.33317 16 5.33317Z"
                  fill="black"
                />
                <circle cx="25" cy="3" r="3" fill="#FF7F50" />
              </g>
              <defs>
                <clipPath id="clip0_127_1415">
                  <rect width="32" height="32" fill="white" />
                </clipPath>
              </defs>
            </svg>
          }
        />
        <TooltipComponent content="Profile" position="BottomCenter">
          <div
            className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
            onClick={() => handleClick("userProfile")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="55"
              height="55"
              viewBox="0 0 55 55"
              fill="none"
            >
              <circle cx="27.5" cy="27.5" r="27.5" fill="#FF7F50" />
            </svg>
            <MdKeyboardArrowDown className="text-gray-400 text-14" />
          </div>
        </TooltipComponent>

        {isClicked.notification && <Notification />}
        {isClicked.userProfile && <UserProfile />}
      </div>
    </div>
  );
};

export default Navbar;
