"use strict";
import "@ag-grid-community/styles/ag-grid.css";
import "@ag-grid-community/styles/ag-theme-alpine.css";
import Pagination from "@mui/material/Pagination";
import Box from "@mui/system/Box";
import { AgGridReact } from "ag-grid-react";
import React, { useCallback, useMemo, useRef, useState } from "react";

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
    {
      field: "No",
      headerCheckboxSelection: true,
      checkboxSelection: true,
      showDisabledCheckboxes: true,
    },
    { field: "Sort" },
    { field: "Class" },
    { field: "Details" },
    { field: "Attended" },
    { field: "Price" },
    { field: "Date" },
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
        Sort: "",
        Class: "",
        Details: "",
        Attended: "",
        Price: "",
        Date: "",
      },
      {
        No: 10,
        Sort: "",
        Class: "",
        Details: "",
        Attended: "",
        Price: "",
        Date: "",
      },
      {
        No: 10,
        Sort: "",
        Class: "",
        Details: "",
        Attended: "",
        Price: "",
        Date: "",
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

      <Box sx={{ marginTop: "20px" }}>
        <Pagination
          count={10}
          showFirstButton
          showLastButton
          sx={{ justifyContent: "center", display: "flex" }}
        />
      </Box>
    </div>
  );
};

export default AccountListTable;
