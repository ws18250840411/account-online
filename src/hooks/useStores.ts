import { MobXProviderContext } from 'mobx-react';
import React from 'react';

import { StoreType } from '@/stores';

interface ContextType {
  stores: StoreType;
}

function useStores(): StoreType;
// eslint-disable-next-line no-unused-vars
function useStores<T extends keyof StoreType>(storeName: T): StoreType[T];
function useStores<T extends keyof StoreType>(storeName?: T) {
  const rootStore = React.useContext(MobXProviderContext);
  const { stores } = rootStore as ContextType;
  return storeName ? stores[storeName] : stores;
}

export { useStores };
