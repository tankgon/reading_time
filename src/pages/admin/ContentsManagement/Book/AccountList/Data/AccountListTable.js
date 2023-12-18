"use strict";

import "@ag-grid-community/styles/ag-grid.css";
import "@ag-grid-community/styles/ag-theme-alpine.css";
import { AgGridReact } from "ag-grid-react";
import React, { useCallback, useMemo, useRef, useState } from "react";

const isFirstColumn = (params) => {
  var displayedColumns = params.columnApi.getAllDisplayedColumns();
  var thisIsFirstColumn = displayedColumns[0] === params.column;
  return thisIsFirstColumn;
};

const AccountListTable = () => {
  const gridRef = useRef();
  const gridStyle = useMemo(() => ({ height: "300px", width: "100%" }), []);
  const [rowData, setRowData] = useState();
  const [columnDefs, setColumnDefs] = useState([
    { field: "No" },
    { field: "Book Title" },
    { field: "Subtitle" },
    { field: "Genre" },
    { field: "Grade" },
    { field: "Lexile" },
    { field: "Page" },
    { field: "registration date(Last modified date)" },
    { field: "Whether to use" },
    { field: "Edit" },
  ]);
  const defaultColDef = useMemo(() => {
    return {
      flex: 1,
      minWidth: 100,
      resizable: true,
    };
  }, []);

  const onGridReady = useCallback((params) => {
    const data = [
      {
        No: 1,
        Approval: "213",
        Role: "213",
        Country: "213",
        ID: "213",
        Name: "231",
        Email: "13",
        Registration: "",
        Management: "",
      },
      {
        No: 2,
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
        No: 3,
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
        No: 4,
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
        No: 5,
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
