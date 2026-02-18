/**
 * Counts the number of 'a' characters in a given string
 * @param {string} str - The string to count 'a' characters in
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
