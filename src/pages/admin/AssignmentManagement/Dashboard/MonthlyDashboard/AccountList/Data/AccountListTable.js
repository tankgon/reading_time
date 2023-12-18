"use strict";

import "@ag-grid-community/styles/ag-grid.css";
import "@ag-grid-community/styles/ag-theme-alpine.css";
import { AgGridReact } from "ag-grid-react";
import React, { useCallback, useMemo, useRef, useState } from "react";
import "../Data/style.css";

const isFirstColumn = (params) => {
  var displayedColumns = params.columnApi.getAllDisplayedColumns();
  var thisIsFirstColumn = displayedColumns[0] === params.column;
  return thisIsFirstColumn;
};

const rowSpan = (params) => {
  var athlete = params.data ? params.data.athlete : undefined;
  if (athlete === "Aleksey Nemov") {
    // have all Russia age columns width 2
    return 2;
  } else if (athlete === "Ryan Lochte") {
    // have all United States column width 4
    return 4;
  } else {
    // all other rows should be just normal
    return 1;
  }
};
const MonthlyDashboard = () => {
  const gridRef = useRef();
  const gridStyle = useMemo(() => ({ height: "500px", width: "100%" }), []);
  const [rowData, setRowData] = useState();
  const [columnDefs, setColumnDefs] = useState([
    // {
    //   field: "athlete",
    //   rowSpan: rowSpan,
    //   cellClassRules: {
    //     "cell-span": "value==='Aleksey Nemov' || value==='Ryan Lochte'",
    //   },
    //   width: 200,
    // },
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

  // set background colour on every row, this is probably bad, should be using CSS classes
  const rowStyle = { background: "#EDEDED" };

  // set background colour on even rows again, this looks bad, should be using CSS classes
  const getRowStyle = (params) => {
    if (params.node.rowIndex % 2 === 0) {
      return { background: "#D6DCE5" };
    }
  };

  const onGridReady = useCallback((params) => {
    const data = [
      {
        No: 10,
        athlete: "Aleksey Nemov",
        Role: "",
        Country: "",
        1: "0",
        Name: "",
        Email: "",
        Registration: "",
        Management: "",
      },
      {
        No: 10,
        athlete: "Aleksey Nemov",
        Role: "",
        Country: "",
        1: "0",
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
        1: "0",
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
        1: "0",
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
        1: "0",
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
        1: "0",
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
        1: "0",
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
        1: "0",
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
      {
        No: 10,
        Approval: "",
        Role: "",
        Country: "",
        ID: "",
        1: "5",
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
          rowStyle={rowStyle}
          getRowStyle={getRowStyle}
        />
      </div>
    </div>
  );
};

export default MonthlyDashboard;
