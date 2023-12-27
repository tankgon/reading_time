import React from "react";
import * as XLSX from "xlsx";

class ExcelLoader extends React.Component {
  handleLoadExcel = () => {
    // Thay thế 'URL_TEP_EXCEL' bằng URL thực tế của tệp Excel
    const excelUrl = "https://www.ag-grid.com/example-assets/olympic-data.xlsx";

    // Sử dụng thư viện xlsx để đọc dữ liệu từ tệp Excel qua URL
    fetch(excelUrl)
      .then((response) => response.arrayBuffer())
      .then((data) => {
        const workbook = XLSX.read(data, { type: "array" });

        // Xử lý dữ liệu từ workbook ở đây (ví dụ: lấy dữ liệu từ một sheet)
        const firstSheetName = workbook.SheetNames[0];
        const excelData = XLSX.utils.sheet_to_json(
          workbook.Sheets[firstSheetName]
        );

        // Bạn có thể làm gì đó với dữ liệu ở đây (ví dụ: hiển thị trên trang web)
        console.log(excelData);
      })
      .catch((error) => {
        console.error("Lỗi khi tải tệp Excel: ", error);
      });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleLoadExcel}>Mở Excel từ URL</button>
      </div>
    );
  }
}

export default ExcelLoader;
