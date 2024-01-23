"use strict";

import "@ag-grid-community/styles/ag-grid.css";
import "@ag-grid-community/styles/ag-theme-quartz.css";
import { AgGridReact } from "ag-grid-react";
import React, { useMemo, useState } from "react";
import BtnCellRenderer from "../components/BtnCellRenderer";
//data
import data from "./index";

const AccountListTable = () => {
  const { DatalistMenu: listMenu } = data();
  const gridStyle = useMemo(() => ({ height: "500px", width: "100%" }), []);
  const [columnDefs, setColumnDefs] = useState([
    { field: "Id", headerName: "No" },
    {
      field: "Book_Title",
      headerName: "Book Title",
      filter: "agTextColumnFilter",
    },
    { field: "Subtitle", headerName: "Subtitle", filter: "agTextColumnFilter" },
    { field: "Genre", headerName: "Genre", filter: "agTextColumnFilter" },
    { field: "Grade", headerName: "Grade", filter: "agTextColumnFilter" },
    { field: "Lexile", headerName: "Lexile", filter: "agTextColumnFilter" },
    { field: "Page", headerName: "Page", filter: "agTextColumnFilter" },
    {
      field: "Vocalbulary",
      headerName: "Vocabulary",
      filter: "agTextColumnFilter",
    },
    {
      field: "Registration_Date",
      headerName: "Registration date(Last modified date)",
      filter: "agTextColumnFilter",
    },
    {
      field: "Whether_To_Use",
      headerName: "Whether to use",
      filter: "agTextColumnFilter",
    },
    { headerName: "Edit", cellRenderer: BtnCellRenderer },
  ]);
  const defaultColDef = useMemo(() => {
    return {
      flex: 1,
      minWidth: 100,
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
        paginationAutoPageSize={true}
        pagination={true}
      />
    </div>
  );
};

export default AccountListTable;
