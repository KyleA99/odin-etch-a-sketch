/**
 * Clears the grid container by removing all child elements
 */
const clearGrid = (gridContainer) => {
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }
};

module.exports = {
  clearGrid
};