import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from "react-redux";
import { store } from './store';
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import {BrowserRouter as Router,} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));

let persistor = persistStore(store);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
        <App />
        </Router>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);


