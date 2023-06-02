let gridContainer = document.querySelector("#grid-container");

function createGrid() {
    for (let i = 0; i < 256; i++) {
        let gridTile = document.createElement("div");
        gridTile.classList.add("gridTileContent");

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