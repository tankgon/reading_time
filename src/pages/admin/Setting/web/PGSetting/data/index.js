import { useEffect, useState } from "react";
import web from "../../../../../../services/api/admin/settings/web";

export default function useData() {
  const [listPGSetting, setListPGSetting] = useState([]);

  useEffect(() => {
    getList();
  }, []);

  const getList = async () => {
    try {
      const res = await web.actionPGSetting({
        Action: "GET",
      });
      setListPGSetting(res[0]);
    } catch (err) {
      console.log(err);
    }
  };

  return {
    DatalistPGSetting: listPGSetting ,
  };
}
