/**
 * Count the number of 'a' characters in a string
 * @param {string} str - The input string
 * @returns {number} The count of 'a' characters
 */
export function bonjourCountA(str) {
  if (typeof str !== 'string') {
    return 0;
  }
  
  return (str.match(/a/g) || []).length;
}
