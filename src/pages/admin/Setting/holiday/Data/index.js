import { useEffect, useState } from "react";
import holiday from "../../../../../services/api/admin/settings/holiday";

export default function useData() {
  const [listHoliday, setListHoliday] = useState([]);

  useEffect(() => {
    getList();
  }, []);

  const getList = async () => {
    try {
      const res = await holiday.actionHoliday();
      setListHoliday(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return {
    DatalistHoliday: listHoliday,
  };
}
