"use strict";

import "@ag-grid-community/styles/ag-grid.css";
import "@ag-grid-community/styles/ag-theme-quartz.css";
import { AgGridReact } from "ag-grid-react";
import React, { useMemo, useState } from "react";

import BtnCellRenderer from "../components/BtnCellRenderer";
//data
import moment from "moment";
import data from "../Data";

const AccountListTable = ({ newRowData }) => {
  const { DatalistMenu: listMenu } = data();

  console.log(newRowData);

  const gridStyle = useMemo(() => ({ height: "500px", width: "100%" }), []);
  const [rowData, setRowData] = useState();
  const [columnDefs, setColumnDefs] = useState([
    {
      headerName: "No",
      field: "Id",
      headerCheckboxSelection: true,
      checkboxSelection: true,
    },
    { field: "Team", headerName: "Team" },
    { field: "Teacher", headerName: "Teacher" },
    { field: "Teacher_NickName", headerName: "Teacher Nickname" },
    { field: "Sun", headerName: "Sun" },
    { field: "Mon", headerName: "Mon" },
    { field: "Tue", headerName: "Tue" },
    { field: "Wed", headerName: "Wed" },
    { field: "Thu", headerName: "Thu" },
    { field: "Fri", headerName: "Fri" },
    { field: "Sat", headerName: "Sat" },
    {
      headerName: "Working Hours",
      cellRenderer: BtnCellRenderer,
      cellRendererParams: {
        clicked: function (field) {
          alert(`${field} was clicked`);
        },
      },
      minWidth: 70,
    },
  ]);
  const formatDate = (date) => {
    return moment(date).format("DD-MM-YYYY");
  };
  const defaultColDef = useMemo(() => {
    return {
      flex: 1,
      minWidth: 80,
      resizable: true,
    };
  }, []);

  return (
    <div style={gridStyle} className="ag-theme-quartz">
      <AgGridReact
        rowData={newRowData.length != 0 ? newRowData : listMenu}
        columnDefs={columnDefs}
        defaultColDef={defaultColDef}
        suppressRowClickSelection={true}
        rowSelection={"multiple"}
      />
    </div>
  );
};

export default AccountListTable;
