import React from "react";
import * as XLSX from "xlsx";
import ButtonComponent from "./buttonComponent";

const ExportExcelButton = ({ data, filename, fullWidth, margin }) => {
  const handleDownload = () => {
    const ws = XLSX.utils.json_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Sheet 1");
    XLSX.writeFile(wb, `${filename}.xlsx`);
  };
  return (
    <ButtonComponent
      margin={margin}
      fullWidth={fullWidth}
      onClick={handleDownload}
      title={"Excel Export"}
      pading={"10px"}
    />
  );
};

export default ExportExcelButton;
