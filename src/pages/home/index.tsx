import { inject, observer } from 'mobx-react';
import React from 'react';
import { Link } from 'react-router-dom';

@inject(({ stores }) => ({
  commonStore: stores.commonStore as any,
  counterStore: stores.counterStore as any,
}))
@observer
class Home extends React.PureComponent {
  render() {
    const { commonStore, counterStore } = this.props as any;
    console.log(commonStore);
    console.log(counterStore);
    return (
      <div>
        <div>current counter：{counterStore.counter}</div>
        <div>current time：{commonStore.time}</div>
        <div>
          <Link to="/h5/">H5 模块</Link>
        </div>
      </div>
    );
  }
}

export default Home;
