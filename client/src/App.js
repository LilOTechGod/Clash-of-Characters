import React from 'react'
import { useState, useEffect } from 'react';
import styles from './index.css'
import { StartMenu } from './components/StartMenu/StartMenu.js';

  const App = () => {
  // const [winner, setWinner] = useState();
  const [mode, setMode] = useState('start');

  // useEffect(() => {
  //   if (mode === 'battle') {
  //     setWinner(undefined);
  //   }
  // }, [mode]);

  return (
    <div className={styles.main}>
      {mode === 'start' && (
        <StartMenu onStartClick={() => setMode('battle')} />
      )}

      {mode === 'battle' && <>Battle Mode </> }

      {mode === 'gameOver' && <>Game Over </> }

    </div>
  );
};

export default App