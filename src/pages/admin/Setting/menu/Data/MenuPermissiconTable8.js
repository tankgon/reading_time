"use strict";

import "@ag-grid-community/styles/ag-grid.css";
import "@ag-grid-community/styles/ag-theme-quartz.css";
import { AgGridReact } from "ag-grid-react";
import React, { useMemo, useState } from "react";
// import React, { Component } from 'react';

//data
import data from "./index";

function MenuPermissionTable() {
  const { DatalistMenu: listMenu } = data();
  const gridStyle = useMemo(() => ({ height: "100%", width: "100%" }), []);
  const defaultColDef = useMemo(() => {
    return {
      flex: 1,
      minWidth: 50,
      filter: true,
    };
  }, []);

  const [columnDefs, setColumnDefs] = useState([
    {
      field: "Role",
      maxWidth: 150,
    },
    {
      field: "Slug",
      minWidth: 100,
    },
    {
      field: "_Apply",
      headerName: "Apply",
      minWidth: 100,
    },
  ]);

  return (
    <div className="ag-theme-quartz" style={{ height: "500px", width: "100%" }}>
      <div style={gridStyle} className="ag-theme-quartz">
        <AgGridReact
          rowData={listMenu}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
        />
      </div>
    </div>
  );
}

export default MenuPermissionTable;
