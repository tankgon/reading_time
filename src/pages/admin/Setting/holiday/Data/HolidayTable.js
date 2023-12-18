"use strict";

import "@ag-grid-community/styles/ag-grid.css";
import "@ag-grid-community/styles/ag-theme-alpine.css";
import { AgGridReact } from "ag-grid-react";
import React, { useMemo, useState } from "react";

//data
import moment from "moment";
import data from "./index";

function GridExample() {
  const { DatalistHoliday: listHoliday } = data();
  console.log(listHoliday);
  const gridStyle = useMemo(() => ({ height: "100%", width: "100%" }), []);
  const defaultColDef = useMemo(() => {
    return {
      flex: 1,
      minWidth: 50,
      filter: true,
    };
  }, []);

  const [columnDefs, setColumnDefs] = useState([
    { headerName: "", field: "Id", width: 50 },
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
    { headerName: "", field: "data.width" },
  ]);

  const formatDate = (date) => {
    return moment(date).format("YYYY-MM-DD");
  };

  return (
    <div className="ag-theme-alpine" style={{ height: "500px", width: "100%" }}>
      <div style={gridStyle} className="ag-theme-alpine">
        <AgGridReact
          rowData={listHoliday}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
        />
      </div>
    </div>
  );
}

export default GridExample;
