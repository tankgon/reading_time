import { useEffect, useState } from "react";
import roles from "../../../../../services/api/admin/roles";

export default function useData() {
  const [listCountry, setListCountry] = useState([]);

  useEffect(() => {
    getList();
  }, []);

  const getList = async () => {
    try {
      const res2 = await roles.actionCountry({ Action: "GET" });
      setListCountry(res2);
    } catch (err) {
      console.log(err);
    }
  };

  return {
    DatalistCountry: listCountry,
  };
}
