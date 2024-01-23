import { useEffect, useState } from "react";
import roles from "../../../../services/api/admin/roles";

export default function useData() {
  const [listRole, setListRole] = useState([]);
  const [listTeacher, setListTeacher] = useState([]);
  const [listCountry, setListCountry] = useState([]);

  useEffect(() => {
    getList();
  }, []);

  const getList = async () => {
    try {
      const res = await roles.actionRoleManagement();
      // const res1 = await roles.actionRoleManagement({ Action: "DETAIL" });
      const res2 = await roles.actionCountry();
      setListRole(res);
      // setListTeacher(res1);
      setListCountry(res2);
    } catch (err) {
      console.log(err);
    }
  };

  return {
    DatalistRole: listRole,
    DatalistTeacher: listTeacher,
    DatalistCountry: listCountry,
  };
}
