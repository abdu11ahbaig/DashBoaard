import React from "react";

import { FiShoppingBag } from "react-icons/fi";
import { BsCurrencyDollar } from "react-icons/bs";
import avatar2 from "./avatar2.jpg";
import avatar3 from "./avatar3.png";
import avatar4 from "./avatar4.jpg";

export const gridOrderImage = (props) => (
  <div>
    <img
      className="rounded-xl h-20 md:ml-3"
      src={props.ProductImage}
      alt="order-item"
    />
  </div>
);

export const gridOrderStatus = (props) => (
  <button
    type="button"
    style={{ background: props.StatusBg }}
    className="text-white py-1 px-2 capitalize rounded-2xl text-md"
  >
    {props.Status}
  </button>
);

const customerGridImage = (props) => (
  <div className="image flex gap-4">
    <img
      className="rounded-full w-10 h-10"
      src={props.CustomerImage}
      alt="employee"
    />
    <div>
      <p>{props.CustomerName}</p>
      <p>{props.CustomerEmail}</p>
    </div>
  </div>
);

const customerGridStatus = (props) => (
  <div className="flex gap-2 justify-center items-center text-gray-700 capitalize">
    <p
      style={{ background: props.StatusBg }}
      className="rounded-full h-3 w-3"
    />
    <p>{props.Status}</p>
  </div>
);

export const LinePrimaryXAxis = {
  valueType: "DateTime",
  labelFormat: "y",
  intervalType: "Years",
  edgeLabelPlacement: "Shift",
  majorGridLines: { width: 0 },
  background: "white",
};

export const LinePrimaryYAxis = {
  labelFormat: "${value}",
  rangePadding: "None",
  minimum: 0,
  maximum: 100,
  interval: 20,
  lineStyle: { width: 0 },
  majorTickLines: { width: 0 },
  minorTickLines: { width: 0 },
};

export const customersGrid = [
  { type: "checkbox", width: "50" },
  {
    headerText: "Name",
    width: "150",
    template: customerGridImage,
    textAlign: "Center",
  },
  {
    field: "ProjectName",
    headerText: "Project Name",
    width: "150",
    textAlign: "Center",
  },
  {
    field: "Status",
    headerText: "Status",
    width: "130",
    format: "yMd",
    textAlign: "Center",
    template: customerGridStatus,
  },
  {
    field: "Weeks",
    headerText: "Weeks",
    width: "100",
    format: "C2",
    textAlign: "Center",
  },
  {
    field: "Budget",
    headerText: "Budget",
    width: "100",
    format: "yMd",
    textAlign: "Center",
  },

  {
    field: "Location",
    headerText: "Location",
    width: "150",
    textAlign: "Center",
  },

  {
    field: "CustomerID",
    headerText: "Customer ID",
    width: "120",
    textAlign: "Center",
    isPrimaryKey: true,
  },
];

