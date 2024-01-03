"use strict";

import "@ag-grid-community/styles/ag-grid.css";
import "@ag-grid-community/styles/ag-theme-quartz.css";
import { AgGridReact } from "ag-grid-react";
import React, { useMemo, useRef, useState } from "react";
import DialogAssignmentFreeTrial from "../../components/DialogAssignmentFreeTrial";
//data
import moment from "moment";
// import data from "../Data";
const AssignmentFreeTrialTableList = () => {
  const gridRef = useRef();
  const gridStyle = useMemo(() => ({ height: "500px", width: "100%" }), []);
  const [rowData, setRowData] = useState();
  const [columnDefs, setColumnDefs] = useState([
    { field: "No", minWidth: 80 },
    { field: "Student Name", filter: "agTextColumnFilter" },
    { field: "English Name" },
    { field: "Student Age" },
    { field: "Mobile Phone", filter: "agNumberColumnFilter" },
    { field: "Product Name", filter: "agTextColumnFilter" },
    {
      field: "Application date",
      valueFormatter: (params) => formatDate(params.value),
      filter: "agDateColumnFilter",
      minWidth: 200,
    },
    { field: "Teacher" },
    {
      field: "Class start date",
      valueFormatter: (params) => formatDate(params.value),
      filter: "agDateColumnFilter",
      minWidth: 200,
    },
    {
      field: "Assignment",
      filter: "agTextColumnFilter",
      cellRenderer: DialogAssignmentFreeTrial,
      cellRendererParams: {
        clicked: function (field) {
          alert(`${field} was clicked`);
        },
      },
      // minWidth: 200,
    },
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
        rowData={[1, 2]}
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
