import React from "react";
import './App.css';
import Forecast from './component/forecast'
function App() {
  return (
      <div  className="app">
        <div className="container">
          <Forecast />
        </div>
      </div>
  );
}

export default App;
