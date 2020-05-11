import React from 'react';
import './App.scss';
import Orders from './components/Orders';
import Header from './components/Header';
import OrderComplete from './components/OrderComplete';

function App() {
  return (
    <div className="app">
      <Header/>
      <OrderComplete/>
      <Orders/>
    </div>
  );
}

export default App;
