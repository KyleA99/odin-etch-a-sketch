import { clearGrid } from "./clearGrid.js";
import { darkenColor } from "./darkenColor.js";

/**
 * Creates a grid of div elements in the specified container, with each cell changing color when hovered over or touched on mobile devices.
 * @param {HTMLElement} gridContainer - The container where the grid will be created.
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

        // Add "mouseenter" event listener for desktop
        gridTile.addEventListener("mouseenter", () => {
            colorIntensity += 10;
            const darkenedColor = darkenColor([128, 128, 128], colorIntensity);
            gridTile.style.backgroundColor = darkenedColor;
        });

        // Add "touchmove" event listener for tablet/mobile
        gridContainer.addEventListener("touchmove", (event) => {
            event.preventDefault();
            const touch = event.touches[0];
            const targetTile = document.elementFromPoint(touch.clientX, touch.clientY);
            
            if (targetTile === gridTile) {
                colorIntensity += 10;
                const darkenedColor = darkenColor([128, 128, 128], colorIntensity);
                targetTile.style.backgroundColor = darkenedColor;
            }
        });

        gridContainer.appendChild(gridTile);
    }
};