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

        // Set the height of the gridTile div
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