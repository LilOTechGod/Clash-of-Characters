import React from 'react'
import styles from './healthBar.css'

export const HealthBar =({main=false,health,maxHealth,label,name,level}) => {
return(
  <div
    className={styles.main}
    style={{ backgroundColor: main ? "#ff0000" : "#0000ff" }}
  >
    <div className={styles.info}>
      <div className={styles.name}>{name}</div>
      <div className={styles.level}>Lvl {level}</div>
    </div>

    <div className={styles.health}>
    <div className={styles.main}>
    <div className={styles.label}>{label}</div>
    <div className={styles.max}>
      <div
        className={styles.value}
        style={{ width: `${(health / maxHealth) * 100}%` }}
      ></div>
    </div>
  </div>
    </div>
  </div>
  
)
}

export default HealthBar;