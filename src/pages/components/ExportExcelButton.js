import React from "react";
import * as XLSX from "xlsx";
import ButtonComponent from "./buttonComponent";

const ExportExcelButton = ({ data, filename }) => {
  const handleDownload = () => {
    const ws = XLSX.utils.json_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Sheet 1");
    XLSX.writeFile(wb, `${filename}.xlsx`);
  };
  return (
    <ButtonComponent
      onClick={handleDownload}
      title={"Excel Export"}
      pading={"10px 0"}
      margin={"8px 12px"}
      width={"90%"}
    />
  );
};

export default ExportExcelButton;
