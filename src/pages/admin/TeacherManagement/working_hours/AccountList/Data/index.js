import { useEffect, useState } from "react";
import teachers from "../../../../../../services/api/admin/teachers";
export default function useData() {
  const [listMenu, setListMenu] = useState([]);

  useEffect(() => {
    getList();
  }, []);

  const getList = async () => {
    try {
      const res2 = await teachers.actionWorkingHours({ Action: "GET" });
      setListMenu(res2);
    } catch (err) {
      console.log(err);
    }
  };

  return {
    DatalistMenu: listMenu,
  };
}
