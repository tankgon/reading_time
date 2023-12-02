"use strict";

import "@ag-grid-community/styles/ag-grid.css";
import "@ag-grid-community/styles/ag-theme-alpine.css";
import { AgGridReact } from "ag-grid-react";
import React, { useCallback, useMemo, useState } from "react";
// import React, { Component } from 'react';

import CheckBoxRenderer from "./CheckBoxRenderer";

const createRowData = () => {
  var data = [];
  for (var i = 0; i < 20; i++) {
    data.push({
      height: Math.floor(Math.random() * 100),
      width: Math.floor(Math.random() * 100),
      depth: Math.floor(Math.random() * 100),
    });
  }
  return data;
};

function MenuPermissionTable() {
  const gridStyle = useMemo(() => ({ height: "100%", width: "100%" }), []);
  const defaultColDef = useMemo(() => {
    return {
      flex: 1,
      minWidth: 50,
      filter: true,
    };
  }, []);
  const [rowData, setRowData] = useState(createRowData());

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
      field: "Apply",
      cellRenderer: CheckBoxRenderer,
      cellRendererParams: {
        clicked: function (field) {
          alert(`${field} was clicked`);
        },
      },
      minWidth: 100,
    },
  ]);

  const onGridReady = useCallback((params) => {
    var cols = params.columnApi.getColumns();
    cols.forEach(function (col) {
      var colDef = col.getColDef();
      console.log(
        colDef.headerName + ", Column ID = " + col.getId(),
        JSON.stringify(colDef)
      );
    });
  }, []);

  return (
    <div className="ag-theme-alpine" style={{ height: "500px", width: "100%" }}>
      <div style={gridStyle} className="ag-theme-alpine">
        <AgGridReact
          rowData={rowData}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          onGridReady={onGridReady}
        />
      </div>
    </div>
  );
}

export default MenuPermissionTable;
