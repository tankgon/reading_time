import { useEffect, useState } from "react";
import teachers from "../../../../../../services/api/admin/teachers";
export default function useData() {
  const [listMenu, setListMenu] = useState([]);

  useEffect(() => {
    getList();
  }, []);

  const getList = async () => {
    try {
      const res2 = await teachers.actionWorkingHours();
      setListMenu(res2);
    } catch (err) {
      console.log(err);
    }
  };

  return {
    DatalistMenu: listMenu ? [1, 2] : [1, 2],
  };
}