export const links = [
  {
    title: "Dashboard",
    links: [
      {
        name: "Dashboard",
        icon: <FiShoppingBag />,
      },
      {
        name: "Inventory",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M19 12.255C16.1405 13.4112 13.0844 14.0038 10 14C6.817 14 3.78 13.38 1 12.255M10 11H10.01M14 5V3C14 2.46957 13.7893 1.96086 13.4142 1.58579C13.0391 1.21071 12.5304 1 12 1H8C7.46957 1 6.96086 1.21071 6.58579 1.58579C6.21071 1.96086 6 2.46957 6 3V5H14ZM3 19H17C17.5304 19 18.0391 18.7893 18.4142 18.4142C18.7893 18.0391 19 17.5304 19 17V7C19 6.46957 18.7893 5.96086 18.4142 5.58579C18.0391 5.21071 17.5304 5 17 5H3C2.46957 5 1.96086 5.21071 1.58579 5.58579C1.21071 5.96086 1 6.46957 1 7V17C1 17.5304 1.21071 18.0391 1.58579 18.4142C1.96086 18.7893 2.46957 19 3 19Z"
              stroke="#A0A1A5"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        ),
      },
      {
        name: "Vendors",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M9.93893 3.25H14.0609C15.9039 3.25 17.3629 3.25 18.5049 3.403C19.6789 3.561 20.6299 3.893 21.3799 4.641C22.4099 5.668 22.6599 7.081 22.7389 8.958V8.982C22.7469 9.146 22.7539 9.313 22.7469 9.454C22.7438 9.6564 22.6928 9.85517 22.5979 10.034C22.5286 10.1537 22.4378 10.2594 22.3299 10.346C22.249 10.4111 22.1642 10.4712 22.0759 10.526C21.9129 10.629 21.6909 10.753 21.4319 10.898L21.4119 10.908C21.2171 11.0161 21.0548 11.1744 20.9418 11.3664C20.8288 11.5585 20.7692 11.7772 20.7692 12C20.7692 12.2228 20.8288 12.4415 20.9418 12.6336C21.0548 12.8256 21.2171 12.9839 21.4119 13.092L21.4319 13.102C21.6919 13.247 21.9119 13.371 22.0759 13.474C22.1609 13.528 22.2499 13.588 22.3299 13.654C22.4039 13.715 22.5149 13.818 22.5979 13.966C22.7179 14.18 22.7409 14.396 22.7479 14.546C22.7539 14.686 22.7469 14.854 22.7399 15.018L22.7389 15.042C22.6589 16.918 22.4089 18.332 21.3799 19.359C20.6299 20.107 19.6799 20.439 18.5049 20.597C17.3629 20.75 15.9039 20.75 14.0609 20.75H9.93993C8.09693 20.75 6.63793 20.75 5.49593 20.597C4.32093 20.439 3.37093 20.107 2.62093 19.359C1.59093 18.332 1.34093 16.919 1.26193 15.042V15.018C1.25256 14.8609 1.24956 14.7034 1.25293 14.546C1.25993 14.396 1.28293 14.18 1.40293 13.966C1.47224 13.8463 1.5631 13.7406 1.67093 13.654C1.75185 13.5889 1.83667 13.5288 1.92493 13.474C2.08793 13.371 2.30993 13.247 2.56893 13.102L2.58893 13.092C2.78372 12.9839 2.94605 12.8256 3.05906 12.6336C3.17208 12.4415 3.23168 12.2228 3.23168 12C3.23168 11.7772 3.17208 11.5585 3.05906 11.3664C2.94605 11.1744 2.78372 11.0161 2.58893 10.908L2.56893 10.898C2.30893 10.753 2.08893 10.629 1.92493 10.526C1.83652 10.4715 1.75168 10.4113 1.67093 10.346C1.5631 10.2594 1.47224 10.1537 1.40293 10.034C1.30775 9.85525 1.25634 9.65648 1.25293 9.454C1.24922 9.2886 1.25256 9.12312 1.26293 8.958C1.34093 7.082 1.59093 5.668 2.62093 4.641C3.37093 3.893 4.32093 3.561 5.49593 3.403C6.63693 3.25 8.09493 3.25 9.93893 3.25ZM21.2489 14.726V14.746L21.2399 14.979C21.1619 16.835 20.9089 17.711 20.3199 18.297C19.8959 18.721 19.3139 18.975 18.3049 19.11C17.2749 19.248 15.9159 19.25 14.0049 19.25H9.99493C8.08393 19.25 6.72493 19.248 5.69493 19.11C4.68493 18.975 4.10393 18.721 3.67893 18.297C3.09093 17.711 2.83793 16.835 2.75893 14.979C2.75555 14.8947 2.75289 14.8104 2.75093 14.726C2.87493 14.649 3.05393 14.549 3.31893 14.401C3.74648 14.1626 4.10263 13.8144 4.35055 13.3923C4.59848 12.9702 4.7292 12.4895 4.7292 12C4.7292 11.5105 4.59848 11.0298 4.35055 10.6077C4.10263 10.1856 3.74648 9.83739 3.31893 9.599C3.12756 9.49427 2.93819 9.38591 2.75093 9.274V9.254L2.75993 9.021C2.83793 7.165 3.09093 6.289 3.67993 5.703C4.10393 5.279 4.68493 5.025 5.69493 4.89C6.72493 4.752 8.08393 4.75 9.99493 4.75H14.0049C15.9159 4.75 17.2749 4.752 18.3049 4.89C19.3149 5.025 19.8959 5.279 20.3209 5.703C20.9079 6.289 21.1619 7.165 21.2399 9.021L21.2489 9.254V9.274C21.1249 9.351 20.9459 9.451 20.6809 9.599C20.2531 9.83718 19.8967 10.1853 19.6486 10.6075C19.4004 11.0296 19.2696 11.5103 19.2696 12C19.2696 12.4897 19.4004 12.9704 19.6486 13.3925C19.8967 13.8147 20.2531 14.1628 20.6809 14.401C20.9449 14.549 21.1249 14.649 21.2489 14.726ZM15.5299 8.47C15.6704 8.61063 15.7493 8.80125 15.7493 9C15.7493 9.19875 15.6704 9.38937 15.5299 9.53L9.52993 15.53C9.38775 15.6625 9.19971 15.7346 9.00541 15.7312C8.8111 15.7277 8.62572 15.649 8.48831 15.5116C8.35089 15.3742 8.27218 15.1888 8.26875 14.9945C8.26532 14.8002 8.33745 14.6122 8.46993 14.47L14.4699 8.47C14.6106 8.32955 14.8012 8.25066 14.9999 8.25066C15.1987 8.25066 15.3893 8.32955 15.5299 8.47Z"
              fill="#A0A1A5"
            />
            <path
              d="M15.5 14.5C15.5 14.7652 15.3946 15.0196 15.2071 15.2071C15.0196 15.3946 14.7652 15.5 14.5 15.5C14.2348 15.5 13.9804 15.3946 13.7929 15.2071C13.6054 15.0196 13.5 14.7652 13.5 14.5C13.5 14.2348 13.6054 13.9804 13.7929 13.7929C13.9804 13.6054 14.2348 13.5 14.5 13.5C14.7652 13.5 15.0196 13.6054 15.2071 13.7929C15.3946 13.9804 15.5 14.2348 15.5 14.5ZM10.5 9.5C10.5 9.76522 10.3946 10.0196 10.2071 10.2071C10.0196 10.3946 9.76522 10.5 9.5 10.5C9.23478 10.5 8.98043 10.3946 8.79289 10.2071C8.60536 10.0196 8.5 9.76522 8.5 9.5C8.5 9.23478 8.60536 8.98043 8.79289 8.79289C8.98043 8.60536 9.23478 8.5 9.5 8.5C9.76522 8.5 10.0196 8.60536 10.2071 8.79289C10.3946 8.98043 10.5 9.23478 10.5 9.5Z"
              fill="#A0A1A5"
            />
          </svg>
        ),
      },
      {
        name: "Customers",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="20"
            viewBox="0 0 14 20"
            fill="none"
          >
            <path
              d="M7 9C9.20914 9 11 7.20914 11 5C11 2.79086 9.20914 1 7 1C4.79086 1 3 2.79086 3 5C3 7.20914 4.79086 9 7 9Z"
              stroke="#A0A1A5"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M1 19V17C1 15.9391 1.42143 14.9217 2.17157 14.1716C2.92172 13.4214 3.93913 13 5 13H9C10.0609 13 11.0783 13.4214 11.8284 14.1716C12.5786 14.9217 13 15.9391 13 17V19"
              stroke="#A0A1A5"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        ),
      },
      {
        name: "Discounts",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
          >
            <path
              d="M20.1667 7.581V3.87766C20.1667 2.42016 19.58 1.8335 18.1225 1.8335H14.4192C12.9617 1.8335 12.375 2.42016 12.375 3.87766V7.581C12.375 9.0385 12.9617 9.62516 14.4192 9.62516H18.1225C19.58 9.62516 20.1667 9.0385 20.1667 7.581Z"
              stroke="#A0A1A5"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M9.62516 7.81016V3.6485C9.62516 2.356 9.0385 1.8335 7.581 1.8335H3.87766C2.42016 1.8335 1.8335 2.356 1.8335 3.6485V7.801C1.8335 9.10266 2.42016 9.616 3.87766 9.616H7.581C9.0385 9.62516 9.62516 9.10266 9.62516 7.81016Z"
              stroke="#A0A1A5"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M9.62516 18.1225V14.4192C9.62516 12.9617 9.0385 12.375 7.581 12.375H3.87766C2.42016 12.375 1.8335 12.9617 1.8335 14.4192V18.1225C1.8335 19.58 2.42016 20.1667 3.87766 20.1667H7.581C9.0385 20.1667 9.62516 19.58 9.62516 18.1225Z"
              stroke="#A0A1A5"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M13.2915 16.0415H18.7915"
              stroke="#A0A1A5"
              stroke-width="1.5"
              stroke-linecap="round"
            />
            <path
              d="M16.0415 18.7915V13.2915"
              stroke="#A0A1A5"
              stroke-width="1.5"
              stroke-linecap="round"
            />
          </svg>
        ),
      },
      {
        name: "Trends",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M5.75731 8.35156V14.64"
              stroke="#A0A1A5"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M10.0351 5.34277V14.6403"
              stroke="#A0A1A5"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M14.2431 11.6748V14.6402"
              stroke="#A0A1A5"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M14.2954 0.833496H5.70492C2.71048 0.833496 0.833496 2.95291 0.833496 5.95322V14.0471C0.833496 17.0474 2.70175 19.1668 5.70492 19.1668H14.2954C17.2986 19.1668 19.1668 17.0474 19.1668 14.0471V5.95322C19.1668 2.95291 17.2986 0.833496 14.2954 0.833496Z"
              stroke="#A0A1A5"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        ),
      },
      {
        name: "User Roles",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M12 3.75C11.7702 3.75 11.5426 3.79527 11.3303 3.88321C11.118 3.97116 10.9251 4.10006 10.7626 4.26256C10.6001 4.42507 10.4712 4.61798 10.3832 4.8303C10.2953 5.04262 10.25 5.27019 10.25 5.5C10.25 5.72981 10.2953 5.95738 10.3832 6.1697C10.4712 6.38202 10.6001 6.57493 10.7626 6.73744C10.9251 6.89994 11.118 7.02884 11.3303 7.11679C11.5426 7.20474 11.7702 7.25 12 7.25C12.4641 7.25 12.9092 7.06563 13.2374 6.73744C13.5656 6.40925 13.75 5.96413 13.75 5.5C13.75 5.03587 13.5656 4.59075 13.2374 4.26256C12.9092 3.93437 12.4641 3.75 12 3.75ZM9 5.5C9 4.70435 9.31607 3.94129 9.87868 3.37868C10.4413 2.81607 11.2044 2.5 12 2.5C12.7956 2.5 13.5587 2.81607 14.1213 3.37868C14.6839 3.94129 15 4.70435 15 5.5C15 6.29565 14.6839 7.05871 14.1213 7.62132C13.5587 8.18393 12.7956 8.5 12 8.5C11.2044 8.5 10.4413 8.18393 9.87868 7.62132C9.31607 7.05871 9 6.29565 9 5.5ZM18.5 4.75C18.1685 4.75 17.8505 4.8817 17.6161 5.11612C17.3817 5.35054 17.25 5.66848 17.25 6C17.25 6.33152 17.3817 6.64946 17.6161 6.88388C17.8505 7.1183 18.1685 7.25 18.5 7.25C18.8315 7.25 19.1495 7.1183 19.3839 6.88388C19.6183 6.64946 19.75 6.33152 19.75 6C19.75 5.66848 19.6183 5.35054 19.3839 5.11612C19.1495 4.8817 18.8315 4.75 18.5 4.75ZM16 6C16 5.33696 16.2634 4.70107 16.7322 4.23223C17.2011 3.76339 17.837 3.5 18.5 3.5C19.163 3.5 19.7989 3.76339 20.2678 4.23223C20.7366 4.70107 21 5.33696 21 6C21 6.66304 20.7366 7.29893 20.2678 7.76777C19.7989 8.23661 19.163 8.5 18.5 8.5C17.837 8.5 17.2011 8.23661 16.7322 7.76777C16.2634 7.29893 16 6.66304 16 6ZM4.25 6C4.25 5.66848 4.3817 5.35054 4.61612 5.11612C4.85054 4.8817 5.16848 4.75 5.5 4.75C5.83152 4.75 6.14946 4.8817 6.38388 5.11612C6.6183 5.35054 6.75 5.66848 6.75 6C6.75 6.33152 6.6183 6.64946 6.38388 6.88388C6.14946 7.1183 5.83152 7.25 5.5 7.25C5.16848 7.25 4.85054 7.1183 4.61612 6.88388C4.3817 6.64946 4.25 6.33152 4.25 6ZM5.5 3.5C4.83696 3.5 4.20107 3.76339 3.73223 4.23223C3.26339 4.70107 3 5.33696 3 6C3 6.66304 3.26339 7.29893 3.73223 7.76777C4.20107 8.23661 4.83696 8.5 5.5 8.5C6.16304 8.5 6.79893 8.23661 7.26777 7.76777C7.73661 7.29893 8 6.66304 8 6C8 5.33696 7.73661 4.70107 7.26777 4.23223C6.79893 3.76339 6.16304 3.5 5.5 3.5ZM7.5 11.625C7.5 11.0614 7.72388 10.5209 8.1224 10.1224C8.52091 9.72388 9.06141 9.5 9.625 9.5H14.375C14.9386 9.5 15.4791 9.72388 15.8776 10.1224C16.2761 10.5209 16.5 11.0614 16.5 11.625V17C16.5 18.1935 16.0259 19.3381 15.182 20.182C14.3381 21.0259 13.1935 21.5 12 21.5C10.8065 21.5 9.66193 21.0259 8.81802 20.182C7.97411 19.3381 7.5 18.1935 7.5 17V11.625ZM12 20.25C12.862 20.25 13.6886 19.9076 14.2981 19.2981C14.9076 18.6886 15.25 17.862 15.25 17V11.625C15.25 11.3929 15.1578 11.1704 14.9937 11.0063C14.8296 10.8422 14.6071 10.75 14.375 10.75H9.625C9.39294 10.75 9.17038 10.8422 9.00628 11.0063C8.84219 11.1704 8.75 11.3929 8.75 11.625V17C8.75 17.862 9.09241 18.6886 9.7019 19.2981C10.3114 19.9076 11.138 20.25 12 20.25ZM5.5 18.75C5.91813 18.7507 6.32809 18.6343 6.6835 18.414C6.793 18.827 6.9495 19.2205 7.1465 19.589C6.61317 19.8733 6.0153 20.0147 5.41111 19.9993C4.80692 19.984 4.217 19.8124 3.69879 19.5014C3.18059 19.1904 2.75175 18.7504 2.45405 18.2245C2.15635 17.6985 1.99992 17.1044 2 16.5V11.6255C1.99993 11.3464 2.05485 11.07 2.16161 10.8121C2.26837 10.5543 2.42489 10.32 2.62222 10.1226C2.81955 9.9252 3.05383 9.76863 3.31168 9.6618C3.56953 9.55498 3.8459 9.5 4.125 9.5H6.875C7.019 9.5 7.16 9.5145 7.2955 9.5415C6.98411 9.88905 6.75464 10.302 6.624 10.75H4.125C3.89294 10.75 3.67038 10.8422 3.50628 11.0063C3.34219 11.1704 3.25 11.3929 3.25 11.625V16.5C3.25 17.0967 3.48705 17.669 3.90901 18.091C4.33097 18.5129 4.90326 18.75 5.5 18.75ZM18.5 20C17.9257 20.0009 17.3601 19.8599 16.8535 19.5895C17.0505 19.2205 17.207 18.827 17.3165 18.414C17.6573 18.6248 18.0483 18.7407 18.449 18.7498C18.8497 18.7589 19.2455 18.6608 19.5955 18.4657C19.9456 18.2705 20.2372 17.9854 20.4401 17.6399C20.6431 17.2943 20.7501 16.9008 20.75 16.5V11.625C20.75 11.3929 20.6578 11.1704 20.4937 11.0063C20.3296 10.8422 20.1071 10.75 19.875 10.75H17.376C17.2452 10.302 17.0156 9.889 16.704 9.5415C16.8405 9.5145 16.981 9.5 17.125 9.5H19.875C20.4386 9.5 20.9791 9.72388 21.3776 10.1224C21.7761 10.5209 22 11.0614 22 11.625V16.5C22 17.4283 21.6313 18.3185 20.9749 18.9749C20.3185 19.6313 19.4283 20 18.5 20Z"
              fill="#A0A1A5"
            />
          </svg>
        ),
      },
      {
        name: "Purchase Order",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M15 7H9M15 11H9M15 15H11M5 3H19V21L17.968 20.116C17.6055 19.8053 17.1439 19.6346 16.6665 19.6346C16.1891 19.6346 15.7275 19.8053 15.365 20.116L14.333 21L13.302 20.116C12.9395 19.8051 12.4776 19.6342 12 19.6342C11.5224 19.6342 11.0605 19.8051 10.698 20.116L9.667 21L8.635 20.116C8.27253 19.8053 7.81088 19.6346 7.3335 19.6346C6.85611 19.6346 6.39447 19.8053 6.032 20.116L5 21V3Z"
              stroke="#A0A1A5"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        ),
      },

      {
        name: "Settings",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
              stroke="#A0A1A5"
              stroke-width="1.5"
            />
            <path
              d="M13.765 2.152C13.398 2 12.932 2 12 2C11.068 2 10.602 2 10.235 2.152C9.99214 2.25251 9.77151 2.3999 9.58569 2.58572C9.39986 2.77155 9.25248 2.99218 9.15196 3.235C9.05996 3.458 9.02296 3.719 9.00896 4.098C9.00273 4.37199 8.92696 4.6399 8.78877 4.87657C8.65059 5.11324 8.45451 5.31091 8.21896 5.451C7.97986 5.58504 7.71061 5.6561 7.4365 5.6575C7.16239 5.6589 6.89242 5.59059 6.65196 5.459C6.31596 5.281 6.07296 5.183 5.83196 5.151C5.30628 5.08187 4.77466 5.22431 4.35396 5.547C4.03996 5.79 3.80596 6.193 3.33996 7C2.87396 7.807 2.63996 8.21 2.58896 8.605C2.5546 8.86545 2.57188 9.13012 2.63983 9.38389C2.70778 9.63767 2.82505 9.87556 2.98496 10.084C3.13296 10.276 3.33996 10.437 3.66096 10.639C4.13396 10.936 4.43796 11.442 4.43796 12C4.43796 12.558 4.13396 13.064 3.66096 13.36C3.33996 13.563 3.13196 13.724 2.98496 13.916C2.82505 14.1244 2.70778 14.3623 2.63983 14.6161C2.57188 14.8699 2.5546 15.1345 2.58896 15.395C2.64096 15.789 2.87396 16.193 3.33896 17C3.80596 17.807 4.03896 18.21 4.35396 18.453C4.5624 18.6129 4.8003 18.7302 5.05407 18.7981C5.30784 18.8661 5.57251 18.8834 5.83296 18.849C6.07296 18.817 6.31596 18.719 6.65196 18.541C6.89242 18.4094 7.16239 18.3411 7.4365 18.3425C7.71061 18.3439 7.97986 18.415 8.21896 18.549C8.70196 18.829 8.98896 19.344 9.00896 19.902C9.02296 20.282 9.05896 20.542 9.15196 20.765C9.25248 21.0078 9.39986 21.2284 9.58569 21.4143C9.77151 21.6001 9.99214 21.7475 10.235 21.848C10.602 22 11.068 22 12 22C12.932 22 13.398 22 13.765 21.848C14.0078 21.7475 14.2284 21.6001 14.4142 21.4143C14.6001 21.2284 14.7474 21.0078 14.848 20.765C14.94 20.542 14.977 20.282 14.991 19.902C15.011 19.344 15.298 18.828 15.781 18.549C16.0201 18.415 16.2893 18.3439 16.5634 18.3425C16.8375 18.3411 17.1075 18.4094 17.348 18.541C17.684 18.719 17.927 18.817 18.167 18.849C18.4274 18.8834 18.6921 18.8661 18.9459 18.7981C19.1996 18.7302 19.4375 18.6129 19.646 18.453C19.961 18.211 20.194 17.807 20.66 17C21.126 16.193 21.36 15.79 21.411 15.395C21.4453 15.1345 21.428 14.8699 21.3601 14.6161C21.2921 14.3623 21.1749 14.1244 21.015 13.916C20.867 13.724 20.66 13.563 20.339 13.361C20.1047 13.2186 19.9105 13.019 19.7746 12.7809C19.6386 12.5428 19.5655 12.2741 19.562 12C19.562 11.442 19.866 10.936 20.339 10.64C20.66 10.437 20.868 10.276 21.015 10.084C21.1749 9.87556 21.2921 9.63767 21.3601 9.38389C21.428 9.13012 21.4453 8.86545 21.411 8.605C21.359 8.211 21.126 7.807 20.661 7C20.194 6.193 19.961 5.79 19.646 5.547C19.4375 5.38709 19.1996 5.26981 18.9459 5.20187C18.6921 5.13392 18.4274 5.11664 18.167 5.151C17.927 5.183 17.684 5.281 17.347 5.459C17.1066 5.59042 16.8368 5.65862 16.5629 5.65722C16.289 5.65582 16.0199 5.58486 15.781 5.451C15.5454 5.31091 15.3493 5.11324 15.2112 4.87657C15.073 4.6399 14.9972 4.37199 14.991 4.098C14.977 3.718 14.941 3.458 14.848 3.235C14.7474 2.99218 14.6001 2.77155 14.4142 2.58572C14.2284 2.3999 14.0078 2.25251 13.765 2.152Z"
              stroke="#A0A1A5"
              stroke-width="1.5"
            />
          </svg>
        ),
      },
    ],
  },
];

