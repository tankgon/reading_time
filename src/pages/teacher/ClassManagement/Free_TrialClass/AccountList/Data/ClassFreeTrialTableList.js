"use strict";

import "@ag-grid-community/styles/ag-grid.css";
import "@ag-grid-community/styles/ag-theme-quartz.css";
import { AgGridReact } from "ag-grid-react";
import React, { useMemo, useRef, useState } from "react";
//data
import moment from "moment";
// import data from "../Data";
const AssignmentFreeTrialTableList = () => {
  const gridRef = useRef();
  const gridStyle = useMemo(() => ({ height: "500px", width: "100%" }), []);
  const [columnDefs, setColumnDefs] = useState([
    { field: "No" },
    { field: "Student Name", filter: "agTextColumnFilter" },
    { field: "English Name" },
    { field: "Student Age" },
    { field: "Mobile Phone", filter: "agNumberColumnFilter" },
    { field: "Product Name", filter: "agTextColumnFilter" },
    { field: "Application date" },
    { field: "Team" },
    { field: "Teacher(E-mail)", filter: "agTextColumnFilter" },
    {
      field: "Class start date",
      valueFormatter: (params) => formatDate(params.value),
      filter: "agDateColumnFilter",
      minWidth: 200,
    },
    {
      field: "Class end date",
      valueFormatter: (params) => formatDate(params.value),
      filter: "agDateColumnFilter",
      minWidth: 200,
    },
    { field: "Evaluation" },
    { field: "Report" },
  ]);

  const formatDate = (date) => {
    return moment(date).format("DD-MM-YYYY");
  };
  const defaultColDef = useMemo(() => {
    return {
      flex: 1,
      minWidth: 150,
      resizable: true,
      floatingFilter: true,
    };
  }, []);

  return (
    <div style={gridStyle} className="ag-theme-quartz">
      <AgGridReact
        onCellClicked={(uw) => console.log(uw.data)}
        ref={gridRef}
        rowData={[]}
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

export default AssignmentFreeTrialTableList;
