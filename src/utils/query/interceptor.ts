import Taro from "@tarojs/taro";

let isFirst = false;

// 自定义拦截器
export const interceptor = (chain: any) => {
  const requestParams = chain.requestParams;
  const { method, data, url, showToast } = requestParams;

  return chain
    .proceed(requestParams)
    .then((res: any) => {
      const { status, resultCode, message, excetionMessage } = res.data;
      if (status == "success") return res.data;
      return Promise.reject({
        statusText: excetionMessage || message || "失败",
        instatus: resultCode || "",
      });
    })
    .catch((err: any) => {
      const {
        status = "200",
        statusText = "",
        instatus = "default",
        errMsg,
        ...restErr
      } = err || {};
      if (showToast) {
        Taro.hideToast();
        Taro.showToast({
          title: statusText || errMsg || "",
          icon: "none",
          duration: 2000,
        });
      }
      switch (status) {
        case "200": {
          const errObj = { status, statusText, instatus, ...restErr };
          switch (instatus) {
            case "kickout":
              break;
            case "loginFailure":
              if (!isFirst) {
                isFirst = true;
                // 登录操作
              }
              break;
            default:
              break;
          }
          return Promise.reject(errObj);
        }
        default:
          return Promise.reject({ status, statusText, instatus, ...restErr });
      }
    });
};
