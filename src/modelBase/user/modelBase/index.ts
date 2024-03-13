import { makeAutoObservable } from "mobx";
import Remote from "../modelRemote/index";

class UserBaseModel {
  constructor() {
    makeAutoObservable(this);
  }
  time = 1;

  addTime() {
    this.time += 1;
  }
  resetTime() {
    this.time = 1;
  }
  getUserInfo(data) {
    return Remote.getUserInfo(data);
  }
}

export default UserBaseModel;
