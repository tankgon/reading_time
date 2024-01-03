import { useEffect, useState } from "react";
import roles from "../../../../../services/api/admin/roles";
import users from "../../../../../services/api/admin/users";

export default function useData() {
  const [listMenu, setListMenu] = useState([]);
  const [listCountry, setListCountry] = useState([]);

  useEffect(() => {
    getList();
  }, []);

  const getList = async () => {
    try {
      const res = await users.actionUser({ Action: "GET" });
      const res2 = await roles.actionCountry({ Action: "GET" });
      setListMenu(res);
      setListCountry(res2);
    } catch (err) {
      console.log(err);
    }
  };

  return {
    DatalistMenu: listMenu,
    DatalistCountry: listCountry,
  };
}
