import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';
// import App from './App1';
import App from './App2';
import { createStore } from 'redux';
import counterReducer from './store/countReducer';
import visibleReducer from './store/visibleReducer';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './store';
import { composeWithDevTools } from 'redux-devtools-extension';

const root = ReactDOM.createRoot(document.getElementById('root'));
// const store = createStore(counterReducer);
// const store = createStore(visibleReducer);
const store = configureStore({ reducer: rootReducer }, composeWithDevTools());

root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* store 사용하는 컴포넌트만 provider로 감싸주면 된다 */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
