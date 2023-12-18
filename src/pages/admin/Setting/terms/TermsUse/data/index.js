import { useEffect, useState } from "react";
import terms from "../../../../../../services/api/admin/settings/terms";

export default function useData() {
  const [listTerms, setListTerms] = useState([]);

  useEffect(() => {
    getList();
  }, []);

  const getList = async () => {
    try {
      const res = await terms.actionTerms({
        Action: "GET",
      });
      setListTerms(res[0]);
    } catch (err) {
      console.log(err);
    }
  };

  return {
    DatalistTerms: listTerms ,
  };
}
