"use strict";

import "@ag-grid-community/styles/ag-grid.css";
import "@ag-grid-community/styles/ag-theme-alpine.css";
import { AgGridReact } from "ag-grid-react";
import React, { useMemo, useRef, useState } from "react";
import "./style.css";

const MonthlyDashboard = () => {
  const gridRef = useRef();
  const gridStyle = useMemo(() => ({ height: "500px", width: "100%" }), []);
  const [rowData, setRowData] = useState();
  const [columnDefs, setColumnDefs] = useState([
    { field: "Team", minWidth: 80, headerClass: "resizable-header" },
    { field: "Teacher", minWidth: 90, headerClass: "resizable-header" },
    { field: "1", headerClass: "resizable-header" },
    { field: "2", headerClass: "resizable-header" },
    { field: "3", headerClass: "resizable-header" },
    { field: "4", headerClass: "resizable-header" },
    { field: "5", headerClass: "resizable-header" },
    { field: "6", headerClass: "resizable-header" },
    { field: "7", headerClass: "resizable-header" },
    { field: "8", headerClass: "resizable-header" },
    { field: "9", headerClass: "resizable-header" },
    { field: "10", headerClass: "resizable-header" },
    { field: "11", headerClass: "resizable-header" },
    { field: "12", headerClass: "resizable-header" },
    { field: "13", headerClass: "resizable-header" },
    { field: "14", headerClass: "resizable-header" },
    { field: "15", headerClass: "resizable-header" },
    { field: "16", headerClass: "resizable-header" },
    { field: "17", headerClass: "resizable-header" },
    { field: "18", headerClass: "resizable-header" },
    { field: "19", headerClass: "resizable-header" },
    { field: "20", headerClass: "resizable-header" },
    { field: "21", headerClass: "resizable-header" },
    { field: "22", headerClass: "resizable-header" },
    { field: "23", headerClass: "resizable-header" },
    { field: "24", headerClass: "resizable-header" },
    { field: "25", headerClass: "resizable-header" },
    { field: "26", headerClass: "resizable-header" },
    { field: "27", headerClass: "resizable-header" },
    { field: "28", headerClass: "resizable-header" },
    { field: "29", headerClass: "resizable-header" },
    { field: "30", headerClass: "resizable-header" },
    { field: "31", headerClass: "resizable-header" },
  ]);
  const defaultColDef = useMemo(() => {
    return {
      flex: 1,
      minWidth: 80,
      resizable: true,
    };
  }, []);

  const rowStyle = { background: "#F5F5F5" };

  const getRowStyle = (params) => {
    if (params.node.rowIndex % 2 == 0) {
      return { background: "#fff" };
    }
  };

  return (
    <div className="example-wrapper">
      <div style={gridStyle} className="ag-theme-alpine">
        <AgGridReact
          ref={gridRef}
          rowData={rowData}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          suppressRowClickSelection={true}
          rowSelection={"multiple"}
          paginationAutoPageSize={true}
          pagination={true}
          rowStyle={rowStyle}
          getRowStyle={getRowStyle}
        />
      </div>
    </div>
  );
};

export default MonthlyDashboard;
