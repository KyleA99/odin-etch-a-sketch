const clearGrid = require("./clearGrid");
const createGrid = require("./createGrid");

/**
 * Prompts the user to specify the desired grid size and creates the grid accordingly.
 */
const promptGridSize = (gridContainer) => {
    clearGrid.clearGrid(gridContainer);

    const gridValue = prompt("Please specify the desired grid size. E.g. 64 specifies a 64x64 grid.");
    const gridSize = parseInt(gridValue);

    if (isNaN(gridSize)) {
        alert("Please enter a valid number for the grid size.");
    } else if (gridSize > 100) {
        alert("Exceeds maximum grid size of 100x100");
    } else {
        createGrid.createGrid(gridContainer, gridSize);
    }
};

module.exports = {
    promptGridSize
};