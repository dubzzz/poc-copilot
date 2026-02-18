/**
 * Count the number of 'a' characters in a string
 * @param {string} str - The input string
 * @returns {number} The count of 'a' characters
 */
export function bonjourCountA(str) {
  if (typeof str !== 'string') {
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
