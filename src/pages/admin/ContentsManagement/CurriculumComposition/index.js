"use strict";

import "@ag-grid-community/styles/ag-grid.css";
import "@ag-grid-community/styles/ag-theme-quartz.css";
import { Grid, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { AgGridReact } from "ag-grid-react";
import React, { useCallback, useMemo, useRef, useState } from "react";
import DialogCurriculumComposition from "./components/DialogCurriculumComposition";

const isFirstColumn = (params) => {
  var displayedColumns = params.columnApi.getAllDisplayedColumns();
  var thisIsFirstColumn = displayedColumns[0] == params.column;
  return thisIsFirstColumn;
};

const CurriculumComposition = () => {
  const gridRef = useRef();
  const gridStyleD = useMemo(() => ({ height: "100vh", width: "100%" }), []);
  const gridStyle = useMemo(() => ({ height: "90vh", width: "100%" }), []);
  const [rowData, setRowData] = useState();
  const [columnDefs, setColumnDefs] = useState([
    { field: "Unique No" },
    { field: "Book Title" },
    { field: "Subtitle" },
    { field: "The genre" },
    { field: "Grade" },
    { field: "Lexile" },
    { field: "Page" },
    { field: "Vocabulary" },
    { field: "registration date(Last modified date)" },
    { field: "Whether to use" },
    { field: "" },
  ]);
  const defaultColDef = useMemo(() => {
    return {
      flex: 1,
      minWidth: 100,
      resizable: true,
    };
  }, []);

  const onGridReady = useCallback((params) => {
    const data = [
      {
        No: 1,
        Approval: "213",
        Role: "213",
        Country: "213",
        ID: "213",
        Name: "231",
        Email: "13",
        Registration: "",
        Management: "",
      },
    ];
    setRowData(data);
  }, []);

  const onQuickFilterChanged = useCallback(() => {
    gridRef.current.api.setQuickFilter(
      document.getElementById("quickFilter").value
    );
  }, []);

  return (
    <Box style={gridStyleD}>
      {/* <div style={{ marginBottom: "5px" }}>
        <input
          type="text"
          onInput={onQuickFilterChanged}
          id="quickFilter"
          placeholder="quick filter..."
        />
      </div> */}
      <Grid
        container
        sx={{ alignItems: "center", justifyContent: "space-between" }}>
        <Grid item xs={12} lg={1}>
          {/* <Button
            sx={{
              textTransform: "capitalize",
              p: "10px 0",
              m: "12px 0",
              width: "90%",
            }}
            variant="contained">
            <strong>Add Book</strong>
          </Button> */}

          <DialogCurriculumComposition />
        </Grid>

        <Grid item xs={12} lg={2}>
          <Box sx={{ display: "flex" }}>
            <TextField
              fullWidth
              size="small"
              sx={{ p: "8px" }}
              id="outlined-basic"
              variant="outlined"
            />

            <Box
              sx={{
                border: "1px solid #C0C0C0",
                margin: "auto",
                cursor: "auto",
                p: "10px",
              }}>
              Search
            </Box>
          </Box>
        </Grid>
      </Grid>

      <div style={gridStyle} className="ag-theme-quartz">
        <AgGridReact
          ref={gridRef}
          rowData={rowData}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          suppressRowClickSelection={true}
          rowSelection={"multiple"}
          paginationAutoPageSize={true}
          pagination={true}
        />
      </div>
    </Box>
  );
};

export default CurriculumComposition;
