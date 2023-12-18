import { useEffect, useState } from "react";
import web from "../../../../../../services/api/admin/settings/web";

export default function useData() {
  const [listWebSetting, setListWebSetting] = useState([]);

  useEffect(() => {
    getList();
  }, []);

  const getList = async () => {
    try {
      const res = await web.actionWebSetting({
        Action: "GET",
      });
      setListWebSetting(res[0]);
    } catch (err) {
      console.log(err);
    }
  };

  return {
    DatalistWebSetting: listWebSetting ? listWebSetting : [],
  };
}
