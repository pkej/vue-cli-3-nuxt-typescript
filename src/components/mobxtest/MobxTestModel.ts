import { action, computed, observable } from "mobx";
export default class MobxTestModel {
  @observable age = 10;
  @observable users = [];

  @computed
  get computedAge() {
    return this.age + 10/2 * 3;
  }

  @action.bound
  setAge() {
    this.age++;
  }

  @action.bound
  async fetchUsers() {
  // this.users = [await http.get('/users')]
  }
}
