"use strict";

import "@ag-grid-community/styles/ag-grid.css";
import "@ag-grid-community/styles/ag-theme-quartz.css";
import { AgGridReact } from "ag-grid-react";
import React, { useMemo, useRef, useState } from "react";
import data from "../Data";
import LinkContact from "../components/LinkContact";

const AccountListTable = () => {
  const { DatalistMenu: listMenu } = data();
  const gridStyle = useMemo(() => ({ height: "500px", width: "100%" }), []);
  const gridRef = useRef();
  const [columnDefs, setColumnDefs] = useState([
    { field: "Id", headerName: "No" },
    { field: "Unique_No", headerName: "Unique No" },
    {
      field: "Curriculum_Title",
      headerName: "Curriculum Title",
      filter: "agTextColumnFilter",
    },
    { field: "Subtitle", headerName: "Subtitle", filter: "agTextColumnFilter" },
    { field: "Division", headerName: "Division", filter: "agTextColumnFilter" },
    {
      field: "Whether_To_Use",
      headerName: "Whether to use",
      filter: "agTextColumnFilter",
    },
    {
      headerName: "Edit",
      cellRenderer: LinkContact,
      cellRendererParams: {
        clicked: function (field) {
          alert(`${field} was clicked`);
        },
      },
      minWidth: 100,
    },
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
        id="myTable"
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
