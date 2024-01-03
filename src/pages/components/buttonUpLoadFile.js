import Box from "@mui/material/Box";
import * as React from "react";

function ButtonUpLoadFile({ id, onChange, title, accept}) {
  return (
    <Box>
      <input
        id={id}
        type="file"
        multiple
        class="hidden"
        onChange={onChange}
        accept={accept}
      />
      <label
        class="cursor-pointer hover:opacity-80 inline-flex items-center shadow-md px-2 py-2 bg-[#50456a] text-gray-50 border border-transparent
rounded-md font-semibold uppercase tracking-widest focus:outline-none 
focus:border-gray-900 focus:ring ring-gray-300 disabled:opacity-25 transition ease-in-out duration-150"
        htmlFor={id}>
        <div variant="contained" color="success">
          <strong>{title}</strong>
        </div>
      </label>
    </Box>
  );
}

export default ButtonUpLoadFile;
