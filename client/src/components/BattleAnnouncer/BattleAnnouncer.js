import { useTypedMessage } from 'hooks';
import styles from './index.css';

export const BattleAnnouncer = ({ message }) => {
  const typedMessage = useTypedMessage(message);

  return (
    <div className={styles.main}>
      <div className={styles.message}>{typedMessage}</div>
    </div>
  );
};