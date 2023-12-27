"use strict";

import "@ag-grid-community/styles/ag-grid.css";
import "@ag-grid-community/styles/ag-theme-alpine.css";
import { AgGridReact } from "ag-grid-react";
import React, { useCallback, useMemo, useRef, useState } from "react";
import ExcelLoader from "../../../../../components/ExcelLoader";
import LinkContact from "../components/LinkContact";
import data from "../Data";

const AccountListTable = () => {
  const { DatalistMenu: listMenu } = data();
  const gridStyle = useMemo(() => ({ height: "300px", width: "100%" }), []);
  const gridRef = useRef();
  const [columnDefs, setColumnDefs] = useState([
    { field: "Id", headerName: "No" },
    { field: "Unique_No", headerName: "Unique No" },
    { field: "Curriculum_Title", headerName: "Curriculum Title" },
    { field: "Subtitle", headerName: "Subtitle" },
    { field: "Division", headerName: "Division" },
    { field: "Whether_To_Use", headerName: "Whether to use" },
    {
      headerName: "Edit",
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
      resizable: true,
    };
  }, []);

  const getRows = () => [
    { cells: [] },
    {
      cells: [
        {
          data: {
            value: 'Here is a comma, and a some "quotes".',
            type: "String",
          },
        },
      ],
    },
    {
      cells: [
        {
          data: {
            value:
              "They are visible when the downloaded file is opened in Excel because custom content is properly escaped.",
            type: "String",
          },
        },
      ],
    },
    {
      cells: [
        { data: { value: "this cell:", type: "String" }, mergeAcross: 1 },
        {
          data: {
            value: "is empty because the first cell has mergeAcross=1",
            type: "String",
          },
        },
      ],
    },
    { cells: [] },
  ];

  const getBoolean = (inputSelector) =>
    !!document.querySelector(inputSelector).checked;

  const getParams = () => ({
    prependContent: getBoolean("#prependContent") ? getRows() : undefined,
    appendContent: getBoolean("#appendContent") ? getRows() : undefined,
  });

  const onBtExport = useCallback(() => {
    gridRef.current.api.exportDataAsExcel(getParams());
  }, [getParams]);

  return (
    <div style={gridStyle} className="ag-theme-alpine">
      <div>
        <h1>Ứng dụng React</h1>
        <ExcelLoader />
      </div>
      <AgGridReact
        id="myTable"
        rowData={listMenu}
        columnDefs={columnDefs}
        defaultColDef={defaultColDef}
      />
    </div>
  );
};

export default AccountListTable;
