export default (number, string, options = 's') => {
  if (options !== 's') {
    return number > 1 ? `${number} ${string}` : `${number} ${string}${options}`
  }
  return number > 1 ? `${number} ${string}` : `${number} ${string}s`
}