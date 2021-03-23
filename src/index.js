const Scales = require('./scales')
const Progressions = require('./progressions')


generateProgression = (noteindex, scaleMode, chordMode) => {
  const scale = generateScaleFromNote(noteindex, scaleMode)
  const progression = Progressions.chordifyFromIndexes(scale, chordMode)
  const humanizedProgression = Progressions.humanizeChordProgression(progression)
  return humanizedProgression
}

generateScaleFromNote = (noteIndex, mode) => {
  const scale = Scales.scaleFromNote(noteIndex, mode)
  return scale
}

// Generating C scale chords
console.log(generateProgression(0, 'ionian', 'major'))