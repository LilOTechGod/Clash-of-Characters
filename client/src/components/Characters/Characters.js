import {selectBtn, charImages} from './index.css';

export const CharSelection = () => {

    const charList = [
        {
            id: 1,
            link: "flyEye",
            url: "../assets/Monsters/FlyingEye/Flight.png"
        },
        {
            id: 2,
            link: "goblin",
            url: "../assets/Monsters/Goblin/Idle.png"
        },
        {
            id: 3,
            link: "mushroom",
            url: "../assets/Monsters/Mushroom/Idle.png"
        },
        {
            id: 4,
            link: "skeleton",
            url: "../assets/Monsters/Skeleton/Idle.png"
        }
    ]

    return (
        <div className={styles.main}>
            <ul className="flex col=lg-3">
                {charList.map(({id, link}) => (            
                <li key={id} className={charImages} src={url} alt={link}> 
                    {link} 
                </li>
                ))}
            </ul>
            <button className={selectBtn}>
                Select
            </button>
        </div>
    );
};