import { observer } from "mobx-react";
import baseModel from "./model";
import { Button } from "@nutui/nutui-react-taro";

const App = () => {
  const { userBase } = baseModel;
  return (
    <>
      <Button onClick={() => userBase.addTime()}>增加</Button>
      <Button onClick={() => userBase.resetTime()}>重置</Button>
      <div>{userBase.time}</div>
    </>
  );
};

export default observer(App);
