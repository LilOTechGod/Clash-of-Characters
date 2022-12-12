import './index.css';
import { useNavigate } from "react-router-dom";
import FlyIdle from "../Animations/Flyeye/Idle";
import GobIdle from "../Animations/Goblin/Idle";
import MushIdle from "../Animations/Mushroom/Idle";
import SkeleIdle from "../Animations/Skeleton/Idle";

const CharacterSelect = ({selectFighter}) => {

    const navigate = useNavigate();
    const onStartClick = () => navigate('/battleScreen');

    return (
        <div className="container">
           
                <ul className="charcontainers">
                    {/* updates state in parent component to player choice, FlyEye */}
                    <li className="monsterSprite">
                        <FlyIdle />
                        <button className="selectBtn" onClick={() => {
                                onStartClick();
                                selectFighter('Flyeye');
                            }}>
                        Fly Eye
                        </button>
                    </li>
                    {/* Player selected Goblin */}
                    <li className="monsterSprite">
                        <GobIdle />
                        <button className="selectBtn" onClick={() => {
                                onStartClick();
                                selectFighter('Goblin');
                            }}>
                        Goblin
                        </button>
                    </li>
                    {/* Player selected Mushroom */}
                    <li className="monsterSprite">
                        <MushIdle />
                        <button className="selectBtn" onClick={() => {
                                onStartClick();
                                selectFighter('Mushroom');
                            }}>
                        Mushroom
                        </button>
                    </li>
                    {/* Player selected Skeleton */}
                    <li className="monsterSprite">
                        <SkeleIdle />
                        <button className="selectBtn" onClick={() => {
                                onStartClick();
                                selectFighter('Skeleton');
                            }}>
                        Skeleton
                        </button>
                    </li>                    
                </ul>
        </div>
    );
};

export default CharacterSelect;