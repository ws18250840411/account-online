import { observer } from 'mobx-react';
import { Button } from 'mooli-mobile';
import React from 'react';
import { Link } from 'react-router-dom';

import { useStores } from '@/hooks/useStores';

const H5Home: React.FC = observer(() => {
  const commonStore = useStores('commonStore');
  const counterStore = useStores('counterStore');
  console.log(commonStore);
  console.log(counterStore);

  return (
    <>
      <div>Welcome Home</div>
      <div>store counter: {counterStore.counter}</div>
      <Button onClick={() => counterStore.increment()}>increment</Button>
      <Button onClick={() => counterStore.decrement()}>decrement</Button>
      <div>
        <Link to="/">Home 首页</Link>
      </div>
    </>
  );
});

export default H5Home;
