"use strict";

import "@ag-grid-community/styles/ag-grid.css";
import "@ag-grid-community/styles/ag-theme-quartz.css";
import { AgGridReact } from "ag-grid-react";
import React, { useMemo, useState } from "react";
import data from ".";
import BtnCellRenderer from "./BtnCellRenderer";
const AccountListTable = () => {
  const { DatalistMenu: listMenu } = data();
  const gridStyle = useMemo(() => ({ height: "500px", width: "100%" }), []);
  const [columnDefs, setColumnDefs] = useState([
    { field: "Id", headerName: "Paper No" },
    { field: "Name", headerName: "Name" },
    { field: "Part", headerName: "Type" },
    { field: "Submit_Date", headerName: "Submit Date" },
    { field: "Day", headerName: "Days" },
    { field: "Reasons", headerName: "Period" },

    {
      headerName: "Confirm",
      children: [
        {
          headerName: "Team Leader",
          field: "Tl_Confirm",
        },
        {
          field: "Director_Confirm",
          headerName: "Director",
        },
      ],
    },

    {
      field: "Contents",
      cellRenderer: BtnCellRenderer,
    },
  ]);

  const defaultColDef = useMemo(() => {
    return {
      flex: 1,
      minWidth: 100,
      resizable: true,
    };
  }, []);

  return (
    <div className="example-wrapper">
      <div style={gridStyle} className="ag-theme-quartz">
        <AgGridReact
          rowData={[1, 2]}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          suppressRowClickSelection={true}
          rowSelection={"multiple"}
          paginationAutoPageSize={true}
          pagination={true}
        />
      </div>
    </div>
  );
};

export default AccountListTable;
