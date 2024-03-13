import { makeAutoObservable } from "mobx";
export interface CalculatorType {
  count: number;
  add: Function;
  minus: Function;
}
class Calculator implements CalculatorType {
  count = 1;
  constructor() {
    makeAutoObservable(this);
  }
  add() {
    this.count += 1;
  }
  minus() {
    this.count -= 1;
  }
}
export { Calculator };
