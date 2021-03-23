const chords = require('./chords')

const shapes = {
  'major': ['major', 'minor', 'minor', 'major', 'major', 'minor', 'diminished'],
  'minor': ['minor', 'diminished', 'major', 'minor', 'minor', 'major', 'major'],
}

/**
 * 
 * @param scale - a previously generated scale.
 * @param shape - the type of progression we want to generate.
 * @returns 
 */
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

const humanizeChordProgression = (chordsArray) => {
  const chordNotes = chordsArray.map((chord) => chords.translateChordValuesToNotes(chord))
  let resultRepresentation = []
  chordNotes.forEach((chord) => {
    resultRepresentation.push(`${chords.humanizeChordNames(chord.sort())}`)
  })
  return resultRepresentation.join(' - ')
}

module.exports = {
  chordifyFromIndexes,
  chordifyFromNames,
  humanizeChordProgression,
}