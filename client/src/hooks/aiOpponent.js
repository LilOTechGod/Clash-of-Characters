//importing 
import { useEffect, useState } from "react";

export const useAIOpponent = turn => {
    const [aiChoice, setAIChoice] = useState('');

    useEffect(() => {
        if (turn === 1) {
            const options = ['attack', 'strike'];
            setAIChoice(options[Math.floor(Math.random() * options.length)])
        }
    }, [turn]);
    return aiChoice;
};

export default useAIOpponent;