import { observer } from "mobx-react";
import baseModel from "./model";
import { Button } from "@nutui/nutui-react-taro";
import Taro from "@tarojs/taro";

const App = () => {
  const { userBase } = baseModel;
  return (
    <>
      <Button onClick={() => userBase.getUserInfo({ name: "thomas" })}>
        发送请求
      </Button>
      <Button onClick={() => userBase.addTime()}>增加</Button>
      <Button onClick={() => userBase.resetTime()}>重置</Button>
      <div>{userBase.time}</div>
    </>
  );
};

export default observer(App);
