import { clearGrid } from "./clearGrid.js";
import { darkenColor } from "./darkenColor.js";

/**
 * Creates a grid of div elements in the specified container, with each cell changing color when hovered over.
 * @param {number} gridSize - The size of the grid (number of rows and columns).
 */
export const createGrid = (gridContainer, gridSize) => {
    clearGrid(gridContainer);

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