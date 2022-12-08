import { useEffect, useState } from "react";
//dont have a "shared" folder yet but will need to import path from the character page with stats
import { oppenentStats, playerStats } from "";

const battleSequence = () => {
    const [turn, setTurn] = useState(0);
    const [inSequence, setInSequence] = useState(false);
    const [playerHealth, setPlayerHealth] = useState(playerStats.maxHealth);
    const [opponentHealth, setOpponentHealth] = useState(oppenentStats.maxHealth);
    const [playerAnimation, setPlayerAnimation] = useState('static');
    const [oppenentAnimation, setOpponentAnimation] = useState('static');

    useEffect(() => {
        const { mode, turn } = inSequence;

        if (mode) {

            const attacker = turn === 0 ? playerStats : opponentStats;
            const receiver = turn === 0 ? opponentStats : playerStats;

            switch (mode) {
                case 'attack':
                    const damage = attack({ attacker, receiver});



                    break;

                    default:
                        break;
            }
        }
    })


    return {
        turn,
        inSequence,
        playerHealth,
        opponentHealth,
        playerAnimation,
        opponentAnimation,
    };

}

export default battleSequence;