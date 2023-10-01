/**
 * Clears the grid container by removing all child elements
 */
export const clearGrid = (gridContainer) => {
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }
};