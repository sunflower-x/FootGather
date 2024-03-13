import { makeAutoObservable } from "mobx";
import UserBaseModel from "@/modelBase/user/modelBase";

class BaseModel {
  constructor() {
    makeAutoObservable(this);
  }
  userBase = new UserBaseModel();
}

export default new BaseModel;
