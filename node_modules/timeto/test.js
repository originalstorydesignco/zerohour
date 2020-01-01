const test = require('tape')

const timeTo = require('./index')

const INPUT = '1d12h'
const RESULT_IN_MILLIS = 8.64e7 + (12 * 60 * 60 * 1000)
const INPUT_MILLIS = 8.64e7

test('1d12h gives time in milliseconds when not specified', (t) => {
  const result = timeTo(INPUT)
  t.equal(result, RESULT_IN_MILLIS)
  t.end()
})

test('1d12h gives the correct time in milliseconds', (t) => {
  const result = timeTo(INPUT, 'ms')
  t.equal(result, RESULT_IN_MILLIS)
  t.end()
})

test('1d12h gives the correct time in seconds', (t) => {
  const result = timeTo(INPUT, 's')
  t.equal(result, RESULT_IN_MILLIS / 1000)
  t.end()
})

test('1d12h gives the correct time in minutes', (t) => {
  const result = timeTo(INPUT, 'm')
  t.equal(result, RESULT_IN_MILLIS / (1000 * 60))
  t.end()
})

test('1d12h gives the correct time in hours', (t) => {
  const result = timeTo(INPUT, 'h')
  t.equal(result, RESULT_IN_MILLIS / (1000 * 60 * 60))
  t.end()
})

test('1d12h gives the correct time in days', (t) => {
  const result = timeTo(INPUT, 'd')
  t.equal(result, RESULT_IN_MILLIS / (1000 * 60 * 60 * 24))
  t.end()
})

test('1d12h gives the correct time in years', (t) => {
  const result = timeTo(INPUT, 'y')
  t.equal(result, RESULT_IN_MILLIS / (1000 * 60 * 60 * 24 * 365.25))
  t.end()
})

test('timeTo takes input milliseconds returns correct millisecond output', (t) => {
  const result = timeTo(INPUT_MILLIS, 'ms')
  t.equal(result, INPUT_MILLIS)
  t.end()
})

test('timeTo takes input milliseconds returns correct second output', (t) => {
  const result = timeTo(INPUT_MILLIS, 's')
  t.equal(result, INPUT_MILLIS / 1000)
  t.end()
})

test('timeTo takes input milliseconds returns correct minute output', (t) => {
  const result = timeTo(INPUT_MILLIS, 'm')
  t.equal(result, INPUT_MILLIS / (1000 * 60))
  t.end()
})

test('timeTo takes input milliseconds returns correct hour output', (t) => {
  const result = timeTo(INPUT_MILLIS, 'h')
  t.equal(result, INPUT_MILLIS / (1000 * 60 * 60))
  t.end()
})

test('timeTo takes input milliseconds returns correct day output', (t) => {
  const result = timeTo(INPUT_MILLIS, 'd')
  t.equal(result, INPUT_MILLIS / (1000 * 60 * 60 * 24))
  t.end()
})

test('timeTo takes input milliseconds returns correct year output', (t) => {
  const result = timeTo(INPUT_MILLIS, 'y')
  t.equal(result, INPUT_MILLIS / (1000 * 60 * 60 * 24 * 365.25))
  t.end()
})

test('timeTo takes input object returns correct output', (t) => {
  const result = timeTo({ d: 1, h: 12 })
  t.equal(result, RESULT_IN_MILLIS)
  t.end()
})

test('timeTo takes fractional input object returns correct output', (t) => {
  const result = timeTo({ d: 0.5, h: 24 })
  t.equal(result, RESULT_IN_MILLIS)
  t.end()
})

test('timeTo takes fractional input returns correct output', (t) => {
  const result = timeTo('0.5d24h')
  t.equal(result, RESULT_IN_MILLIS)
  t.end()
})

test('timeTo handles negative time values', (t) => {
  const result = timeTo('2d-12h')
  t.equal(result, RESULT_IN_MILLIS)
  t.end()
})

test('timeTo handles negative time values in input objects', (t) => {
  const result = timeTo({ d: 2, h: -12 })
  t.equal(result, RESULT_IN_MILLIS)
  t.end()
})
