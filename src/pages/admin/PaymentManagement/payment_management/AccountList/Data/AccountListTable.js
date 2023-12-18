"use strict";

import "@ag-grid-community/styles/ag-grid.css";
import "@ag-grid-community/styles/ag-theme-alpine.css";
import { AgGridReact } from "ag-grid-react";
import React, { useCallback, useMemo, useRef, useState } from "react";
import LinkContact from "../components/ButtomContact";
const isFirstColumn = (params) => {
  var displayedColumns = params.columnApi.getAllDisplayedColumns();
  var thisIsFirstColumn = displayedColumns[0] === params.column;
  return thisIsFirstColumn;
};

const AccountListTable = () => {
  const gridRef = useRef();
  const [rowData, setRowData] = useState();
  const [columnDefs, setColumnDefs] = useState([
    { field: "No" },
    { field: "Bill" },
    { field: "Product Division" },
    { field: "Country" },
    { field: "Price (currency)" },
    { field: "Payment Method" },
    { field: "Payer" },
    { field: "Student Name (Email)" },
    { field: "PG ID (General)" },
    { field: "Billing Key (Subscription)" },
    { field: "Payment Date" },
    { field: "Status" },
    {
      field: "",
      cellRenderer: LinkContact,
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
      },
      {
        No: 10,
        Bill: "sdasd",
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

      <div className="ag-theme-alpine h-[20rem]">
        <AgGridReact
          onRowClicked={onRowClicked}
          // onCellClicked={(uw) => console.log(uw.data)}
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
