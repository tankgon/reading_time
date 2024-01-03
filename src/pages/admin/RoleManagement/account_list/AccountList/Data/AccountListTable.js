"use strict";

import "@ag-grid-community/styles/ag-grid.css";
import "@ag-grid-community/styles/ag-theme-quartz.css";
import { AgGridReact } from "ag-grid-react";
import React, { useMemo, useRef, useState } from "react";
//data
import moment from "moment";
import BtnCellRenderer from "./BtnCellRenderer";
import data from "./index";
// DatalistRole

const AccountListTable = ({ newRowData }) => {
  const { DatalistRole: datalistRole } = data();

  const gridRef = useRef();
  const gridStyle = useMemo(() => ({ height: "500px", width: "100%" }), []);
  const [columnDefs, setColumnDefs] = useState([
    {
      headerName: "No",
      field: "Id",
      headerCheckboxSelection: true,
      checkboxSelection: true,
    },
    { headerName: "Approval", field: "Approval" },
    { headerName: "Role", field: "_Role" },
    { headerName: "Country", field: "Country" },
    { headerName: "ID", field: "Id" },
    { headerName: "Name", field: "_Name" },
    { headerName: "Email", field: "Email" },
    {
      headerName: "Registration",
      field: "Registration_Date",
      valueFormatter: (params) => formatDate(params.value),
    },
    // {
    //   headerName: "Management",
    //   cellRenderer: BtnCellRenderer,
    //   cellRendererParams: (rowData) => {
    //     console.log(`Button clicked for row with ID: ${rowData.Id}`);
    //   },
    // },
  ]);

  const formatDate = (date) => {
    return moment(date).format("YYYY-MM-DD");
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
        ref={gridRef}
        rowData={newRowData.length != 0 ? newRowData : datalistRole}
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
