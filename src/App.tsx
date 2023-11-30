import React, { useState, ChangeEvent } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [value, setValue] = useState('');
  const [unit, setUnit] = useState('tatami'); // 初期値を畳数に設定

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleUnitChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setUnit(event.target.value);
  };

  const calculateResult = () => {
    const number = parseFloat(value);
    if (!isNaN(number)) {
      if (unit === 'tatami') {
        return (number * 1.62).toFixed(2) + ' 平米';
      } else if (unit === 'meter') {
        return (number / 1.62).toFixed(2) + ' 畳';
      }
    }
    return 'Invalid Input';
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          メジャーツール!!
        </a>
        <input
          type="text"
          value={value}
          onChange={handleChange}
          placeholder="Enter a number"
        />
        <select value={unit} onChange={handleUnitChange}>
          <option value="tatami">畳数</option>
          <option value="meter">平米</option>
        </select>
        <div>Result: {calculateResult()}</div>
      </header>
    </div>
  );
}

export default App;
