import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Expenses from './pages/expenses';
import Invoices from './pages/invoices';
import Sub from './pages/sub';
import './main.css';

let rootElement = document.getElementById('root');
ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="expenses" element={<Expenses />}>
          <Route path="sub" element={<Sub />} />
        </Route>
        <Route path="invoices" element={<Invoices />} />
      </Route>
    </Routes>
    {/* <App /> */}
  </BrowserRouter>,
  rootElement
);

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);
