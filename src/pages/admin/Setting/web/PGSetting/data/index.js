import { useEffect, useState } from "react";
import roles from "../../../../../../services/api/admin/roles";

export default function useData() {
  const [listPGSetting, setListPGSetting] = useState([]);
  const [listCountry, setListCountry] = useState([]);
  useEffect(() => {
    getList();
  }, []);

  const getList = async () => {
    try {
      const res2 = await roles.actionCountry();
      // const res = await web.actionPGSetting();
      setListCountry(res2);
      // setListPGSetting(res[0]);
    } catch (err) {
      console.log(err);
    }
  };

  return {
    DatalistPGSetting: listPGSetting,
    DatalistCountry: listCountry,
  };
}
