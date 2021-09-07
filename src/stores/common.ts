import { observable } from 'mobx';

class CommonStore {
  @observable time = '2019';
  @observable todos = [];
}

export default new CommonStore();
