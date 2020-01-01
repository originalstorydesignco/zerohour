const conversions = {
  y: (v) => v * 3.15576e10,
  d: (v) => v * 8.64e7,
  h: (v) => v * 3.6e6,
  m: (v) => v * 6e4,
  s: (v) => v * 1e3,
  ms: (v) => v
}

const joinEntries = (obj) => Object.entries(obj).reduce((accum, entry) => accum + entry.reverse().join(''), '')

const getVal = (input) => {
  const type = typeof input
  if (type === 'string') return input.match(/(-?[0-9.]+(y|d|h|m?s?))/g).reduce((accum, curr) => accum + conversions[curr[curr.length - 1]](curr.slice(0, -1)), 0)
  if (type === 'number') return input
  if (type === 'object') return getVal(joinEntries(input))
}

const timeTo = (input, out) => {
  return getVal(input) / conversions[out || 'ms'](1)
}

module.exports = timeTo
