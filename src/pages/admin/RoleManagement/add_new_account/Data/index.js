import { useEffect, useState } from "react";
import roles from "../../../../../services/api/admin/roles";

export default function useData() {
  const [listRole, setListRole] = useState([]);
  const [listTeacher, setListTeacher] = useState([]);
  const [listCountry, setListCountry] = useState([]);
  const [listAuthority, setListAuthority] = useState([]);

  useEffect(() => {
    getList();
  }, []);

  const getList = async () => {
    try {
      const res = await roles.actionRoleManagement({ Action: "GET" });
      const res1 = await roles.actionRoleManagement({ Action: "DETAIL" });
      const res2 = await roles.actionCountry({ Action: "GET" });
      const res3 = await roles.actionAuthority({ Action: "GET" });
      setListRole(res);
      setListTeacher(res1);
      setListCountry(res2);
      setListAuthority(res3);
    } catch (err) {
      console.log(err);
    }
  };

  return {
    DatalistRole: listRole,
    DatalistTeacher: listTeacher,
    DatalistCountry: listCountry,
    DatalistAuthority: listAuthority,
  };
}
