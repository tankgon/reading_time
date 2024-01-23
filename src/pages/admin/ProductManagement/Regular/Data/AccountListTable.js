"use strict";

import "@ag-grid-community/styles/ag-grid.css";
import "@ag-grid-community/styles/ag-theme-quartz.css";
import { AgGridReact } from "ag-grid-react";
import React, { useMemo, useState } from "react";
import LinkContact from "../components/LinkContact";
//data
import moment from "moment";
import data from "./index";

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
      field: "Country_Name",
      headerName: "Country",
      filter: "agTextColumnFilter",
    },
    { field: "Currency", headerName: "Currency", filter: "agTextColumnFilter" },
    { field: "Price", headerName: "Price" },
    {
      field: "Class_Days",
      headerName: "Class Days(Total)",
      valueFormatter: (params) => params.value * 4,
    },
    {
      field: "Class_Week",
      headerName: "Class Days(Per Week)",
      valueFormatter: () => 4,
    },
    {
      field: "Registration_Date",
      headerName: "Registration date",
      valueFormatter: (params) => formatDate(params.value),
    },
    // {
    //   field: "Whether_To_Use",
    //   headerName: "Whether to use",
    //   filter: "agTextColumnFilter",
    // },
    {
      field: "Registration_Date",
      headerName: "Expiration date",
      valueFormatter: (params) => formatDateAddMonth(params.value),
    },
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

  const formatDateAddMonth = (date) => {
    const newDate = moment(date).add(1, 'months');
    return newDate.format("DD-MM-YYYY");
  };

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
