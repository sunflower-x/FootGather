import { makeAutoObservable } from "mobx";

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
}

export default UserBaseModel;
