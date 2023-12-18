import { useEffect, useState } from "react";
import web from "../../../../../../services/api/admin/settings/web";

export default function useData() {
  const [listMailSetting, setListMailSetting] = useState([]);

  // useEffect(() => {
  //   const handler = setTimeout(() => getList(), 300);
  //   return () => clearTimeout(handler);
  // }, [listMailSetting]);

  useEffect(() => {
    getList();
  }, []);

  const getList = async () => {
    try {
      const res = await web.actionMailSetting({
        Action: "GET",
      });
      setListMailSetting(res[0]);
    } catch (err) {
      console.log(err);
    }
  };

  return {
    DatalistMailSetting: listMailSetting ? listMailSetting : [],
  };
}
