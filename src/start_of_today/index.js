var startOfDay = require('../start_of_day/index.js')

/**
 * @category Day Helpers
 * @summary Return the start of today.
 *
 * @description
 * Return the start of today.
 *
 * @param {Object} [options] - the object with options. See [options]{@link docs/types/options}
 * @returns {Date} the start of today
 *
 * @example
 * // If today is 6 October 2014:
 * var result = startOfToday()
 * //=> Mon Oct 6 2014 00:00:00
 */
function startOfToday (options) {
  return startOfDay(new Date(), options)
}

module.exports = startOfToday
