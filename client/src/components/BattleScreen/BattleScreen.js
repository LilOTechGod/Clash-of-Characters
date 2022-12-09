import './battleScreen.css';

export const BattleScreen=({onAttack, onDefend, onCounter, onStrike})=>{
    return(
        <div>
            <div className="container">
                    <button className="buttonAttack" onClick={onAttack}>Attack</button>
                    <div className="buttonDefend" onClick={onDefend}>Defend</div>
                    <div className="buttonDefend" onClick={onCounter}>Counter</div>
                    <div className="buttonAttack" onClick={onStrike}>Strike</div>
            </div>
        </div>);
}

export default BattleScreen;