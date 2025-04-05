const chessboardTemplate = [ // You can pretend that these are HTML elements
    "A1", "A2", "A3", "A4",
    "B1", "B2", "B3", "B4",
    "C1", "C2", "C3", "C4",
    "D1", "D2", "D3", "D4",
];

/**
 * Takes in an array representing HTML elements in a chessboard, and returns a copy of the array with every other
 * element modified.
 */
function makeEveryOtherCellWhite(chessboard) {
    const copy = chessboard.slice(); // Create a shallow copy of the chessboard
    for (let i = 0; i < copy.length; i += 2) {
        copy[i] = "white";
    }
    return copy;
}

function makeEveryOtherCellABg(chessboard) {
    const copy = chessboard.slice(); // Create a shallow copy of the chessboard
    for (let i = 0; i < copy.length; i += 2) {
        copy[i] = {backgroundColor: copy[i]};
    }
    return copy;
}

function makeEveryOtherCellLetter(chessboard) {
    const copy = chessboard.slice(); // Create a shallow copy of the chessboard
    for (let i = 0; i < copy.length - 1; i += 2) {
        copy[i] = copy[i][0];
    }
    return copy;
}

function modOne(something)
{
   return "white"; 
}

function modTwo(something)
{
    return {backgroundColor: something};
}

function modThree(something)
{
   return something[0]; 
}

function makeEveryOtherCell(chessboard, modFxn) {
    const copy = chessboard.slice(); // Create a shallow copy of the chessboard
    for (let i = 0; i < copy.length - 1; i += 2) {
        const modified = modFxn(copy[i]);
        copy[i] = modified;
    }
    return copy;
}

const result_one = makeEveryOtherCell(chessboardTemplate, () => "white");
const result_two = makeEveryOtherCell(chessboardTemplate, x => ({backgroundColor: x}));
const result_three = makeEveryOtherCell(chessboardTemplate, x => x[0]);
