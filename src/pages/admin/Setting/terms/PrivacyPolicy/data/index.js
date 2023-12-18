import { useEffect, useState } from "react";
import terms from "../../../../../../services/api/admin/settings/terms";

export default function useData() {
  const [listPrivacy, setListPrivacy] = useState([]);

  useEffect(() => {
    getList();
  }, []);

  const getList = async () => {
    try {
      const res = await terms.actionPrivacyPolicy({
        Action: "GET",
      });
      setListPrivacy(res[0]);
    } catch (err) {
      console.log(err);
    }
  };

  return {
    DatalistPrivacy: listPrivacy ,
  };
}
