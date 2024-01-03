"use strict";

import "@ag-grid-community/styles/ag-grid.css";
import "@ag-grid-community/styles/ag-theme-quartz.css";
import { AgGridReact } from "ag-grid-react";
import React, { useMemo, useState } from "react";
//data
import moment from "moment";
import data from "../Data";
const AccountListTable = ({ newRowData }) => {
  const { DatalistMenu: listMenu } = data();
  const gridStyle = useMemo(() => ({ height: "500px", width: "100%" }), []);
  const [columnDefs, setColumnDefs] = useState([
    {
      headerName: "No",
      field: "Id",
      maxWidth: 80,
    },
    {
      field: "_Status",
      headerName: "Status",
      filter: "agTextColumnFilter",
    },
    {
      field: "Country",
      headerName: "Country",
      filter: "agTextColumnFilter",
    },
    {
      field: "_Member",
      headerName: "English wing Member",
      filter: "agTextColumnFilter",
    },
    { field: "Email", headerName: "E-mail" },
    {
      field: "_User_Name",
      headerName: "User Name (English Name)",
      filter: "agTextColumnFilter",
    },
    {
      field: "Phone",
      headerName: "Mobile Phone",
      filter: "agNumberColumnFilter",
    },
    {
      field: "Registration_Date",
      headerName: "Registration Date",
      valueFormatter: (params) => formatDate(params.value),
      filter: "agDateColumnFilter",
      minWidth: 200,
    },
    {
      field: "Recent_Login",
      headerName: "Recent Login",
      valueFormatter: (params) => formatDate(params.value),
      filter: "agDateColumnFilter",
      minWidth: 200,
    },
    { headerName: "Edit" },
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
    <div className="example-wrapper">
      <div style={gridStyle} className="ag-theme-quartz">
        <AgGridReact
          rowData={newRowData.length != 0 ? newRowData : listMenu}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          suppressRowClickSelection={true}
          rowSelection={"multiple"}
          paginationAutoPageSize={true}
          pagination={true}
        />
      </div>
    </div>
  );
};

export default AccountListTable;
