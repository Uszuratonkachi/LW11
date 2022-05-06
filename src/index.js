import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Items from "./../src/components/Items";
import {BrowserRouter, Route, Routes} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<App />} />
              <Route path="items" element={<Items/>} />
          </Routes>
      </BrowserRouter>,
  </React.StrictMode>
);
