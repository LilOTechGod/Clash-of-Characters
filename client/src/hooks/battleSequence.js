import { useState } from "react";
//dont have a "shared" folder yet but will need to import path from the character page with stats
import { oppenentStats, playerStats } from "";

export const battleSequence = () => {
    const [turn, setTurn] = useState(0);
    const [sequence, setSequence] = useState(false);
    const [playerHealth, setPlayerHealth] = useState(playerStats.maxHealth);
    const [opponentHealth, setOpponentHealth] = useState(oppenentStats.maxHealth);
}