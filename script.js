let gridContainer = document.querySelector("#grid-container");

function createGrid() {
    for (let i = 0; i < 256; i++) {
        let etchSquare = document.createElement("div");
        etchSquare.classList.add("etchSquareContent");
        etchSquare.textContent = "Test";

        etchSquare.addEventListener(
            "mouseenter",
            (event) => {
                event.target.style.backgroundColor = "blue";
            }
        )

        gridContainer.appendChild(etchSquare);
    }
}
createGrid();