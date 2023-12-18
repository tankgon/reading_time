import { useEffect, useState } from "react";
import terms from "../../../../../../services/api/admin/settings/terms";

export default function useData() {
  const [listPromotion, setListPromotion] = useState([]);

  useEffect(() => {
    getList();
  }, []);

  const getList = async () => {
    try {
      const res = await terms.actionPromotionTermsAndConditions({
        Action: "GET",
      });
      setListPromotion(res[0]);
    } catch (err) {
      console.log(err);
    }
  };

  return {
    DatalistPromotion: listPromotion ,
  };
}
