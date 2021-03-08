const notes = require('./utils/notes')
const arithmetic = require('./utils/arithmetic')

const shapes = {
  'major': [4, 3],
  'minor': [3, 4],
  'diminished': [3,3],
  'augmented': [4, 4],
  'suspended': [2, 5]
}

const createChord = (modalArray, shapeArray) => {
  modalArray.map((value, index) => {
    shapeArray = [...shapeArray, arithmetic.mod12(shapeArray[index] += value)]
  })
  return shapeArray
}

const chordFromNote = (noteIndex, shape) => {
  const shapeStructure = shapes[shape]
  let resultingChord = [noteIndex]
  return createChord(shapeStructure, resultingChord)
}

const chordFromNoteByName = (noteName, shape) => {
  const shapeStructure = shapes[shape]
  const noteIndex = notes.noteIndexFromName(noteName)
  let resultingChord = [noteIndex]
  return createChord(shapeStructure, resultingChord)
}

const translateChordValuesToNotes = (chordArray) => {
  return chordArray.map((value) => notes.noteNameFromIndex(value))
}

module.exports = {
  shapes,
  chordFromNoteByName,
  chordFromNote,
  createChord,
  translateChordValuesToNotes,
}