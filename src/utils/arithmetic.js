const mod12 = (x) => {
  return mod(x, 12)
}


/**
 * Getting rid of neg modulo js
 */
const mod = (n, m) => {
  return ((n % m) + m) % m;
}

module.exports = {
  mod12
}