"use strict";

import "@ag-grid-community/styles/ag-grid.css";
import "@ag-grid-community/styles/ag-theme-quartz.css";
import { AgGridReact } from "ag-grid-react";
import React, { useMemo, useState } from "react";
import LinkContact from "../components/LinkContact";
//data
import moment from "moment";
import data from "../Data";

const AccountListTable = () => {
  const { DatalistMenu: listMenu } = data();
  const gridStyle = useMemo(() => ({ height: "500px", width: "100%" }), []);
  const [columnDefs, setColumnDefs] = useState([
    { field: "Id", headerName: "No" },
    {
      field: "Product_Name",
      headerName: "Product Name",
      filter: "agTextColumnFilter",
    },
    { field: "Product_Division", headerName: "Product Division" },
    {
      field: "Country_Sale",
      headerName: "Country",
      filter: "agTextColumnFilter",
    },
    { field: "Currency", headerName: "Currency", filter: "agTextColumnFilter" },
    { field: "Price", headerName: "Price" },
    { field: "Class_Total", headerName: "Class Days(Total)" },
    { field: "Class_Week", headerName: "Class Days(Per Week)" },
    {
      field: "Registration_Date",
      headerName: "Registration date",
      valueFormatter: (params) => formatDate(params.value),
    },
    {
      field: "Whether_To_Use",
      headerName: "Whether to use",
      filter: "agTextColumnFilter",
    },
    { field: "Expiration_Date", headerName: "Expiration date" },
    {
      field: "Edit",
      cellRenderer: LinkContact,
      cellRendererParams: {
        clicked: function (field) {
          alert(`${field} was clicked`);
        },
      },
    },
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

export default AccountListTable;
