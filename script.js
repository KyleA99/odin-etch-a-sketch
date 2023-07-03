let gridSize = "";

// Selects the element with the ID "grid-container" and assigns it to the variable gridContainer.
let gridContainer = document.querySelector("#grid-container");

/**
 * Generates a grid of div elements
 */ 
const createGrid = (gridSize) => {
    for (let i = 0; i < gridSize * gridSize; i++) {
        // Creates a div and assigns it to gridTile
        const gridTile = document.createElement("div");
        // gridTile is given the class gridTileContent
        gridTile.classList.add("gridTileContent");
        // Set the height and width of the gridTile divs
        gridTile.style.height = `${100 / gridSize}%`;
        gridTile.style.width = `${100 / gridSize}%`;

        let colorIntensity = 0;

        // An event listener is attached to gridTile that changes gridTile to be gray when the mouse enters each gridTile
        gridTile.addEventListener("mouseenter", (event) => {
            // Increases (darkens) the color intensity by 10
            colorIntensity += 10;
            // Calls the result of darkenColor() and assigns the darkened RGB color of gray to a variable
            const darkenedColor = darkenColor([128, 128, 128], colorIntensity);
            event.target.style.backgroundColor = darkenedColor;
        });
      
        gridContainer.appendChild(gridTile);
    }
};
createGrid();

/**
 * Darkens a given color by a specified intensity.
 * @param {string} color - The RGB color to darken. For gray, use [128, 128, 128]
 * @param {number} intensity - The percentage by which to darken the color (0-100)
 * @returns {string} - The darkened color
 */
const darkenColor = (color, intensity) => {
    // Calculate the darker color
    const r = Math.max(color[0] - Math.floor(color[0] * intensity / 100), 0);
    const g = Math.max(color[1] - Math.floor(color[1] * intensity / 100), 0);
    const b = Math.max(color[2] - Math.floor(color[2] * intensity / 100), 0);
  
    // Convert RGB values to hex color (necessary for backgroundColor of gridTile styling in the event listener)
    const darkenedColor = "#" + r.toString(16).padStart(2, '0') + g.toString(16).padStart(2, '0') + b.toString(16).padStart(2, '0');
    return darkenedColor;
};

const promptGridSize = () => {
    // Clear the existing grid if a new prompt() result is inputted by user
    clearGrid();

    const gridValue = prompt("Please specify the desired grid size. E.g. 64 specifies a 64x64 grid.");
    // Converts gridSize value from a string to a number
    const gridSize = parseInt(gridValue);

    // Calls createGrid() and passes gridSize as an argument
    createGrid(gridSize);

    // Throws an error when grid sizes exceed the maximum, 100x100 grid size
    try {
        if (gridSize > 100) throw new Error("exceeds maximum grid size of 100x100");
    } catch(err) {
        alert("Specified grid size " + err);
    }
};

/**
 * Clears the grid container by removing all child elements
 */
const clearGrid = () => {
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }
};