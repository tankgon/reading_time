"use strict";

import "@ag-grid-community/styles/ag-grid.css";
import "@ag-grid-community/styles/ag-theme-quartz.css";
import { AgGridReact } from "ag-grid-react";
import React, { useMemo, useRef, useState } from "react";
import DialogAssignmentFreeTrial from "../../components/DialogAssignmentFreeTrial";
import moment from "moment";
const AssignmentFreeTrialTableList = () => {
  const gridRef = useRef();
  const gridStyle = useMemo(() => ({ height: "500px", width: "100%" }), []);
  const [columnDefs, setColumnDefs] = useState([
    { field: "No", minWidth: 80 },
    {
      field: "Date",
      valueFormatter: (params) => formatDate(params.value),
      filter: "agDateColumnFilter",
      minWidth: 200,
    },
    { field: "Day of the week" },
    { field: "Time" },
    { field: "Product" },
    { field: "Count/Total" },
    { field: "Book Title" },
    { field: "Team", filter: "agTextColumnFilter" },
    { field: "Teacher(E-mail)", filter: "agTextColumnFilter" },
    { field: "Substitute teacher" },
    { field: "Student(E-mail)", filter: "agTextColumnFilter" },
    { field: "Class Status", filter: "agTextColumnFilter" },
    { field: "Details of Class Status" },
    { field: "Complaint", filter: "agTextColumnFilter" },
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

  const formatDate = (date) => {
    return moment(date).format("MM/DD/YYYY");
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
