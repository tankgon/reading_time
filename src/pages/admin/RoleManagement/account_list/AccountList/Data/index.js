import { useEffect, useState } from "react";
import roles from "../../../../../../services/api/admin/roles";

export default function useData() {
  const [listRole, setListRole] = useState([]);
  const [listTeacher, setListTeacher] = useState([]);

  useEffect(() => {
    getList();
  }, []);

  const getList = async () => {
    try {
      const res = await roles.actionRoleManagement({ Action: "GET" });
      const res1 = await roles.actionTeacher({ Action: "GET" });
      setListRole(res);
      setListTeacher(res1);
    } catch (err) {
      console.log(err);
    }
  };

  return {
    DatalistRole: listRole,
    DatalistTeacher: listTeacher,
  };
}
