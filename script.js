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