export const chatData = [
  {
    image: avatar2,
    message: "Roman Joined the Team!",
    desc: "Congratulate him",
    time: "9:08 AM",
  },
  {
    image: avatar3,
    message: "New message received",
    desc: "Salma sent you new message",
    time: "11:56 AM",
  },
  {
    image: avatar4,
    message: "New Payment received",
    desc: "Check your earnings",
    time: "4:39 AM",
  },
];

export const earningData = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="17"
        viewBox="0 0 16 17"
        fill="none"
      >
        <path
          d="M5.78125 10.0531C5.78125 10.9131 6.44125 11.6064 7.26125 11.6064H8.93458C9.64792 11.6064 10.2279 10.9997 10.2279 10.2531C10.2279 9.43973 9.87458 9.15307 9.34792 8.9664L6.66125 8.03307C6.13458 7.8464 5.78125 7.55973 5.78125 6.7464C5.78125 5.99973 6.36125 5.39307 7.07458 5.39307H8.74792C9.56792 5.39307 10.2279 6.0864 10.2279 6.9464"
          stroke="#FF7F50"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M8 4.5V12.5"
          stroke="#FF7F50"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M8.00016 15.1668C11.6821 15.1668 14.6668 12.1821 14.6668 8.50016C14.6668 4.81826 11.6821 1.8335 8.00016 1.8335C4.31826 1.8335 1.3335 4.81826 1.3335 8.50016C1.3335 12.1821 4.31826 15.1668 8.00016 15.1668Z"
          stroke="#FF7F50"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
    amount: "39,354",
    percentage: "-4%",
    title: "Sales",
    iconColor: "#03C9D7",
    iconBg: "#E5FAFB",
    pcColor: "red-600",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
      >
        <path
          d="M4.00008 14.0002C4.73646 14.0002 5.33341 13.4032 5.33341 12.6668C5.33341 11.9304 4.73646 11.3335 4.00008 11.3335C3.2637 11.3335 2.66675 11.9304 2.66675 12.6668C2.66675 13.4032 3.2637 14.0002 4.00008 14.0002Z"
          stroke="#FF7F50"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M11.3333 14.0002C12.0697 14.0002 12.6667 13.4032 12.6667 12.6668C12.6667 11.9304 12.0697 11.3335 11.3333 11.3335C10.597 11.3335 10 11.9304 10 12.6668C10 13.4032 10.597 14.0002 11.3333 14.0002Z"
          stroke="#FF7F50"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M11.3334 11.3333H4.00008V2H2.66675"
          stroke="#FF7F50"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M4 3.3335L13.3333 4.00016L12.6667 8.66683H4"
          stroke="#FF7F50"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
    amount: "4,396",
    percentage: "+23%",
    title: "Total Products",
    iconColor: "rgb(255, 244, 229)",
    iconBg: "rgb(254, 201, 15)",
    pcColor: "green-600",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="18"
        viewBox="0 0 20 18"
        fill="none"
      >
        <path
          d="M4.90905 1L0.54541 5.36364L4.90905 9.72728"
          stroke="#FF7F50"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M0.54541 5.36377H13.6363C15.1794 5.36377 16.6593 5.97675 17.7504 7.06788C18.8415 8.159 19.4545 9.63887 19.4545 11.182C19.4545 12.725 18.8415 14.2049 17.7504 15.296C16.6593 16.3871 15.1794 17.0001 13.6363 17.0001H6.36359"
          stroke="#FF7F50"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
    amount: "423,39",
    percentage: "+38%",
    title: "Returns",
    iconColor: "rgb(228, 106, 118)",
    iconBg: "rgb(255, 244, 229)",

    pcColor: "green-600",
  },
];

