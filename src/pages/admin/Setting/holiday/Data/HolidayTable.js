"use strict";

import "@ag-grid-community/styles/ag-grid.css";
import "@ag-grid-community/styles/ag-theme-quartz.css";
import { AgGridReact } from "ag-grid-react";
import React, { useMemo, useState } from "react";

//data
import moment from "moment";
import data from "./index";

function GridExample() {
  const { DatalistHoliday: listHoliday } = data();
  console.log(listHoliday);
  const gridStyle = useMemo(
    () => ({
      height: "100%",
      width: "100%",
      borderRadius: "80px", // Rounded corners for the container
    }),
    []
  );
  const defaultColDef = useMemo(() => {
    return {
      flex: 1,
      resizable: true,
    };
  }, []);

  const [columnDefs, setColumnDefs] = useState([
    { headerName: "", field: "Id", width: 850 },
    {
      headerName: "Name",
      field: "_Name",
    },
    {
      headerName: "Start Date",
      field: "_Start_Date",
      valueFormatter: (params) => formatDate(params.value),
    },
    {
      headerName: "End Date",
      field: "End_Date",
      valueFormatter: (params) => formatDate(params.value),
    },
    { headerName: "Annual Repeat", field: "Annual_Repeat" },
    { headerName: "Usage Status", field: "Usage_Status" },
    {
      headerName: "Registration Date",
      field: "Registration_Date",
      valueFormatter: (params) => formatDate(params.value),
    },
    // { headerName: "", field: "" },
  ]);

  const formatDate = (date) => {
    return moment(date).format("DD-MM-YYYY");
  };

  return (
    <div style={gridStyle} className="ag-theme-quartz">
      <AgGridReact
        rowData={listHoliday}
        columnDefs={columnDefs}
        defaultColDef={defaultColDef}
        getRowId={(value) => value.data.Id}
      />
    </div>
  );
}

export default GridExample;
