import {selectBtn} from './index.css';
import { useNavigate } from "react-router-dom";
import {SpriteAnimator} from 'react-sprite-animator';
import flyEyeIdle from "../../assets/Monsters/FlyingEye/Flight.png";
import goblinIdle from "../../assets/Monsters/Goblin/Idle.png";
import mushroomIdle from "../../assets/Monsters/Mushroom/Idle.png";
import skeletonIdle from "../../assets/Monsters/Skeleton/Idle.png";

const CharacterSelect = () => {

    const charList = [
        {
            id: 1,
            monster: 'Fly Eye',
            src: flyEyeIdle
        },
        {
            id: 2,
            monster: 'Goblin',
            src: goblinIdle,
        },
        {
            id: 3,
            monster: 'Mushroom',
            src: mushroomIdle,
        },
        {
            id: 4,
            monster: 'Skeleton',
            src: skeletonIdle,
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
                        <SpriteAnimator
                            width={150}
                            height={150}
                            scale={.5}
                            sprite={src}
                            shouldAnimate={true}
                            startFrame={0}
                        />
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