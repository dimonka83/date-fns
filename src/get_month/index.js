var parse = require('../parse/index.js')

/**
 * @category Month Helpers
 * @summary Get the month of the given date.
 *
 * @description
 * Get the month of the given date.
 *
 * @param {Date|String|Number} date - the given date
 * @param {Object} [options] - the object with options. See [options]{@link docs/types/options}
 * @returns {Number} the month
 *
 * @example
 * // Which month is 29 February 2012?
 * var result = getMonth(new Date(2012, 1, 29))
 * //=> 1
 */
function getMonth (dirtyDate, options) {
  var date = parse(dirtyDate, options)
  var month = date.getMonth()
  return month
}

module.exports = getMonth
