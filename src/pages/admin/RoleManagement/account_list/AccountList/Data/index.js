import { useEffect, useState } from "react";
import roles from "../../../../../../services/api/admin/roles";

export default function useData() {
  const [listRole, setListRole] = useState([]);

  useEffect(() => {
    getList();
  }, []);

  const getList = async () => {
    try {
      const res = await roles.actionRoleManagement();
      setListRole(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return {
    DatalistRole: listRole,
  };
}
