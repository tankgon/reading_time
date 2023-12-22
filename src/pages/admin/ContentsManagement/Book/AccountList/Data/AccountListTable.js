"use strict";

import "@ag-grid-community/styles/ag-grid.css";
import "@ag-grid-community/styles/ag-theme-alpine.css";
import { AgGridReact } from "ag-grid-react";
import React, { useMemo, useState } from "react";

//data
import data from "./index";

const AccountListTable = () => {
  const { DatalistMenu: listMenu } = data();
  const gridStyle = useMemo(() => ({ height: "300px", width: "100%" }), []);
  const [columnDefs, setColumnDefs] = useState([
    { field: "Id", headerName: "No" },
    { field: "Book_Title", headerName: "Book Title" },
    { field: "Subtitle", headerName: "Subtitle" },
    { field: "Genre", headerName: "Genre" },
    { field: "Grade", headerName: "Grade" },
    { field: "Lexile", headerName: "Lexile" },
    { field: "_Page", headerName: "Page" },
    { field: "Vocabulary", headerName: "Vocabulary" },
    {
      field: "Registration_Date",
      headerName: "Registration date(Last modified date)",
    },
    { field: "Whether_To_Use", headerName: "Whether to use" },
    { field: "Edit", headerName: "Edit" },
  ]);
  const defaultColDef = useMemo(() => {
    return {
      flex: 1,
      resizable: true,
    };
  }, []);

  return (
    <div style={gridStyle} className="ag-theme-alpine">
      <AgGridReact
        rowData={listMenu}
        columnDefs={columnDefs}
        defaultColDef={defaultColDef}
      />
    </div>
  );
};

export default AccountListTable;
