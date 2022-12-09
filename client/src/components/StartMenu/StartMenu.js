import styles from './index.css';
import BG from '../../assets/oak_woods_v1.0/background/background_layer_2.png';
import '../StartMenu/index.css';

import React from 'react';

export const StartMenu = ({ onStartClick }) => {
    return (
        <div className={styles.main}>
            <button className={styles.startButton} onClick={onStartClick} id='srtButton'>
                Start Game
            </button>
            <div className='bg2'>
                <img src={BG} className='secondbg'></img>
            </div>
        </div>
    );
};