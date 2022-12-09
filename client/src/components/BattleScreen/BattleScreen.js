import './battleScreen.css';
import Canvas from "./Canvas/Canvas"
import Buttons from "./Buttons/Buttons"
import "./Buttons/buttons.css"


export const BattleScreen=({onAttack, onDefend, onCounter, onStrike})=>{
    return(
        <div>
            <Canvas/>
            <div id="btnPosition">
            <Buttons />
            </div>
        </div>);
}

export default BattleScreen;