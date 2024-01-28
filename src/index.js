import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
<<<<<<< HEAD
import {store,persistor} from "./store";
import { PersistGate } from 'redux-persist/integration/react';
=======
import store from "./store";
>>>>>>> main

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Provider store={store}>
<<<<<<< HEAD
    <PersistGate loading={null} persistor={persistor}>
      <App />
      </PersistGate>
=======
      <App />
>>>>>>> main
    </Provider>
  </Router>
);
