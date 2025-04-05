import { useState } from "react";

interface ISingleDieProps {
    n: number;
    roll: number | null;
    onRoll: () => void;
}

export function SingleDie(props: ISingleDieProps) {
    return (
        <div>
            <h2>Roll a {props.n}-sided die</h2>
            <p>Result: {props.roll}</p>
            <button onClick={props.onRoll}>Roll!</button>
        </div>
    );
}
