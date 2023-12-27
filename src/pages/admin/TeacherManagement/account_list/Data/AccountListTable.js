"use strict";

import "@ag-grid-community/styles/ag-grid.css";
import "@ag-grid-community/styles/ag-theme-alpine.css";
import { AgGridReact } from "ag-grid-react";
import React, { useMemo, useRef, useState } from "react";
//data
import moment from "moment";
import data from "../Data";

const AccountListTable = () => {
  const { DatalistMenu: listMenu } = data();
  const gridRef = useRef();
  const gridStyle = useMemo(() => ({ height: "500px", width: "100%" }), []);

  const [columnDefs, setColumnDefs] = useState([
    {
      headerName: "No",
      field: "Id",
      headerCheckboxSelection: true,
      checkboxSelection: true,
    },
    { field: "Teacher_Name", headerName: "TEAM (Leader)" },
    { field: "Contract_Type", headerName: "Contract Type" },
    { field: "Status", headerName: "Status" },
    { field: "Tag", headerName: "TAG" },
    { field: "Country", headerName: "Country" },
    { field: "Email", headerName: "E-mail(Log-in)" },
    { field: "Nick_Name", headerName: "Full Name(Nickname)" },
    { field: "Phone", headerName: "Mobile Phone" },
    {
      headerName: "Start Date /Resignation Day",
      valueGetter: (params) => {
        return (
          formatDate(params.data.Start_Date) +
          " / " +
          formatDate(params.data.Start_Date)
        );
      },
    },
    {
      field: "Recent_Login",
      headerName: "Recent Login",
      valueFormatter: (params) => formatDate(params.value),
    },
    { field: "Point", headerName: "Point" },
    { field: "Penalty", headerName: "Penalty" },
    { headerName: "Edit" },
  ]);

  const formatDate = (date) => {
    return moment(date).format("DD-MM-YYYY");
  };
  const defaultColDef = useMemo(() => {
    return {
      flex: 1,
      minWidth: 150,
      resizable: true,
    };
  }, []);

  return (
    <div style={gridStyle} className="ag-theme-alpine">
      <AgGridReact
        rowData={listMenu}
        columnDefs={columnDefs}
        defaultColDef={defaultColDef}
        suppressRowClickSelection={true}
        rowSelection={"multiple"}
      />
    </div>
  );
};

export default AccountListTable;
