"use strict";

import "@ag-grid-community/styles/ag-grid.css";
import "@ag-grid-community/styles/ag-theme-quartz.css";
import { AgGridReact } from "ag-grid-react";
import React, { useMemo, useRef, useState } from "react";
import BtnCellRenderer from "./BtnCellRenderer";
//data
import moment from "moment";
import data from "./index";
// DatalistRole

const AccountListTable = () => {
  const { DatalistRole: listRole } = data();

  const gridStyle = useMemo(() => ({ height: "500px", width: "100%" }), []);
  const [columnDefs, setColumnDefs] = useState([
    {
      headerName: "No",
      field: "Id",
      headerCheckboxSelection: true,
      checkboxSelection: true,
    },
    // { headerName: "Approval", field: "Approval" },
    { headerName: "Role", field: "Authority_Type" },
    { headerName: "Country", field: "Country" },
    { headerName: "ID", field: "_id" },
    { headerName: "Name", field: "_Name", filter: "agTextColumnFilter" },
    { headerName: "Email", field: "Email" },
    {
      headerName: "Registration",
      field: "Registration_Date",
      valueFormatter: (params) => formatDate(params.value),
    },
    {
      headerName: "Management",
      cellRenderer: BtnCellRenderer,
      cellRendererParams: (params) => {
        return {
          rowData: params.data,
        };
      },
    },
  ]);

  const formatDate = (date) => {
    return moment(date).format("YYYY-MM-DD");
  };

  const defaultColDef = useMemo(() => {
    return {
      flex: 1,
      minWidth: 100,
      resizable: true,
      floatingFilter: true,
    };
  }, []);
  // console.log(listRole);
  return (
    <div style={gridStyle} className="ag-theme-quartz">
      <AgGridReact
        rowDatas={listRole}
        columnDefs={columnDefs}
        defaultColDef={defaultColDef}
        suppressRowClickSelection={true}
        onCellClicked={(params) => {
          console.log(params.data);
        }}
        rowSelection={"multiple"}
        paginationAutoPageSize={true}
        pagination={true}
      />
    </div>
  );
};

export default AccountListTable;
