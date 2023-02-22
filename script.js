let gridContainer = document.querySelector("#grid-container");

function createGrid() {
    for (let i = 0; i < 257; i++) {
        let divSquares = document.createElement("div");
        divSquares.classList.add("divSquaresContent");
        divSquares.textContent = "Test text";
        divSquares.style.color = "black";
        divSquares.style.border = "solid";
        divSquares.style.backgroundColor = "blue";

        gridContainer.appendChild(divSquares);
    }
}
createGrid();