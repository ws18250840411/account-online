import 'mooli-mobile/dist/mooli-mobile.css';
import '@/styles/global.less';

import { Provider } from 'mobx-react';
import React from 'react';
import ReactDOM from 'react-dom';
import { renderRoutes } from 'react-router-config';
import { BrowserRouter } from 'react-router-dom';

import routes from '@/routes';
import stores from '@/stores';

ReactDOM.render(
  <React.StrictMode>
    <Provider stores={stores}>
      <BrowserRouter>{renderRoutes(routes)}</BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
