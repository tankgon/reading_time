"use strict";

import "@ag-grid-community/styles/ag-grid.css";
import "@ag-grid-community/styles/ag-theme-quartz.css";
import { AgGridReact } from "ag-grid-react";
import React, { useCallback, useMemo, useState } from "react";
import "../Data/style.css";
var colSpan = function (params) {
  return params.data === 2 ? 3 : 1;
};

const fillAllCellsWithWidthMeasurement = () => {
  Array.prototype.slice
    .call(document.querySelectorAll(".ag-cell"))
    .forEach((cell) => {
      var width = cell.offsetWidth;
      var isFullWidthRow = cell.parentElement.childNodes.length === 1;
      cell.textContent = (isFullWidthRow ? "Total width: " : "") + width + "px";
    });
};

const FeedbackListTable = () => {
  const containerStyle = useMemo(
    () => ({ width: "100%", height: "500px" }),
    []
  );
  const gridStyle = useMemo(() => ({ height: "500px", width: "100%" }), []);
  const [rowData, setRowData] = useState([1, 2]);
  const [columnDefs, setColumnDefs] = useState([
    {
      headerName: "Team",
      field: "author",
      width: 200,
      colSpan: colSpan,
    },
    {
      headerName: "Teacher",
      field: "author",
      width: 200,
      colSpan: colSpan,
    },
    {
      headerName: "Paper No",
      field: "author",
      width: 200,
      colSpan: colSpan,
    },
    {
      headerName: "Request Class",
      headerClass: "resizable-header",
      children: [
        {
          headerName: "Date",
          minWidth: 200,
          maxWidth: 350,
          flex: 2,
          headerClass: "resizable-header",
        },
        {
          headerName: "Video",
          flex: 1,
          headerClass: "resizable-header",
        },
      ],
    },
    {
      headerName: "Check the details",
      headerClass: "fixed-size-header",
      children: [
        {
          headerName: "Tl Feedback",
          minWidth: 200,
          maxWidth: 350,
          flex: 2,
          headerClass: "fixed-size-header",
        },
        {
          headerName: "Score",
          flex: 1,
          headerClass: "fixed-size-header",
        },
        {
          headerName: "Teacher Comment",
          flex: 1,
          headerClass: "fixed-size-header",
        },
      ],
    },
    {
      headerName: "Status",
      field: "author",
      width: 100,
      colSpan: colSpan,
      headerClass: "fixed-size-header",
    },
  ]);

  const onGridReady = useCallback((params) => {
    setInterval(fillAllCellsWithWidthMeasurement, 50);
  }, []);

  return (
    <div style={containerStyle}>
      <div style={gridStyle} className={"ag-theme-quartz"}>
        <AgGridReact
          rowData={rowData}
          columnDefs={columnDefs}
          onGridReady={onGridReady}
          onRowClicked={(params) => {
            console.log(params);
          }}
        />
      </div>
    </div>
  );
};

export default FeedbackListTable;
