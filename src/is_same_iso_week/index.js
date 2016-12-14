var isSameWeek = require('../is_same_week/index.js')
var cloneObject = require('../_lib/clone_object/index.js')

/**
 * @category ISO Week Helpers
 * @summary Are the given dates in the same ISO week?
 *
 * @description
 * Are the given dates in the same ISO week?
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|String|Number} dateLeft - the first date to check
 * @param {Date|String|Number} dateRight - the second date to check
 * @param {Object} [options] - the object with options. See [options]{@link docs/types/options}
 * @returns {Boolean} the dates are in the same ISO week
 *
 * @example
 * // Are 1 September 2014 and 7 September 2014 in the same ISO week?
 * var result = isSameISOWeek(
 *   new Date(2014, 8, 1),
 *   new Date(2014, 8, 7)
 * )
 * //=> true
 */
function isSameISOWeek (dirtyDateLeft, dirtyDateRight, options) {
  var isSameWeekOptions = cloneObject(options)
  isSameWeekOptions.weekStartsOn = 1
  return isSameWeek(dirtyDateLeft, dirtyDateRight, isSameWeekOptions)
}

module.exports = isSameISOWeek
