import { useEffect, useState } from "react";
import web from "../../../../../../services/api/admin/settings/web";

export default function useData() {
  const [listAdminSetting, setListAdminSetting] = useState([]);
  const [MenuPC, setListMenuPC] = useState([]);
  const [MenuMB, setListMenuMB] = useState([]);
  const [Service, setListService] = useState([]);

  useEffect(() => {
    getList();
  }, []);

  const getList = async () => {
    try {
      const res = await web.actionAdminSetting();
      const res1 = await web.actionMenuPC();
      const res2 = await web.actionMenuMB();
      const res3 = await web.actionService();
      setListAdminSetting(res.data[0]);
      setListMenuPC(res1.data);
      setListMenuMB(res2.data);
      setListService(res3.data);
    } catch (err) {
      console.log(err);
    }
  };

  return {
    DatalistAdminSetting: listAdminSetting,
    DataListMenuPC: MenuPC,
    DataListMenuMB: MenuMB,
    DataListService: Service,
  };
}
