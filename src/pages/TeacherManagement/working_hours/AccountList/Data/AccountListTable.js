"use strict";

import "@ag-grid-community/styles/ag-grid.css";
import "@ag-grid-community/styles/ag-theme-alpine.css";
import { AgGridReact } from "ag-grid-react";
import React, { useCallback, useMemo, useRef, useState } from "react";
import BtnCellRenderer from "../components/BtnCellRenderer";
const isFirstColumn = (params) => {
  var displayedColumns = params.columnApi.getAllDisplayedColumns();
  var thisIsFirstColumn = displayedColumns[0] === params.column;
  return thisIsFirstColumn;
};

const AccountListTable = () => {
  const gridRef = useRef();
  const gridStyle = useMemo(() => ({ height: "140px", width: "100%" }), []);
  const [rowData, setRowData] = useState();
  const [columnDefs, setColumnDefs] = useState([
    { field: "No" },
    { field: "TEAM" },
    { field: "Teacher" },
    { field: "Teacher Nickname" },
    { field: "Sun" },
    { field: "Mon" },
    { field: "Tue" },
    { field: "Wed" },
    { field: "Thu" },
    { field: "Fri" },
    { field: "Sat" },
    {
      field: "Working Hours",
      cellRenderer: BtnCellRenderer,
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
      headerCheckboxSelection: isFirstColumn,
      checkboxSelection: isFirstColumn,
    };
  }, []);

  const onGridReady = useCallback((params) => {
    const data = [
      {
        No: 10,
        Approval: "",
        Role: "",
        Country: "",
        ID: "",
        Name: "",
        Email: "",
        Registration: "",
        Management: "",
      },
      {
        No: 10,
        Approval: "",
        Role: "",
        Country: "",
        ID: "",
        Name: "",
        Email: "",
        Registration: "",
        Management: "",
      },
    ];
    setRowData(data);
  }, []);

  const onQuickFilterChanged = useCallback(() => {
    gridRef.current.api.setQuickFilter(
      document.getElementById("quickFilter").value
    );
  }, []);

  return (
    <div className="example-wrapper">
      {/* <div style={{ marginBottom: "5px" }}>
        <input
          type="text"
          onInput={onQuickFilterChanged}
          id="quickFilter"
          placeholder="quick filter..."
        />
      </div> */}

      <div style={gridStyle} className="ag-theme-alpine">
        <AgGridReact
          ref={gridRef}
          rowData={rowData}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          suppressRowClickSelection={true}
          rowSelection={"multiple"}
          onGridReady={onGridReady}
        />
      </div>
    </div>
  );
};

export default AccountListTable;
