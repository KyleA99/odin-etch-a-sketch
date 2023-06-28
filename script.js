let gridSize = "";

// Selects the element with the ID "grid-container" and assigns it to the variable gridContainer.
let gridContainer = document.querySelector("#grid-container");

/**
 * Generates a grid of div elements
 */ 
function createGrid(gridSize) {
    for (let i = 0; i < gridSize * gridSize; i++) {
        // Creates a div and assigns it to gridTile
        let gridTile = document.createElement("div");
        // gridTile is given the class gridTileContent
        gridTile.classList.add("gridTileContent");
        // Set the height and width of the gridTile divs
        gridTile.style.height = (100 / gridSize) + "%";
        gridTile.style.width = (100 / gridSize) + "%";

        let colorIntensity = 0;

        // An event listener is attached to gridTile that changes gridTile to be gray when the mouse enters each gridTile
        gridTile.addEventListener("mouseenter", (event) => {
            // Increases (darkens) the color intensity by 10
            colorIntensity += 10;
            // Calls the result of darkenColor() and assigns the darkened color of gray to a variable
            let darkenedColor = darkenColor("gray", colorIntensity);
            event.target.style.backgroundColor = darkenedColor;
        });
      
        gridContainer.appendChild(gridTile);
    }
}
createGrid();

/**
 * Darkens a given color by a specified intensity.
 * @param {string} color - The color to darken. Can be a hexadecimal color string or "gray"
 * @param {number} intensity - The percentage by which to darken the color (0-100)
 * @returns {string} - The darkened color in hexadecimal format
 */
function darkenColor(color, intensity) {
    let hexColor = color;
    if (color === "gray") {
      hexColor = "#808080";
    }
  
    // Convert hex color to RGB values
    let r = parseInt(hexColor.substring(1, 3), 16);
    let g = parseInt(hexColor.substring(3, 5), 16);
    let b = parseInt(hexColor.substring(5, 7), 16);
  
    // Calculate the darker color
    r = Math.max(r - Math.floor(r * intensity / 100), 0);
    g = Math.max(g - Math.floor(g * intensity / 100), 0);
    b = Math.max(b - Math.floor(b * intensity / 100), 0);
  
    // Convert RGB values back to hex color
    let darkenedColor = "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
    return darkenedColor;
}

/**
 * Converts a decimal component value to its two-digit hexadecimal representation
 * @param {number} c - The decimal component value (0-255)
 * @returns {string} - The two-digit hexadecimal representation of the component
 */
function componentToHex(c) {
    let hex = c.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
}

function promptGridSize() {
    let gridSize = prompt("Please specify the desired grid size.  E.g. 64 specifies a 64x64 grid.");
    // Converts gridSize value from a string to a number
    gridSize = parseInt(gridSize);

    console.log(gridSize);

    // Calls createGrid() and passes gridSize as an argument
    createGrid(gridSize);

    // Throws an error when grid sizes exceed the maximum, 100x100 grid size
    try {
        if (gridSize > 100) throw "exceeds maximum grid size of 100x100"
    } catch(err) {
        alert ("Specified grid size " + err);
    }
}