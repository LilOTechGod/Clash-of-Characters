import './buttons.css';


export const Button=({onAttack, onDefend, onCounter, onStrike})=>{
    return(
            <div id="btnPosition">
                    <button className="buttonAttack" onClick={onAttack}>Attack</button>
                    <button className="buttonDefend" onClick={onDefend}>Defend</button>
                    <button className="buttonDefend" onClick={onCounter}>Counter</button>
                    <button className="buttonAttack" onClick={onStrike}>Strike</button>

            </div>);
}

export default Button;