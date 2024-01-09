import { useEffect, useState } from "react";
import teachers from "../../../../../services/api/admin/teachers"

export default function useData() {
  const [listMenu, setListMenu] = useState([]);

  useEffect(() => {
    getList();
  }, []);

  const getList = async () => {
    try {
      const res = await teachers.actionTeacher({
        Action: "GET",
      });
      setListMenu(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return {
    DatalistMenu: listMenu,
  };
}
