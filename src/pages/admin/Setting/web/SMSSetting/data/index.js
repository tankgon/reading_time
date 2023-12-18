import { useEffect, useState } from "react";
import web from "../../../../../../services/api/admin/settings/web";

export default function useData() {
  const [listSMSSetting, setListSMSSetting] = useState([]);

  useEffect(() => {
    getList();
  }, []);

  const getList = async () => {
    try {
      const res = await web.actionSMSSetting({
        Action: "GET",
      });
      setListSMSSetting(res[0]);
    } catch (err) {
      console.log(err);
    }
  };

  console.log(listSMSSetting);

  return {
    DatalistSMSSetting: listSMSSetting,
  };
}
