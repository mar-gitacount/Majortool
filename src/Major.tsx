import React, { useState, ChangeEvent } from 'react';
import logo from './logo.svg';
import './App.css';

function Major() {
  const [value, setValue] = useState('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    setValue(inputValue);
  };

  const calculateResult = () => {
    const number = parseFloat(value);
    if (!isNaN(number)) {
      return (number * 1.62).toFixed(2);
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
          メジャーツール
        </a>
        <input
          type="text"
          value={value}
          onChange={handleChange}
          placeholder="Enter a number"
        />
        <div>Result: {calculateResult()}</div>
      </header>
    </div>
  );
}

export default Major;
