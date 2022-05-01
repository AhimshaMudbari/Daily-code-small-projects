import { useState } from 'react';
import styles from './App.module.css';
const initialnumber = 11;
function App() {
  const [number, setNumber] = useState(initialnumber);
  const clearState = () => {
    setNumber(initialnumber);
  };
  const reset = () => {
    setTimeout(clearState(), 1000);
  };
  return (
    <div className={styles.main}>
      <h1>Example to show increment and decrement of numbers Using useState</h1>
      <button
        onClick={(e) => {
          setNumber((num) => num + 1);
          e.preventDefault();
        }}
      >
        {' '}
        increase{' '}
      </button>
      <h5>{number}</h5>
      <button
        onClick={(e) => {
          setNumber((num) => num - 1);
          e.preventDefault();
        }}
      >
        {' '}
        decrease
      </button>
      <button className={styles.button} onClick={reset}>
        Reset
      </button>
    </div>
  );
}

export default App;
