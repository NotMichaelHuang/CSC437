"use strict";
/*
"use strict" opts in to a stricter version of JS that makes suspicious code throw errors instead of silently succeeding.
It is only necessary for "classic" mode JS.  Module JS always runs in strict mode.
 */

function addToList() {
    /*
    Challenge 1 TODO: fill in this function so it adds <li>Making Silas happy</li> to the existing list.

    1.  Create the element using document.createElement("tagName")
    1b. Set the element's text using element.innerText
    2.  Get a reference to the ul using document.querySelector("yourCssSelector")
    2b. Append the newly-created li to the ul using ulReference.append(myNewLi)
     */

    const ul = document.getElementById('csHardships');
    const li = document.createElement('li');
    li.textContent ='Making Silas Happy';

    ul.appendChild(li);
}

/* Challenge 2 */
document.querySelector('button').addEventListener('click', addToList);
/*
const btn = document.querySelector('button');
btn.addEventListener("click", addToList);
*/


/**
 * Increments an element's numerical attribute by some number.  Negative numbers will decrement the attribute.
 *
 * @param {Element} element element to modify
 * @param {string} attrName the attribute name to modify
 * @param {number} howMuch how much to increment the attribute by
 */
function incrementAttribute(element, attrName, howMuch) {
    const attributeValue = element.getAttribute(attrName);
    element.setAttribute(attrName, Number.parseFloat(attributeValue) + howMuch);
}

function attachKeyboardListener() {
    /*
    Challenge 3 TODO: fill in this function so it makes the <circle> element go up, left, down, right with the WASD keys

    You should attach a keydown listener to document.body.
    Given an keyboard event object called `e`, `e.key` gets the pressed key as a string.
    Use the incrementAttribute function, defined above, to help.  You want to modify the <circle>'s cx and cy properties.
    Careful: cx will behave as expected, but increasing cy will cause the circle to go DOWN.
    */ 

    document.body.addEventListener("keydown", (e) =>{
        const theKey = e.key;
        const circle = document.querySelector("circle");
        switch(theKey)
        {
            case "w":
                incrementAttribute(circle, "cy", -5);
                break;
            default:
                incrementAttribute(circle, "cx", 5);
        }
    });
}
attachKeyboardListener();
