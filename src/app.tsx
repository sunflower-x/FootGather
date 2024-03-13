import { PropsWithChildren } from "react";
import { Provider } from "mobx-react";
import { useLaunch } from "@tarojs/taro";
import "@nutui/nutui-react-taro/dist/style.css";
import { stores } from "@/store/index";
import "./app.scss";


function App({ children }: PropsWithChildren<any>) {
  useLaunch(() => {
    console.log("App launched.");
  });

  // children 是将要会渲染的页面
  return <Provider {...stores}>{children}</Provider>;
}

export default App;
