/**
 * Count the number of lowercase 'a' characters in a string
 * @param {string} str - The input string to search
 * @returns {number} The count of lowercase 'a' characters
 */
function countA(str) {
  if (str == null) {
    return 0;
  }
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === 'a') {
      count++;
    }
  }
  return count;
}

module.exports = { countA };
