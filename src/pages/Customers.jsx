// eslint-disable-next-line
import React from "react";
// eslint-disable-next-line
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Page,
  Selection,
  Inject,
  Edit,
  Toolbar,
  Sort,
  Filter,
  // eslint-disable-next-line
} from "@syncfusion/ej2-react-grids";
// eslint-disable-next-line
import { customersData, customersGrid } from "../data/dummy";
// eslint-disable-next-line
import { Header } from "../components";

const Customers = () => {
  const selectionsettings = { persistSelection: true };
  // eslint-disable-next-line
  const toolbarOptions = ["Delete"];
  const editing = { allowDeleting: true, allowEditing: true };

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Customers" />
      <GridComponent
        dataSource={customersData}
        enableHover={false}
        allowPaging
        pageSettings={{ pageCount: 5 }}
        selectionSettings={selectionsettings}
        toolbar={toolbarOptions}
        editSettings={editing}
        allowSorting
      >
        <ColumnsDirective>
          {customersGrid.map((item, index) => (
            // eslint-disable-next-line
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Page, Selection, Toolbar, Edit, Sort, Filter]} />
      </GridComponent>
    </div>
  );
};

export default Customers;
