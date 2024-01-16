"use client";
import DriveFileMoveIcon from "@mui/icons-material/DriveFileMove";
import CircularProgress from "@mui/material/CircularProgress";
import React, { useRef, useState } from "react";
import { toast } from "react-toastify";
//data
import contents from "../../../../../services/api/admin/contents";
var xlsx = require("xlsx");

export default function ImportExcelButton({ accept = ".xls, .xlsx" }) {
  const [arrayExcel, setArrayExcel] = useState([]);
  const [loading, setLoading] = useState(false);
  const id = useRef(new Date().toISOString());
  const inputFileRef = useRef(null);

  const handleFile = async (evt) => {
    evt.preventDefault();
    const file = evt.target.files[0];
    if (file) {
      const reader = new FileReader();
      const rABS = !!reader.readAsBinaryString;
      reader.onload = async (e) => {
        const bstr = e.target.result;
        const wb = xlsx.read(bstr, { type: rABS ? "binary" : "array" });
        const wsname = wb.SheetNames[0];
        const ws = wb.Sheets[wsname];
        const data = xlsx.utils.sheet_to_json(ws, { header: 1 });
        for (let index = 1; index < data.length; index++) {
          const element = data[index];
          if (element[2] && element[3]) {
            arrayExcel.push({
              Curriculum_Title: element[2],
              Subtitle: element[3],
              Division: element[4],
              _Description: element[5],
              Whether_To_Use: element[6],
            });
          }
        }
        if (arrayExcel.length === 0) {
          alert.error("Your data file is empty");
          return;
        }
        setLoading(true);

        try {
          arrayExcel.map(async (item) => {
            await contents.postCurriculum({
              Curriculum_Title: item.Curriculum_Title,
              Subtitle: item.Subtitle,
              _Description: item._Description,
              Division: item.Division,
              Whether_To_Use: item.Whether_To_Use,
            });
          });

          toast.success(`Successful update!`);
          setLoading(false);
        } catch (err) {
          console.log(err);
          toast.error(`Update failed!`);
        }
      };
      if (rABS) reader.readAsBinaryString(file);
      else reader.readAsArrayBuffer(file);
    }
  };

  return (
    <>
      <label
        htmlFor={id.current}
        onChange={(e) => {
          handleFile(e);
          // CreateCurriculum();
        }}
        style={{ cursor: "pointer" }}>
        <input
          type="file"
          ref={inputFileRef}
          id={id.current}
          hidden
          accept={accept}
          //   onChange={handleFile}
        ></input>
        <div
          style={{ width: "max-content" }}
          className=" mx-3 flex flex-row items-center justify-center gap-1 rounded-md border bg-[#f4a5c7] text-white px-16 py-3 ">
          {loading ? (
            <CircularProgress size={24} color="inherit" />
          ) : (
            <DriveFileMoveIcon />
          )}
          <strong>Excel Upload</strong>
        </div>
      </label>
    </>
  );
}
