import { curry } from "ramda";
import { publicBasicHttp } from "./httpBase";

export default {
  get: curry((url, data, baseDataKeys = undefined, rest) => {
    const { showLoading = true, showToast = true } = rest || {};
    const requestObj = { url, data, method: "GET", showLoading, showToast };
    return publicBasicHttp(requestObj, baseDataKeys, rest);
  }),

  post: curry((url, data, baseDataKeys = undefined, rest) => {
    const { showLoading = true, showToast = true } = rest || {};
    const requestObj = { url, data, method: "POST", showLoading, showToast };
    return publicBasicHttp(requestObj, baseDataKeys, rest);
  }),
};
