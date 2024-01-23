"use strict";

import "@ag-grid-community/styles/ag-grid.css";
import "@ag-grid-community/styles/ag-theme-quartz.css";
import { AgGridReact } from "ag-grid-react";
import React, { useCallback, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
const isFirstColumn = (params) => {
  var displayedColumns = params.columnApi.getAllDisplayedColumns();
  var thisIsFirstColumn = displayedColumns[0] == params.column;
  return thisIsFirstColumn;
};

const AccountListTable = () => {
  const gridRef = useRef();
  const gridStyle = useMemo(() => ({ height: "140px", width: "100%" }), []);
  const [rowData, setRowData] = useState();
  const [columnDefs, setColumnDefs] = useState([
    { field: "No" },
    { field: "Time" },
    { field: "Student(E-mail)" },
    { field: "Product" },
    { field: "Curriculum" },
    { field: "Book" },
    { field: "File" },
    { field: "Count/Total" },
    { field: "Class per week(Day)" },
    { field: "Status" },
    { field: "Teacher(E-mail)" },
    { field: "Substitute" },
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

  const onRowClicked = (event) => {
    console.log(event.data);
  };

  const onGridReady = useCallback((params) => {
    const data = [
      {
        No: 10,
        Bill: "213213",
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
        Bill: <Link>sdfasdfas</Link>,
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

      <div style={gridStyle} className="ag-theme-quartz">
        <AgGridReact
          onRowClicked={onRowClicked}
          onCellClicked={(uw) => console.log(uw.data)}
          ref={gridRef}
          rowData={rowData}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          suppressRowClickSelection={true}
          rowSelection={"multiple"}
          paginationAutoPageSize={true}
          pagination={true}
        />
      </div>
    </div>
  );
};

export default AccountListTable;
