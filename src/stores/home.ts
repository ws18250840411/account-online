import { observable } from 'mobx';

class AppStore {
  @observable time = '2019';
  @observable todos = [];
}

const homeStore = new AppStore();
export default homeStore;
