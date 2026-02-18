/**
 * Counts the number of 'a' characters in a string
 * @param {string} str - The input string to search
 * @returns {number} The count of 'a' characters
 */
function bonjourCountA(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === 'a') {
      count++;
    }
  }
  return count;
}

module.exports = { bonjourCountA };
