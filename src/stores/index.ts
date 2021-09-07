import commonStore from './common';
import counterStore from './counter';

const _store = {
  counterStore,
  commonStore,
};

export type StoreType = typeof _store;

export default _store;
