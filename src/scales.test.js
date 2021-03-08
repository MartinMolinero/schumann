const scales = require('./scales');

describe('Scales', () => {
  test('Should return the correct array', () => {
    expect(scales.scaleFromNote(0, 'ionian')).toEqual([0,2,4,5,7,9,11,12])
  })

  test('Should return the correct array', () => {
    expect(scales.scaleFromNoteByName('C', 'ionian')).toEqual([0,2,4,5,7,9,11,12])
  })

  test('Should translate scale correctly', () => {
    const scale = scales.scaleFromNote(0, 'ionian')
    expect(scales.translateScaleValuesToNotes(scale)).toEqual(['C', 'D', 'E', 'F', 'G', 'A', 'B', 'C'])
  })

  test('Should invert a scale properly', () => {
    const scale = [11, 10, 7]
    expect(scales.inversion(scale, 0)).toEqual([1,2,5])
  })
})