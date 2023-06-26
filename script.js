let gridSize = "";

// Selects the element with the ID "grid-container" and assigns it to the variable gridContainer.
let gridContainer = document.querySelector("#grid-container");

/**
 * Generates a grid of div elements
 */ 
function createGrid() {
    for (let i = 0; i < 256; i++) {
        // Creates a div and assigns it to gridTile
        let gridTile = document.createElement("div");
        // gridTile is given the class gridTileContent
        gridTile.classList.add("gridTileContent");
        // Set the height and width of the gridTile divs
        gridTile.style.height = "6.25%";
        gridTile.style.width = "6.25%";

        // An event listener is attached to gridTile that changes gridTile to be blue when the mouse enters each gridTile
        gridTile.addEventListener(
            "mouseenter",
            (event) => {
                event.target.style.backgroundColor = "blue";
            }
        )
        gridContainer.appendChild(gridTile);
    }
}
createGrid();

function promptGridSize() {
    let gridSize = prompt("Please specify the desired grid size.  E.g. 64 specifies a 64x64 grid.");
    // Converts gridSize value to a number
    gridSize = parseInt(gridSize);
    createGrid(gridSize);
    console.log(gridSize);
}