import { useEffect, useState } from "react";
import teachers from "../../../../../../services/api/admin/teachers"

export default function useData() {
  const [listMenu, setList] = useState([]);

  useEffect(() => {
    getList();
  }, []);

  const getList = async () => {
    try {
      const res2 = await teachers.actionFeedback({ Action: "GET" });
      setList(res2);
    } catch (err) {
      console.log(err);
    }
  };


  return {
    DatalistMenu: listMenu,
  };
}
