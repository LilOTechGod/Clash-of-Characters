import styles from './index.css';

import React from 'react';

export const StartMenu = ({ onStartClick }) => {
    return (
    <div className={styles.main}>
        <button className={styles.startButton} onClick={onStartClick}>
            Start Game 
        </button>
    </div>
    );
};