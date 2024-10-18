// Compatible with React 18
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { TransactionsProvider } from './context/TransactionContext.jsx';

const root = createRoot(document.getElementById("root"));
root.render(
  // The StrictMode may give 2 outputs instead of 1.
  <StrictMode>
    <TransactionsProvider>
      <App />
    </TransactionsProvider>
  </StrictMode>
);

