"use strict";

import "@ag-grid-community/styles/ag-grid.css";
import "@ag-grid-community/styles/ag-theme-quartz.css";
import { AgGridReact } from "ag-grid-react";
import moment from "moment";
import React, { useMemo, useRef, useState } from "react";
import LinkContact from "../components/ButtomContact";
const AccountListTable = () => {
  const gridRef = useRef();
  const [columnDefs, setColumnDefs] = useState([
    { field: "No" },
    { field: "Bill" },
    { field: "Product Division" },
    { field: "Country", filter: "agTextColumnFilter" },
    { field: "Price (currency)", filter: "agTextColumnFilter" },
    { field: "Payment Method", filter: "agTextColumnFilter" },
    { field: "Payer" },
    { field: "Student Name (Email)", filter: "agTextColumnFilter" },
    { field: "PG ID (General)" },
    { field: "Billing Key (Subscription)" },
    {
      field: "Payment Date",
      valueFormatter: (params) => formatDate(params.value),
      filter: "agDateColumnFilter",
      minWidth: 200,
    },
    { field: "Status" },
    {
      field: "",
      cellRenderer: LinkContact,
      cellRendererParams: {
        clicked: function (field) {
          alert(`${field} was clicked`);
        },
      },
      minWidth: 200,
    },
  ]);

  const formatDate = (date) => {
    return moment(date).format("MM/DD/YYYY");
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
    <div className="ag-theme-quartz h-[40rem] w-full">
      <AgGridReact
        rowData={[1,2]}
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
