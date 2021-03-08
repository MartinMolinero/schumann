const scales = require('./scales');
const progressions = require('./progressions');

describe('Chords', () => {
  test('Should create a progression', () => {
    const scale = scales.scaleFromNote(0, 'ionian')
    expect(JSON.stringify(progressions.chordifyFromIndexes(scale, 'major')))
    .toBe(JSON.stringify([[0, 4, 7], [2, 5, 9], [4, 7, 11], [5, 9, 0], [7, 11, 2], [9, 0, 4], [11, 2, 5]]))
  })
  test('Should create a progression from a name based scale', () => {
    const scale = scales.scaleFromNote(0, 'ionian')
    const translatedScale = scales.translateScaleValuesToNotes(scale)
    expect(JSON.stringify(progressions.chordifyFromNames(translatedScale, 'major')))
    .toBe(JSON.stringify([[0, 4, 7], [2, 5, 9], [4, 7, 11], [5, 9, 0], [7, 11, 2], [9, 0, 4], [11, 2, 5]]))
  })

  test('Should humanize a chord progression', () => {
    const scale = scales.scaleFromNote(0, 'ionian')
    const translatedScale = scales.translateScaleValuesToNotes(scale)
    const scaleChords = progressions.chordifyFromNames(translatedScale, 'major')
    expect(JSON.stringify(progressions.humanizeChordScale(scaleChords)))
    .toBe(JSON.stringify([
      [ 'C', 'E', 'G' ],
      [ 'D', 'F', 'A' ],
      [ 'E', 'G', 'B' ],
      [ 'F', 'A', 'C' ],
      [ 'G', 'B', 'D' ],
      [ 'A', 'C', 'E' ],
      [ 'B', 'D', 'F' ]
    ]))
  })
})