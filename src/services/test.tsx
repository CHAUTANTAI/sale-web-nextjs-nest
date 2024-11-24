import { REQUEST_TABLE } from "@/consts/request-table";
import { createAPI } from "../utils/base-api";
export const fetchAccounts = async () => {
  try {
    const data = await createAPI<{}>("get", REQUEST_TABLE.GET_ACCOUNTS);
    console.log(data);
  } catch (err) {
    console.log("Service error");
  }
};
