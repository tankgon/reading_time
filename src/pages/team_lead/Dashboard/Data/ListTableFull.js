"use strict";

import "@ag-grid-community/styles/ag-grid.css";
import "@ag-grid-community/styles/ag-theme-quartz.css";
import { AgGridReact } from "ag-grid-react";
import React, { useMemo, useRef, useState } from "react";
//data
import moment from "moment";
import data from ".";
const AccountListTable = () => {
  const { DatalistMenu: listMenu } = data();
  const gridRef = useRef();
  const gridStyle = useMemo(() => ({ height: "330px", width: "100%" }), []);

  const [columnDefs, setColumnDefs] = useState([
    {
      headerName: "No",
      field: "_id",
    },
    {
      field: "Teacher_Name",
      headerName: "Time",
      filter: "agTextColumnFilter",
    },
    { field: "Contract_Type", headerName: "Student(E-mail)" },
    { field: "Status", headerName: "Product" },
    { field: "Tag", headerName: "Book" },
    { field: "Country", headerName: "Material" },
    { field: "Country", headerName: "Count/Total" },
    { field: "Country", headerName: "Status" },
    { field: "Country", headerName: "Substitute" },
  ]);

  const defaultColDef = useMemo(() => {
    return {
      flex: 1,
      minWidth: 150,
      resizable: true,
    };
  }, []);

  return (
    <div style={gridStyle} className="ag-theme-quartz">
      <AgGridReact
        rowData={listMenu}
        columnDefs={columnDefs}
        defaultColDef={defaultColDef}
        suppressRowClickSelection={true}
        rowSelection={"multiple"}
        paginationAutoPageSize={true}
        pagination={true}
      />
    </div>
  );
};

export default AccountListTable;
