let gridContainer = document.querySelector("#grid-container");

function createGrid() {
    for (let i = 0; i < 256; i++) {
        let divSquares = document.createElement("div");
        divSquares.classList.add("divSquaresContent");
        divSquares.textContent = "Test";

        gridContainer.appendChild(divSquares);
    }
}
createGrid();