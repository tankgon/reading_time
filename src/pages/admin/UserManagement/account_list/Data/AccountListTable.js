"use strict";

import "@ag-grid-community/styles/ag-grid.css";
import "@ag-grid-community/styles/ag-theme-quartz.css";
import { AgGridReact } from "ag-grid-react";
import React, { useMemo, useState } from "react";
//data
import moment from "moment";
import data from "../Data";
import BtnCellRenderer from "./BtnCellRenderer";
const AccountListTable = () => {
  const { DatalistMenu: listMenu } = data();
  const gridStyle = useMemo(() => ({ height: "500px", width: "100%" }), []);
  const [columnDefs, setColumnDefs] = useState([
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
      field: "User_English_Name",
      headerName: "English wing Member",
      filter: "agTextColumnFilter",
    },
    { field: "Email", headerName: "E-mail" },
    {
      field: "User_Name",
      headerName: "User Name (English Name)",
      filter: "agTextColumnFilter",
    },
    // {
    //   field: "Phone",
    //   headerName: "Mobile Phone",
    //   filter: "agNumberColumnFilter",
    // },
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
    {
      headerName: "Edit",
      cellRenderer: BtnCellRenderer,
    },
  ]);

  const formatDate = (date) => {
    return moment(date).format("DD/MM/YYYY");
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
          rowData={listMenu}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          suppressRowClickSelection={true}
          rowSelection={"multiple"}
          // onCellClicked={(params) => {
          //   console.log(params.data);
          //   Storage.setDATADETAIL(params.data);
          // }}
          paginationAutoPageSize={true}
          pagination={true}
        />
      </div>
    </div>
  );
};

export default AccountListTable;
