import { useEffect, useState } from "react";
import web from "../../../../../../services/api/admin/settings/web";

export default function useData() {
  const [listAdminSetting, setListAdminSetting] = useState([]);

  // useEffect(() => {
  //   const handler = setTimeout(() => getList(), 300);
  //   return () => clearTimeout(handler);
  // }, [listAdminSetting]);

  useEffect(() => {
    getList();
  }, []);

  const getList = async () => {
    try {
      const res = await web.actionAdminSetting({
        Action: "GET",
      });
      setListAdminSetting(res[0]);
    } catch (err) {
      console.log(err);
    }
  };

  return {
    DatalistAdminSetting: listAdminSetting ,
  };
}
