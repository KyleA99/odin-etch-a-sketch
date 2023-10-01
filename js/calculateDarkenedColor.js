/**
 * Calculates a darkened version of the given RGB color based on the specified intensity.
 * @param {number[]} color - The RGB color to darken.
 * @param {number} intensity - The percentage by which to darken the color (0-100).
 * @returns {number[]} - The darkened RGB color.
 */
export const calculateDarkenedColor = (color, intensity) => {
    return color.map(channel => Math.max(channel - Math.floor(channel * intensity / 100), 0));
};