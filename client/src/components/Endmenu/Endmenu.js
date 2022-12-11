import React from 'react';
import { Link } from "react-router-dom";
import './index.css';
import EndMenuFlyIdle from "./EndMenuFlyIdle";


export const EndMenu = () => {
    return (
        <div className="endmenu-page">
         
            <Link className="end-button" to="/characterSelect">
                CHOOSE CHARACTER
            </Link>
          
            <Link className="end-button" to="/battleScreen">
                PLAY AGAIN
            </Link>
           
            <Link className="end-button" to="/">
                ENDGAME
            </Link>
            
            <div className="endFlyIdle">
            <EndMenuFlyIdle /> 
            </div>
        </div>
    );
};

export default EndMenu;
