import { makeAutoObservable, values } from "mobx";
class PassTests {
  passTests = false;
  testScore = 0;

  constructor() {
    makeAutoObservable(this);
  }
  setValue = (values) => {
    this.passTests = values;
  };
}
export default new PassTests();
