import Taro from "@tarojs/taro";

export function getServerHost() {
//   return Taro.getStorageSync("app_server_host") || process.env.NODE_SERVER;
  return Taro.getStorageSync("app_server_host") || 'https://developer.mozilla.org/en-US';
}
