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
  const gridStyle = useMemo(() => ({ height: "500px", width: "100%" }), []);

  const [columnDefs, setColumnDefs] = useState([
    {
      headerName: "No",
      field: "Id",
      headerCheckboxSelection: true,
      checkboxSelection: true,
    },
    {
      field: "Teacher_Name",
      headerName: "TEAM (Leader)",
      filter: "agTextColumnFilter",
    },
    { field: "Contract_Type", headerName: "Contract Type" },
    { field: "Status", headerName: "Status" },
    { field: "Tag", headerName: "TAG", filter: "agTextColumnFilter" },
    { field: "Country", headerName: "Country" },
    { field: "Email", headerName: "E-mail(Log-in)" },
    { field: "Nick_Name", headerName: "Full Name(Nickname)" },
    {
      field: "Phone",
      headerName: "Mobile Phone",
      filter: "agNumberColumnFilter",
    },
    {
      headerName: "Start Date /Resignation Day",
      valueGetter: (params) => {
        return (
          formatDate(params.data.Start_Date) +
          " / " +
          formatDate(params.data.Start_Date)
        );
      },
      filter: "agDateColumnFilter",
      minWidth: 200,
    },
    {
      field: "Recent_Login",
      headerName: "Recent Login",
      valueFormatter: (params) => formatDate(params.value),
      filter: "agDateColumnFilter",
      minWidth: 200,
    },
    { field: "Point", headerName: "Point", filter: "agNumberColumnFilter" },
    { field: "Penalty", headerName: "Penalty", filter: "agNumberColumnFilter" },
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
      floatingFilter: true,
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
