import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import './index.scss';
import App from './App';
import rootReducer from './Reducers'
const store = createStore(rootReducer,
  {
    Labels: { container: [{ text: "dummy item" }] },
    LabelsCounterID:0
  }
)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


