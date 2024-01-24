import { useEffect, useState } from "react";
import menu from "../../../../../services/api/admin/settings/menu";

export default function useData() {
  const [listMenu, setListMenu] = useState([]);

  useEffect(() => {
    getList();
  }, []);

  const getList = async () => {
    try {
      const res = await menu.actionMenu({
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
