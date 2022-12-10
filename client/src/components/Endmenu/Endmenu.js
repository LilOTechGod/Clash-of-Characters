import React from 'react';
import { Link } from "react-router-dom";
import './index.css';


export const EndMenu = () => {
    return (
        <div className="endmenu-page">
            
            <div className="end-button">
            <Link to="/characterSelect">
                CHOOSE CHARACTER
            </Link>
            </div>

            <div className="end-button">
            <Link to="/battleScreen">
                PLAY AGAIN
            </Link>
            </div>

            <div className="end-button">
            <Link to="/">
                ENDGAME
            </Link>
            </div>
        </div>
    );
};

export default EndMenu;
