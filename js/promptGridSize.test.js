const promptGridSize = require('./promptGridSize');
const clearGrid = require('./clearGrid');
const createGrid = require('./createGrid');

describe("promptGridSize", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("clears the grid container", () => {
    const gridContainer = document.createElement("div");
    const clearGridSpy = jest.spyOn(clearGrid, "clearGrid");

    promptGridSize(gridContainer);

    expect(clearGridSpy).toHaveBeenCalledWith(gridContainer);
  });

  it("handles valid input correctly", () => {
    const gridContainer = document.createElement("div");
    const createGridSpy = jest.spyOn(createGrid, "createGrid");

    // Simulate user input for a valid grid size (e.g., "64")
    jest.spyOn(global, "prompt").mockReturnValue("64");

    promptGridSize(gridContainer);

    expect(createGridSpy).toHaveBeenCalledWith(gridContainer, 64);
  });

  it("displays an alert for invalid input", () => {
    const gridContainer = document.createElement("div");
    const alertSpy = jest.spyOn(global, "alert");

    // Simulate user input for an invalid input (e.g., "abc")
    jest.spyOn(global, "prompt").mockReturnValue("abc");

    promptGridSize(gridContainer);

    expect(alertSpy).toHaveBeenCalledWith("Please enter a valid number for the grid size.");
  });
});