//importing 
import { useEffect, useState } from "react";

const aiOpponent = turn => {
    const [aiChoice, setAIChoice] = useState('');

    useEffect(() => {
        if (turn === 1) {
            const options = ['attack', 'strike', 'counter', 'defend'];
            setAIChoice(options[Math.floor(Math.random() * options.length)])
        }
    }, [turn]);
    return aiChoice;
};

export default aiOpponent;