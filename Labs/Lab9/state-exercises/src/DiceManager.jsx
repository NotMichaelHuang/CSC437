import { useState } from "react";
import { SingleDie } from "./SingleDie";
import { ValidatingInput } from "./ValidatingInput";
import { SubtitledImg } from "./SubtitledImg";

export function DiceManager() {
    /**
     * Challenge 2: roll tracking prep
     *
     * See if you can console.log the rolls from each SingleDie from inside this component.
     *    You'll need to modify both this component and SingleDie.
     */ 

    /**
     * Challenge 3: complete the roll tracking
     *
     * setRolls() to be a new array containing the old rolls plus the new roll from a SingleDie.  DO NOT mutate "rolls"!
     */
    const [rolls, setRolls] = useState([]); 

    function logRoll(theRoll) 
    {
        let tempRolls = [ ...rolls, theRoll];
        setRolls(tempRolls);
    }

    return (
        <div>
            <h1>Dice Roller</h1>
            < ValidatingInput />
            <p>Your rolls: {rolls.join(", ")}</p>
            <div className="dice-container">
                <SingleDie n={100} callRoll={logRoll}/>
                <SingleDie n={10} callRoll={logRoll}/>
                <SingleDie n={20} callRoll={logRoll}/>
            </div>
            <SubtitledImg/>
        </div>
    );
}
