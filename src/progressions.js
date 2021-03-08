const chords = require('./chords')

const shapes = {
  'major': ['major', 'minor', 'minor', 'major', 'major', 'minor', 'diminished'],
  'minor': ['minor', 'diminished', 'major', 'minor', 'minor', 'major', 'major'],
}

//TBD
// const rules = []

const chordifyFromIndexes = (scale, shape) => {
  scale.pop()
  const progressionShape = shapes[shape]
  return scale.map((value, index) => chords.chordFromNote(value, progressionShape[index]))
}

const chordifyFromNames = (scaleNames, shape) => {
  scaleNames.pop()
  const progressionShape = shapes[shape]
  return scaleNames.map((value, index) => chords.chordFromNoteByName(value, progressionShape[index]))
}

/**
 * First version giving name of individual notes
 * not the human name of the chords
 */
const humanizeChordScale = (chordsArray) => {
  return chordsArray.map((chord) => chords.translateChordValuesToNotes(chord))
}

module.exports = {
  chordifyFromIndexes,
  chordifyFromNames,
  humanizeChordScale,
}