export const themeColors = [
  {
    name: "blue-theme",
    color: "#1A97F5",
  },

  {
    color: "#FB9678",
    name: "orange-theme",
  },
];

export const userProfileData = [
  {
    icon: <BsCurrencyDollar />,
    title: "My Profile",
    desc: "Account Settings",
    iconColor: "#03C9D7",
    iconBg: "#E5FAFB",
  },
];

export const customersData = [
  {
    CustomerID: 1001,
    CustomerName: "Nirav Joshi",
    CustomerEmail: "nirav@gmail.com",
    CustomerImage: avatar2,
    ProjectName: "Hosting Press HTML",
    Status: "Active",
    StatusBg: "#8BE78B",
    Weeks: "40",
    Budget: "$2.4k",
    Location: "India",
  },
  {
    CustomerID: 1002,

    CustomerName: "Sunil Joshi",
    CustomerEmail: "sunil@gmail.com",
    ProjectName: "Elite Admin",
    Status: "Active",
    CustomerImage: avatar3,

    StatusBg: "#8BE78B",
    Weeks: "11",
    Budget: "$3.9k",
    Location: "India",
  },
  {
    CustomerID: 1003,

    CustomerName: "Andrew McDownland",
    CustomerEmail: "andrew@gmail.com",
    ProjectName: "Real Homes WP Theme",
    Status: "Pending",
    CustomerImage: avatar4,
    StatusBg: "#FEC90F",
    Weeks: "19",
    Budget: "$24.5k",
    Location: "USA",
  },

  {
    CustomerID: 1005,

    CustomerName: "Michael",
    CustomerEmail: "michael@gmail.com",
    ProjectName: "Weekly WP Theme",
    Status: "Cancel",
    CustomerImage: avatar2,
    StatusBg: "red",
    Weeks: "34",
    Budget: "$16.5k",
    Location: "USA",
  },
  {
    CustomerID: 1006,
    CustomerName: "Nirav Joshi",
    CustomerEmail: "nirav@gmail.com",
    CustomerImage: avatar2,
    ProjectName: "Hosting Press HTML",
    Status: "Active",
    StatusBg: "#8BE78B",
    Weeks: "40",
    Budget: "$2.4k",
    Location: "India",
  },
  {
    CustomerID: 1007,

    CustomerName: "Sunil Joshi",
    CustomerEmail: "sunil@gmail.com",
    ProjectName: "Elite Admin",
    Status: "Active",
    CustomerImage: avatar3,

    StatusBg: "#8BE78B",
    Weeks: "11",
    Budget: "$3.9k",
    Location: "India",
  },
  {
    CustomerID: 1008,

    CustomerName: "Andrew McDownland",
    CustomerEmail: "andrew@gmail.com",
    ProjectName: "Real Homes WP Theme",
    Status: "Pending",
    CustomerImage: avatar4,
    StatusBg: "#FEC90F",
    Weeks: "19",
    Budget: "$24.5k",
    Location: "USA",
  },

  {
    CustomerID: 1033,

    CustomerName: "Andrew McDownland",
    CustomerEmail: "andrew@gmail.com",
    ProjectName: "Real Homes WP Theme",
    Status: "Pending",
    CustomerImage: avatar4,
    StatusBg: "#FEC90F",
    Weeks: "19",
    Budget: "$24.5k",
    Location: "USA",
  },

  {
    CustomerID: 1035,

    CustomerName: "Michael",
    CustomerEmail: "michael@gmail.com",
    ProjectName: "Weekly WP Theme",
    Status: "Cancel",
    CustomerImage: avatar2,
    StatusBg: "red",
    Weeks: "34",
    Budget: "$16.5k",
    Location: "USA",
  },
  {
    CustomerID: 1036,
    CustomerName: "Nirav Joshi",
    CustomerEmail: "nirav@gmail.com",
    CustomerImage: avatar2,
    ProjectName: "Hosting Press HTML",
    Status: "Active",
    StatusBg: "#8BE78B",
    Weeks: "40",
    Budget: "$2.4k",
    Location: "India",
  },
  {
    CustomerID: 1037,

    CustomerName: "Sunil Joshi",
    CustomerEmail: "sunil@gmail.com",
    ProjectName: "Elite Admin",
    Status: "Active",
    CustomerImage: avatar3,

    StatusBg: "#8BE78B",
    Weeks: "11",
    Budget: "$3.9k",
    Location: "India",
  },
  {
    CustomerID: 1038,

    CustomerName: "Andrew McDownland",
    CustomerEmail: "andrew@gmail.com",
    ProjectName: "Real Homes WP Theme",
    Status: "Pending",
    CustomerImage: avatar4,
    StatusBg: "#FEC90F",
    Weeks: "19",
    Budget: "$24.5k",
    Location: "USA",
  },

  {
    CustomerID: 1040,
    CustomerName: "Michael",
    CustomerEmail: "michael@gmail.com",
    ProjectName: "Weekly WP Theme",
    Status: "Cancel",
    CustomerImage: avatar2,
    StatusBg: "red",
    Weeks: "34",
    Budget: "$16.5k",
    Location: "USA",
  },
];

