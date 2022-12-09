import {selectBtn} from './index.css';
import flyEyeIdle from "../../assets/Monsters/FlyingEye/Flight.png";
import goblinIdle from "../assets/Monsters/Goblin/Idle.png";
import mushroomIdle from "../assets/Monsters/Mushroom/Idle.png";
import skeletonIdle from "../assets/Monsters/Skeleton/Idle.png";

const CharacterSelect = () => {

    const charList = [
        {
            id: 1,
            name: flyEye,
            src: flyEyeIdle
        },
        {
            id: 2,
            name: goblin,
            src: goblinIdle,
        },
        {
            id: 3,
            name: mushroom,
            src: mushroomIdle,
        },
        {
            id: 4,
            name: skeleton,
            src: skeletonIdle,
        }
    ]

    return (
        <div>
            <div className="character">
                <ul className="flex col-lg-3">
                    {charList.map(({id, src}) => (            
                    <li key={id} className={name}> 
                        <SpriteAnimator
                        width={150}
                        height={150}
                        scale={.5}
                        sprite={src}
                        shouldAnimate={true}
                        startFrame={0}
                    />
                    </li>
                    ))}                    
                </ul>
                <button className={selectBtn}>
                    Select
                </button>
        </div>
        </div>
    );
};

export default CharacterSelect;