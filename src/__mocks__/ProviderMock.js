/* eslint-disable import/no-extraneous-dependencies */
// EL MOCK DEBE SIMULAR EL MISMO FUNCIONAMIENTO DEL ARCHIVO O ELEMENTO A TESTEAR ...//

// {props.children} SERAM LOS COMPONENTES QUE NECESITO ESTRUCTURAR EN ESTE 'MOCK' //

import React from 'react';
import { createStore } from 'redux';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history'; // npm install history -D
import initialState from '../initialState';
import reducer from '../reducers';

const store = createStore(reducer, initialState);
const history = createBrowserHistory();

const ProviderMock = props => (
  <Provider store={store}>
    <Router history={history}>
      {props.children}
    </Router>
  </Provider>
);

export default ProviderMock;
