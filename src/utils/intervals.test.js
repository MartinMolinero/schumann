const intervals = require('./intervals');

describe('Intervals', () => {
  test('should give the correct distance', () => {
    expect(intervals.intervalFromIndexes(2, 4)).toBe(10)
    expect(intervals.intervalFromIndexes(4, 2)).toBe(2)
  })
})