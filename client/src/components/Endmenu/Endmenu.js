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
                LOGOUT
            </Link>
            </div>
        </div>
    );
};

export default EndMenu;



// import styles from '/Users/brandonknight/Documents/Clash-Of-Characters-vs2/Clash-of-Characters/client/src/components/Endmenu/index.cssd'
// import BG from '../../assets/oak_woods_v1.0/background/background_layer_2.png';
// import '../StartMenu/index.css';
// import { useNavigate } from "react-router-dom";
// import React from 'react';

// export const EndMenu = () => {
//     const navigate = useNavigate();
//     const onStartClick = () => navigate('/characterSelect');
//     return (
//         <div className={styles.main}>
//             <button className={styles.startButton} onClick={onStartClick} id='srtButton'>
//                 CHOOSE CHARACTER
//             </button>
//             <div className='bg2'>
//                 <img src={BG} className='secondbg' alt="background-of-trees"></img>
//             </div>
//         </div>
//     );
// };

// export default EndMenu;