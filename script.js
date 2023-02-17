let gridContainer = document.querySelector("#grid-container");

function createGrid () {
    for (let i =0; i < 257; i++) {
        let divSquares = document.createElement("div");
        gridContainer.appendChild(divSquares);
        divSquares.classList.add("divSquaresContent");
        divSquares.style.color = black;
        divSquares.style.border = solid;
    }
}