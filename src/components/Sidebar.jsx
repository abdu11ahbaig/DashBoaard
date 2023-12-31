// eslint-disable-next-line
import React from "react";
// eslint-disable-next-line
import { Link, NavLink } from "react-router-dom";
// eslint-disable-next-line
import { MdOutlineCancel } from "react-icons/md";
// eslint-disable-next-line
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
// eslint-disable-next-line
import { links } from "../data/dummy";
// eslint-disable-next-line
import { useStateContext } from "../contexts/ContextProvider";
// eslint-disable-next-line
const Sidebar = () => {
  // eslint-disable-next-line
  const { currentColor, activeMenu, setActiveMenu, screenSize } =
    useStateContext();

  const handleCloseSideBar = () => {
    if (activeMenu !== undefined && screenSize <= 900) {
      setActiveMenu(false);
    }
  };
  // eslint-disable-next-line
  const activeLink =
    // eslint-disable-next-line
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg  text-white  text-md m-2";
  // eslint-disable-next-line
  const normalLink =
    // eslint-disable-next-line
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2";
  // eslint-disable-next-line
  return (
    <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
      {activeMenu && (
        <>
          <div className="flex justify-between items-center">
            <Link
              to="/"
              onClick={handleCloseSideBar}
              className="items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="124"
                height="44"
                viewBox="0 0 124 44"
                fill="none"
              >
                {/* // eslint-disable-next-line */}
                <path
                  // eslint-disable-next-line
                  d="M0 34.4434V0.464555H15.201C17.9561 0.464555 20.3339 0.962293 22.3343 1.95777C24.3468 2.94218 25.898 4.31925 26.9881 6.08899C28.0781 7.84766 28.6232 9.89392 28.6232 12.2278C28.6232 14.5726 28.0662 16.6244 26.9521 18.3831C25.8501 20.1307 24.2749 21.4857 22.2265 22.448C20.1782 23.4103 17.7465 23.8914 14.9315 23.8914H5.55214V17.4208H13.2784C14.62 17.4208 15.7401 17.2051 16.6385 16.7738C17.5488 16.3424 18.2376 15.7396 18.7048 14.9653C19.172 14.18 19.4055 13.2675 19.4055 12.2278C19.4055 11.177 19.172 10.27 18.7048 9.50679C18.2376 8.73253 17.5488 8.13525 16.6385 7.71493C15.7281 7.29462 14.6081 7.08447 13.2784 7.08447H8.89421V34.4434H0Z"
                  fill="#FF7F50"
                />
                <path
                  // eslint-disable-next-line
                  d="M64.7038 17.454C64.7038 21.1926 63.9252 24.3615 62.368 26.9608C60.8108 29.5601 58.7025 31.5344 56.0432 32.8839C53.3959 34.2333 50.4252 34.908 47.131 34.908C43.8249 34.908 40.8482 34.2278 38.2009 32.8673C35.5536 31.5068 33.4513 29.5324 31.8941 26.9442C30.3488 24.3449 29.5762 21.1815 29.5762 17.454C29.5762 13.7154 30.3488 10.5465 31.8941 7.94721C33.4513 5.34791 35.5536 3.37356 38.2009 2.02413C40.8482 0.674711 43.8249 0 47.131 0C50.4252 0 53.3959 0.674711 56.0432 2.02413C58.7025 3.37356 60.8108 5.34791 62.368 7.94721C63.9252 10.5465 64.7038 13.7154 64.7038 17.454ZM55.612 17.454C55.612 15.2418 55.2706 13.3725 54.5878 11.8462C53.917 10.3198 52.9467 9.1639 51.677 8.37858C50.4192 7.59326 48.9039 7.2006 47.131 7.2006C45.3702 7.2006 43.8549 7.59326 42.5851 8.37858C41.3154 9.1639 40.3391 10.3198 39.6563 11.8462C38.9855 13.3725 38.6501 15.2418 38.6501 17.454C38.6501 19.6662 38.9855 21.5354 39.6563 23.0618C40.3391 24.5882 41.3154 25.7441 42.5851 26.5294C43.8549 27.3147 45.3702 27.7074 47.131 27.7074C48.9039 27.7074 50.4192 27.3147 51.677 26.5294C52.9467 25.7441 53.917 24.5882 54.5878 23.0618C55.2706 21.5354 55.612 19.6662 55.612 17.454Z"
                  fill="#FF7F50"
                />
                <path
                  // eslint-disable-next-line
                  d="M86.7514 10.6516C86.6316 9.43489 86.0986 8.48919 85.1523 7.81448C84.2179 7.12871 82.8823 6.78582 81.1454 6.78582C79.9954 6.78582 79.0371 6.92408 78.2705 7.2006C77.5038 7.47712 76.9288 7.85872 76.5455 8.3454C76.1622 8.82102 75.9646 9.36853 75.9526 9.98793C75.9286 10.4967 76.0364 10.9447 76.276 11.3318C76.5276 11.719 76.8869 12.0618 77.3541 12.3605C77.8332 12.6481 78.4082 12.9025 79.079 13.1237C79.7498 13.3449 80.5045 13.5385 81.343 13.7044L84.5054 14.368C86.3262 14.733 87.9313 15.2197 89.3208 15.8281C90.7224 16.4364 91.8963 17.1609 92.8426 18.0015C93.8009 18.8421 94.5256 19.81 95.0167 20.905C95.5079 22 95.7594 23.2278 95.7714 24.5882C95.7594 26.734 95.1725 28.5757 94.0105 30.1131C92.8486 31.6506 91.1776 32.8286 88.9974 33.6471C86.8293 34.4656 84.2119 34.8748 81.1454 34.8748C78.0668 34.8748 75.3836 34.449 73.0957 33.5973C70.8077 32.7456 69.0289 31.4515 67.7591 29.7149C66.4894 27.9784 65.8365 25.7828 65.8006 23.1282H74.3175C74.3894 24.2232 74.7068 25.1357 75.2698 25.8658C75.8328 26.5958 76.6054 27.1488 77.5877 27.5249C78.5819 27.901 79.7319 28.089 81.0376 28.089C82.2354 28.089 83.2536 27.9397 84.0921 27.641C84.9426 27.3424 85.5955 26.9276 86.0507 26.3967C86.5058 25.8658 86.7394 25.2574 86.7514 24.5716C86.7394 23.9301 86.5238 23.3826 86.1046 22.9291C85.6853 22.4646 85.0385 22.0664 84.164 21.7345C83.3015 21.3917 82.1995 21.0764 80.8579 20.7888L77.0127 19.9593C73.8264 19.2846 71.3168 18.1951 69.4841 16.6908C67.6513 15.1755 66.7409 13.1292 66.7529 10.552C66.7409 8.45048 67.3519 6.60885 68.5857 5.02715C69.8195 3.44545 71.5264 2.21217 73.7066 1.3273C75.8867 0.442434 78.3723 0 81.1633 0C84.0143 0 86.4879 0.447963 88.5842 1.34389C90.6924 2.22876 92.3275 3.4731 93.4895 5.07692C94.6514 6.68074 95.2443 8.53896 95.2683 10.6516H86.7514Z"
                  fill="#FF7F50"
                />
                <path
                  // eslint-disable-next-line
                  d="M102.6 44C101.546 44 100.552 43.9226 99.6173 43.7677C98.6829 43.6239 97.8804 43.4304 97.2096 43.187L99.1501 37.2971C100.013 37.5626 100.791 37.7174 101.486 37.7617C102.193 37.8059 102.798 37.7009 103.301 37.4465C103.816 37.2031 104.211 36.7662 104.487 36.1357L104.828 35.3726L95.0175 8.95928H104.217L109.302 27.1433H109.59L114.746 8.95928H124L113.596 36.8824C113.093 38.276 112.381 39.5038 111.458 40.5656C110.548 41.6385 109.368 42.4791 107.919 43.0875C106.481 43.6958 104.708 44 102.6 44Z"
                  fill="#FF7F50"
                />
              </svg>
            </Link>
            <TooltipComponent content="Menu" position="BottomCenter">
              <button
                type="button"
                onClick={() => setActiveMenu(!activeMenu)}
                style={{ color: currentColor }}
                className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden"
              >
                <MdOutlineCancel />
              </button>
            </TooltipComponent>
          </div>
          <div className="mt-10 ">
            {links.map((item) => (
              <div key={item.title}>
                <p className="text-gray-400 dark:text-gray-400 m-3 mt-4 uppercase">
                  {item.title}
                </p>
                {item.links.map((link) => (
                  <NavLink
                    to={`/${link.name}`}
                    key={link.name}
                    onClick={handleCloseSideBar}
                    style={({ isActive }) => ({
                      // eslint-disable-next-line
                      backgroundColor: isActive ? currentColor : "",
                      // eslint-disable-next-line
                    })}
                    // eslint-disable-next-line
                    className={
                      // eslint-disable-next-line
                      ({ isActive }) =>
                        // eslint-disable-next-line
                        isActive ? activeLink : normalLink
                      // eslint-disable-next-line
                    }
                  >
                    {link.icon}
                    <span className="capitalize ">{link.name}</span>
                  </NavLink>
                ))}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
