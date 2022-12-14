import styles from './index.css';
import BG from '../../assets/oak_woods_v1.0/background/background_layer_2.png';
import '../StartMenu/index.css';
import { useNavigate } from "react-router-dom";
import React from 'react';

export const StartMenu = () => {
    const navigate = useNavigate();
    const onStartClick = () => navigate('/characterSelect');
    return (
        <div className={styles.main}>
            <button className={styles.startButton} onClick={onStartClick} id='srtButton'>
                Push Start 
            </button>
            <div className='bg2'>
                <img src={BG} className='secondbg' alt="background-of-trees"></img>  
            </div>
        </div>
    );
};

export default StartMenu;