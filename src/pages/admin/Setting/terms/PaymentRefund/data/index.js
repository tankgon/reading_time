import { useEffect, useState } from "react";
import terms from "../../../../../../services/api/admin/settings/terms";

export default function useData() {
  const [listPayment, setListPayment] = useState([]);

  useEffect(() => {
    getList();
  }, []);

  const getList = async () => {
    try {
      const res = await terms.actionPaymentAndRefundPolicy({
        Action: "GET",
      });
      setListPayment(res[0]);
    } catch (err) {
      console.log(err);
    }
  };

  return {
    DatalistPayment: listPayment ,
  };
}
