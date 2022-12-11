import './battleScreen.css';
import Canvas from "./Canvas/Canvas"
import HealthBar from './HealthBar/HealthBar';
import  useAIOpponent from '../../hooks/aiOpponent';
import useBattleSequence from "../../hooks/battleSequence";
import React, { useEffect, useState } from 'react';
import {wait} from "../../utils/wait";
import { opponentStats,playerStats } from '../../shared/characters';
import MushIdle from "../Animations/Mushroom/Idle";
import SkeleIdle from "../Animations/Skeleton/Idle";
import MushAttack from "../Animations/Mushroom/Attack";
import SkeleAttack from "../Animations/Skeleton/Attack";
import MushCounter from "../Animations/Mushroom/Counter";
import SkeleCounter from "../Animations/Skeleton/Counter";
import { useNavigate } from "react-router-dom";


export const BattleScreen=()=>{
    const [sequence,setSequence] = useState({});

    const {
        turn,
        inSequence,
        playerHealth,
        opponentHealth,
        playerAnimation,
        opponentAnimation} = useBattleSequence(sequence);
    const aiChoice = useAIOpponent(turn);
    const navigate = useNavigate();
     function onGameEnd(outcome){
        //pass through the database 
        navigate('/endMenu');
     }

    useEffect(() => {
        if (aiChoice && turn === 1 && !inSequence) {
            setSequence({ turn, mode: aiChoice });
        }
        }, [turn, aiChoice, inSequence]);
    
        useEffect(() => {
        if (playerHealth === 0 || opponentHealth === 0) {
            (async () => {
            await wait(1000);
            onGameEnd(playerHealth === 0 ? "loss" : "win");
            })();
        }
        }, [playerHealth, opponentHealth]);

    let playerImg;
    switch(playerAnimation){
        case "attack":{playerImg=<MushAttack/>; break}
        case "static":{playerImg=<MushIdle/>; break}
        case "damage":{playerImg=<MushCounter/>; break}
    }
    let opponentImg;
    switch(opponentAnimation){
        case "attack":{opponentImg=<SkeleAttack/>; break}
        case "static":{opponentImg=<SkeleIdle/>; break}
        case "damage":{opponentImg=<SkeleCounter/>; break}
    }
    return(
        <div>
            <div id="playerSummary">
                <HealthBar
                main={true}
                health={playerHealth}
                maxHealth={playerStats.maxHealth}
                label={"health"}
                name={playerStats.name}
                level={playerStats.level}
                />
            </div>
            <div id="opponentSummary">
                <HealthBar
                main={false}
                health={opponentHealth}
                maxHealth={opponentStats.maxHealth}
                label={"health"}
                name={opponentStats.name}
                level={opponentStats.level}
                />
            </div>

            <Canvas/>

            <div id="playerPos">{playerImg}</div>
            <div id="opponentPos">{opponentImg}</div>
            

            <div id="btnPosition">
                   <button className="buttonAttack" onClick={console.log("Attack")}>Attack</button>
                    <button className="buttonDefend" onClick={console.log("Defend")}>Defend</button>
                    <button className="buttonDefend" onClick={console.log("Counter")}>Counter</button>
                  <button className="buttonAttack" onClick={console.log("Strike")}>Strike</button>

           </div>

        </div>);
}

export default BattleScreen;