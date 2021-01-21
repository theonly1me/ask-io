import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import reduxThunk from 'redux-thunk';

import App from './components/App';
import { composeWithDevTools } from 'redux-devtools-extension';

ReactDOM.render(
  <Provider
    store={createStore(
      reducers,
      composeWithDevTools(applyMiddleware(reduxThunk))
    )}
  >
    <App />
  </Provider>,
  document.getElementById('root')
);
