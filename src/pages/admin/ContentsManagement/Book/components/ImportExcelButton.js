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
          if (element[1] && element[2]) {
            arrayExcel.push({
              Book_Title: element[1],
              Subtitle: element[2],
              Genre: element[3],
              Grade: element[4],
              Lexile: element[5],
              Page: element[6],
              Vocalbulary: element[7],
              Whether_To_Use: element[8],
              Brief_Description: element[9],
              Summary_Sysnopsis: element[10],
              Class_Goal: element[11],
              Level: element[12],
              Image: element[13],
              Attach: element[14],
            });
          }
        }
        if (arrayExcel.length === 0) {
          alert.error("Your data file is empty");
          return;
        }
        setLoading(true);
        console.log(arrayExcel);

        try {
          arrayExcel.map(async (item) => {
            await contents.postBook({
              Book_Title: item.Book_Title,
              Subtitle: item.Subtitle,
              Genre: item.Genre,
              Grade: item.Grade,
              Lexile: item.Lexile,
              Page: item.Page,
              Vocalbulary: item.Vocalbulary,
              Whether_To_Use: item.Whether_To_Use,
              Brief_Description: item.Brief_Description,
              Summary_Sysnopsis: item.Summary_Sysnopsis,
              Class_Goal: item.Class_Goal,
              Level: item.Level,
              Image: item.Image,
              Attach: item.Attach,
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
