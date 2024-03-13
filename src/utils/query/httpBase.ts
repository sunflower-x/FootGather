import Taro from "@tarojs/taro";

import { interceptor } from "./interceptor";
import { getServerHost } from "./serverUrl";

Taro.addInterceptor(interceptor);

let isAppIniting = false;
const queryStore: any[] = [];

export const publicBasicHttp = (
  requestObj,
  baseDataKeys = [],
  isNeedLogin = true
) => {
  const { url, data, method, showLoading, showToast } = requestObj;
  return new Promise(async (resolve, reject) => {
    let config: any = {};
    config.data = null;
    config.method = method || "GET";
    config.url = `${getServerHost()}${url}`;
    config.header = Object.assign({}, config.header, {
      "Content-Type": "application/x-www-form-urlencoded",
      Accept: "application/json;charset=UTF-8",
    });
    config.showToast = showToast;

    if (showLoading) {
      Taro.hideLoading();
      Taro.showLoading({
        title: "加载中···",
        mask: true,
      });
    }
    const TaroQuery = (configObj, resolveFun, rejectFun) => {
      return Taro.request(configObj)
        .then((response) => {
          if (showLoading) Taro.hideLoading();
          resolveFun(response);
        })
        .catch((err) => {
          if (showLoading) Taro.hideLoading();
          console.info(err);
          if (err.instatus === "320002" && err.status == "200")
            return rejectFun(err);
          Taro.showToast({
            title: err.statusText,
            icon: "none",
            duration: 1000,
          });
          // if (err.status != 200) return;
          rejectFun(err);
        });
    };

    const loopQuery = (queryArr) => {
      if (!queryArr.length) return;
      const item = queryArr.shift();
      TaroQuery(item.config, item.resolve, item.reject);
      loopQuery(queryArr);
    };

    TaroQuery(config, resolve, reject).then(() => {
      loopQuery(queryStore);
    });
  });
};
