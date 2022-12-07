import styles from './index.css';

export const StartMenu = ({ onStartClick }) => {
    return (
    <div className={styles.main}>
        <button className={styles.startButton} onClick={onStartClick}>
            Start Game 
        </button>
    </div>
    );
};