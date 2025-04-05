import { useState } from "react";
/**
 * @param {number} max maximum random number
 * @returns {number} a random integer between 1 and max, inclusive.
 */
function randomInt(max) {
    return Math.floor(Math.random() * max) + 1;
}

export function SingleDie(props) {
    /**
     * Challenge 1: complete this component.  Use your reading or Google as references if you would like.
     *
     * 1. Make this show up in the page by putting it in the dice-container div in DiceManager.  Make sure you pass it proper props!
     * 2. Make the roll button roll the die.
     *   2a. Store the roll in state.
     *   2b. Create a function that calls randomInt, and sets state
     *   3c. Pass your created function to the button's onClick property.
     */
    const [roll, setRoll] = useState(null);
    function doRoll(){
        const roll = randomInt(props.n);
        console.log(props.callRoll(roll));
        setRoll(roll);
    }

    return (
        <div>
            <h2>Roll a {props.n}-sided die</h2>
            <p>Result: {roll}</p>
            <button onClick={doRoll}>Roll!</button>
        </div>
    );
}
