import { useEffect, useState } from "react";
import contents from "../../../../../../services/api/admin/contents";

export default function useData() {
  const [listMenu, setListMenu] = useState([]);

  useEffect(() => {
    getList();
  }, []);

  const getList = async () => {
    try {
      const res = await contents.actionContents({
        Action: "GET",
      });
      setListMenu(res);
    } catch (err) {
      console.log(err);
    }
  };

  return {
    DatalistMenu: listMenu,
  };
}
