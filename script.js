const gridContainer = document.querySelector("#grid-container");
/**
 * Creates a grid of div elements in the specified container, with each cell changing color when hovered over.
 * @param {number - integer} gridSize - The size of the grid (number of rows and columns)
 */
const createGrid = (gridSize) => {
    for (let i = 0; i < gridSize * gridSize; i++) {
        const gridTile = document.createElement("div");
        gridTile.classList.add("gridTileContent");
        // Set the height and width of the gridTile divs
        gridTile.style.height = `${100 / gridSize}%`;
        gridTile.style.width = `${100 / gridSize}%`;

        let colorIntensity = 0;

        // An event listener is attached to gridTile that changes gridTile to be gray when the mouse enters each gridTile
        gridTile.addEventListener("mouseenter", (event) => {
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
 * Calculates a darkened version of the given RGB color based on the specified intensity.
 * @param {number[]} color - The RGB color to darken.
 * @param {number} intensity - The percentage by which to darken the color (0-100).
 * @returns {number[]} - The darkened RGB color.
 */
const calculateDarkenedColor = (color, intensity) => {
    return color.map(channel => Math.max(channel - Math.floor(channel * intensity / 100), 0));
};

/**
 * Darkens a given color by a specified intensity.
 * @param {number[]} color - The RGB color to darken.
 * @param {number - integer} intensity - The percentage by which to darken the color (0-100).
 * @returns {string} - The darkened color in hexadecimal format (#RRGGBB).
 */
const darkenColor = (color, intensity) => {
    const [r, g, b] = calculateDarkenedColor(color, intensity);
    const darkenedColor = `#${r.toString(16).padStart(2, "0")}${g.toString(16).padStart(2, "0")}${b.toString(16).padStart(2, "0")}`;
    return darkenedColor;
};

const promptButton = document.getElementById("prompt-button");
/**
 * Prompts the user to specify the desired grid size and creates the grid accordingly.
 */
const promptGridSize = () => {
    clearGrid();

    const gridValue = prompt("Please specify the desired grid size. E.g. 64 specifies a 64x64 grid.");
    const gridSize = parseInt(gridValue);

    if (gridSize > 100) {
        alert("Exceeds maximum grid size of 100x100");
    } else {
        createGrid(gridSize);
    }
};
promptButton.addEventListener("click", promptGridSize);

const clearButton = document.getElementById("clear-button");
/**
 * Clears the grid container by removing all child elements
 */
const clearGrid = () => {
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }
};
clearButton.addEventListener("click", clearGrid);