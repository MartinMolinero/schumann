const chords = require('./chords');

describe('Chords', () => {
  test('Should create a correct major chord', () => {
    expect(chords.chordFromNoteByName('C', 'major')).toEqual([0, 4, 7])
  })

  test('Should create a correct minor chord', () => {
    expect(chords.chordFromNoteByName('C', 'minor')).toEqual([0, 3, 7])
  })

  test('Should create a correct diminished chord', () => {
    expect(chords.chordFromNoteByName('C', 'diminished')).toEqual([0, 3, 6])
  })

  test('Should create a correct augmented chord', () => {
    expect(chords.chordFromNoteByName('C', 'augmented')).toEqual([0, 4, 8])
  })

  test('Should create a correct suspended chord', () => {
    expect(chords.chordFromNoteByName('C', 'suspended')).toEqual([0, 2, 7])
  })

})