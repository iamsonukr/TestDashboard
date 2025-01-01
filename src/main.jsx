import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from './Redux/app/Store.js'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ServiceContextProvider from "./context/ServiceContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
     <BrowserRouter>
     <ToastContainer />
     <ServiceContextProvider>
      <Provider store={store}>
        <App />
      </Provider>
     </ServiceContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
