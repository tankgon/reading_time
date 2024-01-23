"use strict";

import "@ag-grid-community/styles/ag-grid.css";
import "@ag-grid-community/styles/ag-theme-quartz.css";
import { AgGridReact } from "ag-grid-react";
import React, { useMemo, useRef, useState } from "react";
//data
import moment from "moment";
import data from ".";
const WithdrawnTable = () => {
  const { DatalistMenu: listMenu } = data();
  const gridRef = useRef();
  const gridStyle = useMemo(() => ({ height: "300px", width: "100%" }), []);

  const [columnDefs, setColumnDefs] = useState([
    {
      headerName: "ISSUE",
      field: "_id",
    },
    {
      field: "Teacher_Name",
      headerName: "Type",
      filter: "agTextColumnFilter",
    },
    { field: "Contract_Type", headerName: "Date" },
    { field: "Status", headerName: "Teacher" },
    { field: "Tag", headerName: "In Charge", filter: "agTextColumnFilter" },
    { field: "Country", headerName: "Process" },
  ]);

  const formatDate = (date) => {
    return moment(date).format("DD-MM-YYYY");
  };
  const defaultColDef = useMemo(() => {
    return {
      flex: 1,
      minWidth: 100,
      resizable: true,
    };
  }, []);

  return (
    <div style={gridStyle} className="ag-theme-quartz">
      <AgGridReact
        rowData={listMenu}
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

export default WithdrawnTable;
