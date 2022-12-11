import './index.css';
import { useNavigate } from "react-router-dom";
import FlyIdle from "../Animations/Flyeye/Idle";
import GobIdle from "../Animations/Goblin/Idle";
import MushIdle from "../Animations/Mushroom/Idle";
import SkeleIdle from "../Animations/Skeleton/Idle";

const CharacterSelect = () => {

    const charList = [
        {
            id: 1,
            monster: 'Fly Eye',
            src: <FlyIdle/>
        },
        {
            id: 2,
            monster: 'Goblin',
            src: <GobIdle/>
        },
        {
            id: 3,
            monster: 'Mushroom',
            src: <MushIdle/>
        },
        {
            id: 4,
            monster: 'Skeleton',
            src: <SkeleIdle/>
        }
    ]

    const navigate = useNavigate();
    const onStartClick = () => navigate('/battleScreen');

    return (
        <div className="container">
            <div className="container">
                <ul className="charcontainers">
                    {charList.map(({id, monster, src}) => (            
                    <li key={id} className="monsterSprite">
                        {src} 
                    <button className="selectBtn" onClick={onStartClick}>
                        {monster}
                    </button>
                    </li>                    
                    ))}                    
                </ul>
            </div>
        </div>
    );
};

export default CharacterSelect;