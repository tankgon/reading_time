import { useEffect, useState } from "react";
import products from "../../../../../../services/api/admin/products";

export default function useData() {
  const [listMenu, setListMenu] = useState([]);

  useEffect(() => {
    getList();
  }, []);

  const getList = async () => {
    try {
      const res = await products.actionRegularProduct();
      setListMenu(res);
    } catch (err) {
      console.log(err);
    }
  };

  return {
    DatalistMenu: listMenu,
  };
}
