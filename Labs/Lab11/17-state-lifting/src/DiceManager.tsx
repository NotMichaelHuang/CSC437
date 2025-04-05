import { useState } from "react";
import {SingleDie} from "./SingleDie.tsx";

interface IDieState {
    numSides: number;
    currentRoll: number | null;
}

export function DiceManager() {
    /**
     * Your goal: make the Roll All button functional.
     * Work-ahead goal: add second DiceManager and a button to roll both DiceManagers’ die simultaneously
     */ 

    const [diceState, setDiceState] = useState<IDieState[]>([
        {numSides: 6, currentRoll: null},
        {numSides: 8, currentRoll: null},
        {numSides: 12, currentRoll: null},
        {numSides: 20, currentRoll: null},
    ])

    function randomInt(max: number) {
        return Math.floor(Math.random() * max) + 1;
    }

    function handleRollAllClicked() {
        const newState = diceState.map(die => ({
            ...die,
            currentRoll: randomInt(die.numSides)
        }))
        setDiceState(newState); 
    }

    function handleSingleRoll(i: number){
        const newState = diceState.slice();
        newState[i] = {
            ...newState[i],
            currentRoll: randomInt(newState[i].numSides)
        }
        setDiceState(newState);
    }

    return(
        <div>
            <h1>Dice Roller</h1>
            <button onClick={handleRollAllClicked}>Roll all</button>
            <div className="dice-container">
                {diceState.map((die, i) => (
                    <SingleDie 
                        key={i}
                        roll={die.currentRoll} 
                        n={die.numSides}
                        onRoll={() => handleSingleRoll(i)}
                    />
                ))}
            </div>
        </div>
    );
}
