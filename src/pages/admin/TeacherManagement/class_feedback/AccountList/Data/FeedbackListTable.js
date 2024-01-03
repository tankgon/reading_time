"use strict";

import "@ag-grid-community/styles/ag-grid.css";
import "@ag-grid-community/styles/ag-theme-quartz.css";
import { AgGridReact } from "ag-grid-react";
import React, { useMemo, useState } from "react";
import "../Data/style.css";

//data
import moment from "moment";
import data from "../Data";

const FeedbackListTable = () => {
  const { DatalistMenu: listMenu } = data();
  const containerStyle = useMemo(() => ({ width: "100%", height: "500px" }));
  const gridStyle = useMemo(() => ({ height: "500px", width: "100%" }), []);

  const [columnDefs, setColumnDefs] = useState([
    {
      headerName: "Team",
      field: "Team",
      width: 150,
    },
    {
      headerName: "Teacher",
      field: "Teacher",
      width: 200,
    },
    {
      headerName: "Paper No",
      field: "Paper_No",
      width: 150,
    },
    {
      headerName: "Request Class",
      headerClass: "resizable-header",
      children: [
        {
          headerName: "Date",
          headerClass: "resizable-header",
          field: "Date",
          width: 150,
        },
        {
          headerName: "Video",
          headerClass: "resizable-header",
          field: "Video",
          width: 150,
        },
      ],
    },
    {
      headerName: "Check the details",
      headerClass: "fixed-size-header",
      children: [
        {
          headerName: "Tl Feedback",
          width: 150,
          headerClass: "fixed-size-header",
          field: "Tl_Feedback",
        },
        {
          headerName: "Score",
          width: 150,
          headerClass: "fixed-size-header",
          field: "Score",
        },
        {
          headerName: "Teacher Comment",
          width: 150,
          headerClass: "fixed-size-header",
          field: "Teacher_Comment",
        },
      ],
    },
    {
      headerName: "Status",
      field: "_Status",
      headerClass: "fixed-size-header",
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
    };
  }, []);

  return (
    <div style={containerStyle}>
      <div style={gridStyle} className={"ag-theme-quartz"}>
        <AgGridReact
          rowData={listMenu}
          columnDefs={columnDefs}
          paginationAutoPageSize={true}
          pagination={true}
          defaultColDef={defaultColDef}
          onRowClicked={(params) => {
            console.log(params);
          }}
        />
      </div>
    </div>
  );
};

export default FeedbackListTable;
