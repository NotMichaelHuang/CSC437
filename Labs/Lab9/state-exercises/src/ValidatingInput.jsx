import { useState } from "react";

export function ValidatingInput(props) {
    /**
     * Challenge 1
     *
     * Display a message under the input that says "This field cannot be blank" whenever the field is blank
     * 1.  Import ValidatingInput into DiceManager -- import { ValidatingInput } from "./ValidatingInput.jsx"
     * 2.  Render a <ValidatingInput /> inside DiceManager so you can see it
     * 3.  Use conditional rendering based on the input's current value, which is already being managed by useState.
     *
     * Extra challenge 1b (if you're waiting for others to finish)
     *     Display the message ONLY after the user has finished typing in the input (after the input has lost focus)
     */
    const [value, setValue] = useState("");
    const [isErrorShowing, setIsErrorShowing] = useState(false);
    return (
        <div>
            <input
                onChange={e => setValue(e.target.value)}
                value={value}
                onblur = {(e) => setIsErrorShowing(e.target.value === " ")}
            />
            {value === "" && <p>This filed cannot be empty</p>}
        </div>
    );
}
