"use strict";

import "@ag-grid-community/styles/ag-grid.css";
import "@ag-grid-community/styles/ag-theme-quartz.css";
import { AgGridReact } from "ag-grid-react";
import React, { useMemo, useState } from "react";
import DialogAssignmentRegular from "../../components/DialogAssignmentRegular";

//data
import moment from "moment";
// import data from "../Data";

const AssignmentRegularTableList = () => {
  const gridStyle = useMemo(() => ({ height: "500px", width: "100%" }), []);
  const [rowData, setRowData] = useState([1, 2]);
  const [columnDefs, setColumnDefs] = useState([
    { field: "No" },
    { field: "Student Name", filter: "agTextColumnFilter" },
    { field: "English Name" },
    { field: "Product Name", filter: "agTextColumnFilter" },
    { field: "Start" },
    { field: "End" },
    { field: "Class per week(Day)" },
    {
      field: "Class start date",
      valueFormatter: (params) => formatDate(params.value),
      filter: "agDateColumnFilter",
      minWidth: 200,
    },
    { field: "Count/Total" },
    {
      field: "",
      cellRenderer: DialogAssignmentRegular,
      cellRendererParams: {
        clicked: function (field) {
          alert(`${field} was clicked`);
        },
      },
      minWidth: 200,
    },
  ]);

  const formatDate = (date) => {
    return moment(date).format("DD-MM-YYYY");
  };
  const defaultColDef = useMemo(() => {
    return {
      flex: 1,
      minWidth: 100,
      resizable: true,
      floatingFilter: true,
    };
  }, []);

  const onRowClicked = (event) => {
    console.log(event.data);
  };

  return (
    <div style={gridStyle} className="ag-theme-quartz">
      <AgGridReact
        onRowClicked={onRowClicked}
        rowData={rowData}
        columnDefs={columnDefs}
        defaultColDef={defaultColDef}
        suppressRowClickSelection={true}
        rowSelection={"multiple"}
        paginationAutoPageSize={true}
        pagination={true}
      />
    </div>
  );
};

export default AssignmentRegularTableList;
