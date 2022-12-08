import {selectBtn} from './index.css';
import Animator from './Animator';

const Characters = () => {

    const charList = [
        {
            id: 1,
            link: "flyEyeImage",
            url: "../../assets/Monsters/FlyingEye/Flight.png"
        },
        {
            id: 2,
            link: "goblinImage",
            url: "../assets/Monsters/Goblin/Idle.png"
        },
        {
            id: 3,
            link: "mushroomImage",
            url: "../assets/Monsters/Mushroom/Idle.png"
        },
        {
            id: 4,
            link: "skeletonImage",
            url: "../assets/Monsters/Skeleton/Idle.png"
        }
    ]

    return (
        <div>
            <div className="character">
                <ul className="flex col-lg-3">
                    {charList.map(({id, link, url}) => (            
                    <li key={id} className={link}> 
                        <img src={url} alt={link}/>
                    </li>
                    ))}
                    <Animator/>
                </ul>
                <button className={selectBtn}>
                    Select
                </button>
        </div>
        </div>
    );
};

export default Characters;