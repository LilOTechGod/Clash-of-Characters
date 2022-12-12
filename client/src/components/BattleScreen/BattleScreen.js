import './battleScreen.css';
import "./Canvas/canvas.css"
import HealthBar from './HealthBar/HealthBar';
import  useAIOpponent from '../../hooks/aiOpponent';
import useBattleSequence from "../../hooks/battleSequence";
import React, { useEffect, useState } from 'react';
import {wait} from "../../utils/wait";
import { opponentStats,playerStats } from '../../shared/characters';
import FlyIdle from "../Animations/Flyeye/Idle";
import GobIdle from "../Animations/Goblin/Idle";
import MushIdle from "../Animations/Mushroom/Idle";
import SkeleIdle from "../Animations/Skeleton/Idle";
import FlyAttack from "../Animations/Flyeye/Attack";
import GobAttack from "../Animations/Goblin/Attack";
import MushAttack from "../Animations/Mushroom/Attack";
import SkeleAttack from "../Animations/Skeleton/Attack";
import FlyCounter from "../Animations/Flyeye/Counter";
import GobCounter from "../Animations/Goblin/Counter";
import MushCounter from "../Animations/Mushroom/Counter";
import SkeleCounter from "../Animations/Skeleton/Counter";
import { useNavigate } from "react-router-dom";
import { textBox } from '../../hooks/battleSequence';

export const BattleScreen=({selectedFighter})=>{
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
        }, [playerHealth, opponentHealth,onGameEnd]);

    let playerImg;
    // console.log({selectedFighter});
    switch (true) {
        case (selectedFighter === "Flyeye") && (playerAnimation === "attack") : {playerImg=<FlyAttack/>; break}
        case (selectedFighter === "Flyeye") && (playerAnimation === "static") : {playerImg=<FlyIdle/>; break}
        case (selectedFighter === "Flyeye") && (playerAnimation === "damage") : {playerImg=<FlyCounter/>; break}
        case (selectedFighter === "Goblin") && (playerAnimation === "attack") : {playerImg=<GobAttack/>; break}
        case (selectedFighter === "Goblin") && (playerAnimation === "static") : {playerImg=<GobIdle/>; break}
        case (selectedFighter === "Goblin") && (playerAnimation === "damage") : {playerImg=<GobCounter/>; break}
        case (selectedFighter === "Mushroom") && (playerAnimation === "attack") : {playerImg=<MushAttack/>; break}
        case (selectedFighter === "Mushroom") && (playerAnimation === "static") : {playerImg=<MushIdle/>; break}
        case (selectedFighter === "Mushroom") && (playerAnimation === "damage") : {playerImg=<MushCounter/>; break}
        case (selectedFighter === "Skeleton") && (playerAnimation === "attack") : {playerImg=<SkeleAttack/>; break}
        case (selectedFighter === "Skeleton") && (playerAnimation === "static") : {playerImg=<SkeleIdle/>; break}
        case (selectedFighter === "Skeleton") && (playerAnimation === "damage") : {playerImg=<SkeleCounter/>; break}
        default: {playerImg=<MushIdle/>; break}
    }
    
    let opponentImg;
    switch(opponentAnimation){
        case "attack":{opponentImg=<SkeleAttack/>; break}
        case "static":{opponentImg=<SkeleIdle/>; break}
        case "damage":{opponentImg=<SkeleCounter/>; break}
        default: {opponentImg=<SkeleIdle/>; break}
    }

    return(
    <div id="body">
        <div className='healthBar'>
            <div id="playerSummary">
                <HealthBar
                main={true}
                health={playerHealth}
                maxHealth={playerStats.maxHealth}
                label={"health"}
                name={selectedFighter}
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
        </div>            
            <div id="characterContainer">
                <div id="playerPos">{playerImg}</div>
                <div id="opponentPos">{opponentImg}</div>
            </div>
            <div id="textPosition">{textBox}</div>

            <div id="btnPosition">
                   <button className="buttonAttack" onClick={() => setSequence({mode:'attack', turn })}>Attack</button>
                    {/* <button className="buttonDefend" onClick={() => console.log("Defend")}>Defend</button>
                    <button className="buttonDefend" onClick={() => console.log("Counter")}>Counter</button> */}
                  <button className="buttonAttack" onClick={() => setSequence({mode:'strike', turn })}>Strike</button>
           </div>
        </div>
    );
}

export default BattleScreen;