export const lineChartData = [
  [
    { x: new Date(2005, 0, 1), y: 21 },
    { x: new Date(2006, 0, 1), y: 24 },
    { x: new Date(2007, 0, 1), y: 36 },
    { x: new Date(2008, 0, 1), y: 38 },
    { x: new Date(2009, 0, 1), y: 54 },
    { x: new Date(2010, 0, 1), y: 57 },
    { x: new Date(2011, 0, 1), y: 70 },
  ],
  [
    { x: new Date(2005, 0, 1), y: 28 },
    { x: new Date(2006, 0, 1), y: 44 },
    { x: new Date(2007, 0, 1), y: 48 },
    { x: new Date(2008, 0, 1), y: 50 },
    { x: new Date(2009, 0, 1), y: 66 },
    { x: new Date(2010, 0, 1), y: 78 },
    { x: new Date(2011, 0, 1), y: 84 },
  ],

  [
    { x: new Date(2005, 0, 1), y: 10 },
    { x: new Date(2006, 0, 1), y: 20 },
    { x: new Date(2007, 0, 1), y: 30 },
    { x: new Date(2008, 0, 1), y: 39 },
    { x: new Date(2009, 0, 1), y: 50 },
    { x: new Date(2010, 0, 1), y: 70 },
    { x: new Date(2011, 0, 1), y: 100 },
  ],
];
export const dropdownData = [
  {
    Id: "1",
    Time: "March 2021",
  },
  {
    Id: "2",
    Time: "April 2021",
  },
  {
    Id: "3",
    Time: "May 2021",
  },
];

