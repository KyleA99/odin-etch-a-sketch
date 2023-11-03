const calculateDarkenedColor = require("./calculateDarkenedColor");

/**
 * Darkens a given color by a specified intensity.
 * @param {number[]} color - The RGB color to darken.
 * @param {number - integer} intensity - The percentage by which to darken the color (0-100).
 * @returns {string} - The darkened color in hexadecimal format (#RRGGBB).
 */
const darkenColor = (color, intensity) => {
    const [r, g, b] = calculateDarkenedColor.calculateDarkenedColor(color, intensity);
    const darkenedColor = `#${r.toString(16).padStart(2, "0")}${g.toString(16).padStart(2, "0")}${b.toString(16).padStart(2, "0")}`;
    return darkenedColor;
};

module.exports = {
  darkenColor
};