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
      const res = await users.actionUser();
      const res2 = await roles.actionCountry();
      setListMenu(res.data);
      setListCountry(res2);
    } catch (err) {
      console.log(err);
    }
  };
  console.log(listMenu);

  return {
    DatalistMenu: listMenu,
    DatalistCountry: listCountry,
  };
}
