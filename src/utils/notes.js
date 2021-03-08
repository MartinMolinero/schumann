const arithmetic = require('./arithmetic')

/**
 * Assuming C as the origin (0) as our way
 * to treat the whole array
 */
const fundamentalNotes = ['C','C#','D','D#','E',
'F', 'F#', 'G', 'G#', 'A', 'A#', 'B']


const equivalentNotes = {
  'Db': 'C#',
  'Eb': 'D#',
  'E#': 'F',
  'Gb': 'F#',
  'Ab': 'G#',
  'Bb': 'A#',
  'B#': 'C',
}

const noteNameFromIndex = (index) => {
  if (index < 0) return 
  return fundamentalNotes[arithmetic.mod12(index)]
}

const noteIndexFromName = (name) => {
  return fundamentalNotes.indexOf(name)
}

module.exports = {
  fundamentalNotes, 
  equivalentNotes,
  noteNameFromIndex,
  noteIndexFromName
}