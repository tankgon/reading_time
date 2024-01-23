"use strict";

import "@ag-grid-community/styles/ag-grid.css";
import "@ag-grid-community/styles/ag-theme-quartz.css";
import { AgGridReact } from "ag-grid-react";
import React, { useMemo, useRef, useState } from "react";
//data
import moment from "moment";
import data from "../Data";
const AccountListTable = () => {
  const { DatalistMenu: listMenu } = data();
  const gridRef = useRef();
  const gridStyle = useMemo(() => ({ height: "250px", width: "100%" }), []);

  const [columnDefs, setColumnDefs] = useState([
    {
      headerName: "ISSUE",
      field: "_id",
    },
    {
      field: "Teacher_Name",
      headerName: "Attitude",
      filter: "agTextColumnFilter",
    },
    { field: "Contract_Type", headerName: "Occurrence time" },
    { field: "Status", headerName: "TEACHER" },
    { field: "Tag", headerName: "writer", filter: "agTextColumnFilter" },
    { field: "Country", headerName: "situation" },
  ]);

  const formatDate = (date) => {
    return moment(date).format("DD-MM-YYYY");
  };
  const defaultColDef = useMemo(() => {
    return {
      flex: 1,
      minWidth: 100,
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
