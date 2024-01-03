"use strict";

import "@ag-grid-community/styles/ag-grid.css";
import "@ag-grid-community/styles/ag-theme-quartz.css";
import { AgGridReact } from "ag-grid-react";
import React, { useMemo, useState } from "react";
import LinkContact from "../components/LinkContact";

const AccountListTable = () => {
  const gridStyle = useMemo(() => ({ height: "300px", width: "100%" }), []);
  const [rowData, setRowData] = useState();
  const [columnDefs, setColumnDefs] = useState([
    { field: "No" },
    { field: "Product Name", filter: "agTextColumnFilter" },
    { field: "Country of sale", filter: "agTextColumnFilter" },
    { field: "Currency", filter: "agTextColumnFilter" },
    { field: "Price" },
    { field: "Class Days(Total)" },
    { field: "Class Days(Per Week)" },
    { field: "Registration date" },
    { field: "Whether to use", filter: "agTextColumnFilter" },
    { field: "Expiration date" },
    {
      field: "Edit",
      cellRenderer: LinkContact,
      cellRendererParams: {
        clicked: function (field) {
          alert(`${field} was clicked`);
        },
      },
      minWidth: 100,
    },
  ]);
  const defaultColDef = useMemo(() => {
    return {
      flex: 1,
      minWidth: 100,

      resizable: true,
      floatingFilter: true,
    };
  }, []);

  return (
    <div style={gridStyle} className="ag-theme-quartz">
      <AgGridReact
        rowData={rowData}
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