export const lineCustomSeries = [
  {
    dataSource: lineChartData[1],
    xName: "x",
    yName: "y",
    name: "Pak",
    width: "2",
    marker: { visible: true, width: 10, height: 10 },
    type: "Line",
  },
];

export const stackedChartData = [
  [
    { x: "Jan", y: 111.1 },
    { x: "Feb", y: 127.3 },
    { x: "Mar", y: 143.4 },
    { x: "Apr", y: 159.9 },
    { x: "May", y: 159.9 },
    { x: "Jun", y: 159.9 },
    { x: "July", y: 159.9 },
  ],
  [
    { x: "Jan", y: 111.1 },
    { x: "Feb", y: 127.3 },
    { x: "Mar", y: 143.4 },
    { x: "Apr", y: 159.9 },
    { x: "May", y: 159.9 },
    { x: "Jun", y: 159.9 },
    { x: "July", y: 159.9 },
  ],
];

export const stackedCustomSeries = [
  {
    dataSource: stackedChartData[0],
    xName: "x",
    yName: "y",
    name: "Budget",
    type: "StackingColumn",
    background: "orange",
  },
];

export const stackedPrimaryXAxis = {
  majorGridLines: { width: 0 },
  minorGridLines: { width: 0 },
  majorTickLines: { width: 0 },
  minorTickLines: { width: 0 },
  interval: 1,
  lineStyle: { width: 0 },
  labelIntersectAction: "Rotate70",
  valueType: "Category",
};

export const stackedPrimaryYAxis = {
  lineStyle: { width: 0 },
  minimum: 100,
  maximum: 400,
  interval: 100,
  majorTickLines: { width: 0 },
  majorGridLines: { width: 1 },
  minorGridLines: { width: 1 },
  minorTickLines: { width: 0 },
  labelFormat: "{value}",
};
