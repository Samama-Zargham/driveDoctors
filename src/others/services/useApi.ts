import { useState } from "react";
import { _returnError, showError } from "../utils/helpers";

export const useApi = (apiFunction: any) => {
  const [response, setresponse] = useState<any>({});
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState<any>("");

  const requestCall = async (...args: any) => {
    let response: any = "";
    try {
      setloading(true);
      response = await apiFunction(...args);
      setresponse(response?.data);
      setloading(false);
      return response;
    } catch (error: any) {
      console.log({ error: _returnError(error) })
      setloading(false);
      seterror(error);
      showError(_returnError(error));
      throw error;
    }
  };

  return { loading, error, response, requestCall };
};
