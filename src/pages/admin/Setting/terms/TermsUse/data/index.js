import { useEffect, useState } from "react";
import roles from "../../../../../../services/api/admin/roles";
import terms from "../../../../../../services/api/admin/settings/terms";

export default function useData() {
  const [listTerms, setListTerms] = useState([]);
  const [listCountry, setListCountry] = useState([]);
  useEffect(() => {
    getList();
  }, []);

  const getList = async () => {
    try {
      const res = await terms.actionTerms();
      const res2 = await roles.actionCountry();
      setListTerms(res.data[0]);
      setListCountry(res2);
    } catch (err) {
      console.log(err);
    }
  };
  console.log(listTerms);

  return {
    DatalistTerms: listTerms,
    DatalistCountry: listCountry,
  };
}
