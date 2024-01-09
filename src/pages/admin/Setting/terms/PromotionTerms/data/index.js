import { useEffect, useState } from "react";
import roles from "../../../../../../services/api/admin/roles";
import terms from "../../../../../../services/api/admin/settings/terms";

export default function useData() {
  const [listPromotion, setListPromotion] = useState([]);
  const [listCountry, setListCountry] = useState([]);

  useEffect(() => {
    getList();
  }, []);

  const getList = async () => {
    try {
      const res = await terms.actionPromotionTermsAndConditions();
      const res2 = await roles.actionCountry();
      setListPromotion(res.data[0]);
      setListCountry(res2);
    } catch (err) {
      console.log(err);
    }
  };

  return {
    DatalistPromotion: listPromotion,
    DatalistCountry: listCountry,
  };
}
