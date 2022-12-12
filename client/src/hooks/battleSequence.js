import { useEffect, useState } from "react";
import { opponentStats, playerStats } from "../shared/characters";
import  {onattack,onstrike} from "../utils/damage";
import {wait} from "../utils/wait";

export var textBox="Your Turn!";
export const useBattleSequence = sequence => {
    const [turn, setTurn] = useState(0);
    const [inSequence, setInSequence] = useState(false);
    const [playerHealth, setPlayerHealth] = useState(playerStats.maxHealth);
    const [opponentHealth, setOpponentHealth] = useState(opponentStats.maxHealth);
    const [playerAnimation, setPlayerAnimation] = useState('static');
    const [opponentAnimation, setOpponentAnimation] = useState('static');

    useEffect(() => {
        const { mode, turn } = sequence;
        if (mode) {
          const attacker = turn === 0 ? playerStats : opponentStats;
          const receiver = turn === 0 ? opponentStats : playerStats;
    
          switch (mode) {
            case 'attack': {
              const damage = onattack({ attacker, receiver });
              (async () => {
                setInSequence(true);
                textBox=`${attacker.name} chose ATTACK!`
              turn === 0
              ? setOpponentAnimation('attack')
              : setPlayerAnimation('attack');

             await wait(100);

             turn === 0
              ? setOpponentAnimation('static')
              : setPlayerAnimation('static');
             await wait(500);

              turn === 0
              ? setPlayerAnimation('damage')
              : setOpponentAnimation('damage');
              await wait(750);

             turn === 0
              ? setPlayerAnimation('static')
              : setOpponentAnimation('static');
              
             turn === 0
              ? setOpponentHealth(h => (h - damage > 0 ? h - damage : 0))
              : setPlayerHealth(h => (h - damage > 0 ? h - damage : 0)); 
            await wait(2500);
            setTurn(turn === 0 ? 1 : 0);
            setInSequence(false);
          })();
              break;
            }


            case 'strike': {
                const damage = onstrike({ attacker, receiver });
                (async () => {
                  setInSequence(true);
                  textBox=`${attacker.name} chose STRIKE!`
                turn === 0
                ? setOpponentAnimation('attack')
                : setPlayerAnimation('attack');
              await wait(100);
  
              turn === 0
                ? setOpponentAnimation('static')
                : setPlayerAnimation('static');
              await wait(500);
  
              turn === 0
                ? setPlayerAnimation('damage')
                : setOpponentAnimation('damage');
              await wait(750);
  
              turn === 0
                ? setPlayerAnimation('static')
                : setOpponentAnimation('static');
                
              turn === 0
                ? setOpponentHealth(h => (h - damage > 0 ? h - damage : 0))
                : setPlayerHealth(h => (h - damage > 0 ? h - damage : 0)); 
              await wait(2500);

              textBox=`${receiver.name} turn!`
              await wait(1500);

              setTurn(turn === 0 ? 1 : 0);
              setInSequence(false);
                })();
                break;
            }

    }}},[sequence])


    return {
        turn,
        inSequence,
        playerHealth,
        opponentHealth,
        playerAnimation,
        opponentAnimation,
    };

}

export default useBattleSequence;