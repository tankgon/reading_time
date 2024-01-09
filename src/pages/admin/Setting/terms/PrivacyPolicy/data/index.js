import { useEffect, useState } from "react";
import terms from "../../../../../../services/api/admin/settings/terms";
import roles from "../../../../../../services/api/admin/roles";
export default function useData() {
  const [listPrivacy, setListPrivacy] = useState([]);
  const [listCountry, setListCountry] = useState([]);

  useEffect(() => {
    getList();
  }, []);

  const getList = async () => {
    try {
      const res = await terms.actionPrivacyPolicy();
      const res2 = await roles.actionCountry();
      setListPrivacy(res.data[0]);
      setListCountry(res2);
    } catch (err) {
      console.log(err);
    }
  };

  return {
    DatalistPrivacy: listPrivacy,
    DatalistCountry: listCountry,
  };
}
