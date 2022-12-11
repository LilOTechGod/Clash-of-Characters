import React from 'react'
import './healthBar.css'

export const HealthBar =({main=false,health,maxHealth,label,name,level}) => {
return(
  <div
    className="main"
    style={{ backgroundColor: main ? "#ADD8E6" : "#CF2734" }}
  >
    <div className="info">
      <div className="name">{name}</div>
      <div className="level">Lvl {level}</div>
    </div>

    <div className="health">
    <div className="main">
        <div className="label">{label}</div>
        <div className="max">
          <div
            className="health"
            style={{ width: `${(health / maxHealth) * 100}%` }}
          ></div>
        </div>
  </div>
    </div>
  </div>
  
)
}

export default HealthBar;