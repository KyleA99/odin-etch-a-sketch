/**
 * Prompts the user to specify the desired grid size and creates the grid accordingly.
 */
export const promptGridSize = (gridContainer) => {
    clearGrid(gridContainer);

    const gridValue = prompt("Please specify the desired grid size. E.g. 64 specifies a 64x64 grid.");
    const gridSize = parseInt(gridValue);

    if (isNaN(gridSize)) {
        alert("Please enter a valid number for the grid size.");
    } else if (gridSize > 100) {
        alert("Exceeds maximum grid size of 100x100");
    } else {
        createGrid(gridContainer, gridSize); // Pass gridSize as an argument
    }
};

export const createGrid = (gridContainer, gridSize) => {
    clearGrid(gridContainer); // Clear the grid container

    for (let i = 0; i < gridSize * gridSize; i++) {
        const gridTile = document.createElement("div");
        gridTile.classList.add("gridTileContent");
        gridTile.style.height = `${100 / gridSize}%`;
        gridTile.style.width = `${100 / gridSize}%`;

        let colorIntensity = 0;

        gridTile.addEventListener("mouseenter", (event) => {
            colorIntensity += 10;
            const darkenedColor = darkenColor([128, 128, 128], colorIntensity);
            event.target.style.backgroundColor = darkenedColor;
        });

        gridContainer.appendChild(gridTile);
    }
};

export const clearGrid = (gridContainer) => {
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }
};

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

/**
 * Clears the grid container by removing all child elements
 */
export const clearGrid = () => {
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }
};