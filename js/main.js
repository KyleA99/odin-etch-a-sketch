import { promptGridSize, clearGrid } from "./functionLibrary.js";

const promptButton = document.getElementById("prompt-button");
const gridContainer = document.querySelector("#grid-container");
const clearButton = document.getElementById("clear-button");

promptButton.addEventListener("click", () => promptGridSize(gridContainer));
clearButton.addEventListener("click", () => clearGrid(gridContainer));