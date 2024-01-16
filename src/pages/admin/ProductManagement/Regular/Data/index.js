import { useEffect, useState } from "react";
import contents from "../../../../../services/api/admin/contents";
import products from "../../../../../services/api/admin/products";
import roles from "../../../../../services/api/admin/roles";

export default function useData() {
  const [listMenu, setListMenu] = useState([]);
  const [listCurriculum, setCurriculum] = useState([]);
  const [listCountry, setCountry] = useState([]);

  useEffect(() => {
    getList();
  }, []);

  const getList = async () => {
    try {
      const res = await products.actionRegularProduct();
      const res1 = await contents.actionCurriculum();
      const res2 = await roles.actionCountry();
      setListMenu(res.data);
      setCurriculum(res1.data);
      setCountry(res2);
    } catch (err) {
      console.log(err);
    }
  };

  return {
    DatalistMenu: listMenu,
    DataCurriculum: listCurriculum,
    DataCountry: listCountry,
  };
}
