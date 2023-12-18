"use strict";

import "@ag-grid-community/styles/ag-grid.css";
import "@ag-grid-community/styles/ag-theme-alpine.css";
import { AgGridReact } from "ag-grid-react";
import React, { useCallback, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import DialogAssignmentFreeTrial from "../../components/DialogAssignmentFreeTrial";
const isFirstColumn = (params) => {
  var displayedColumns = params.columnApi.getAllDisplayedColumns();
  var thisIsFirstColumn = displayedColumns[0] === params.column;
  return thisIsFirstColumn;
};

const AssignmentFreeTrialTableList = () => {
  const gridRef = useRef();
  const gridStyle = useMemo(() => ({ height: "140px", width: "100%" }), []);
  const [rowData, setRowData] = useState();
  const [columnDefs, setColumnDefs] = useState([
    { field: "No" },
    { field: "Date" },
    { field: "Day of the week" },
    { field: "Time" },
    { field: "Product" },
    { field: "Count/Total" },
    { field: "Book Title" },
    { field: "Team" },
    { field: "Teacher(E-mail)" },
    { field: "Substitute teacher" },
    { field: "Student(E-mail)" },
    { field: "Class Status" },
    { field: "Details of Class Status" },
    { field: "Complaint" },
    {
      field: "Detail",
      cellRenderer: DialogAssignmentFreeTrial,
      cellRendererParams: {
        clicked: function (field) {
          alert(`${field} was clicked`);
        },
      },
      minWidth: 200,
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

      <div style={gridStyle} className="ag-theme-alpine">
        <AgGridReact
          onRowClicked={onRowClicked}
          onCellClicked={(uw) => console.log(uw.data)}
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

export default AssignmentFreeTrialTableList;
