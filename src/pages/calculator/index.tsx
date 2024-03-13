import { useLoad } from "@tarojs/taro";
import { Button } from "@nutui/nutui-react-taro";
import { observer } from "mobx-react";
import { useStore } from "@/store/index";
import { useContext } from "react";
import Taro from "@tarojs/taro";
import "./index.scss";

function Index() {
  const { calculator } = useContext(useStore);

  useLoad(() => {
    console.log("Page loaded.");
  });

  return (
    <div>
      <Button onClick={() => Taro.navigateTo({ url: "/pages/user/index" })}>
        go to User
      </Button>
      <Button onClick={() => calculator.add()}>加</Button>
      <Button onClick={() => calculator.minus()}>减</Button>
      <span>{calculator.count}</span>
    </div>
  );
}

export default observer(Index);
