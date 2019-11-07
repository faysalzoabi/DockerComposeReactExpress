import React from 'react';
import Customers from './components/customers';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="apptitle">React Express Starter and family</h1>
        <Customers/>
      </header>
    </div>
  );
} 

export default App;
