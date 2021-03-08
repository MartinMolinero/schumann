const notes = require('./utils/notes')
const arithmetic = require('./utils/arithmetic')

const modes = {
  'ionian': [2,2,1,2,2,2,1],
  'dorian': [2,1,2,2,2,1,2],
  'phrygian': [1,2,2,2,1,2,2],
  'lydian': [2,2,2,1,2,2,1],
  'mixolydian': [2,2,1,2,2,1,2],
  'eolian': [2,1,2,2,1,2,2],
  'locrian': [1,2,2,1,2,2,2]
}

const createScale = (modalArray, scaleArray) => {
  modalArray.map((value, index) => {
    scaleArray = [...scaleArray, scaleArray[index] += value]
  })
  return scaleArray
}

const scaleFromNote = (noteIndex, mode) => {
  const modeStructure = modes[mode]
  let resultingScale = [noteIndex]
  return createScale(modeStructure, resultingScale)
}

const scaleFromNoteByName = (noteName, mode) => {
  const modeStructure = modes[mode]
  const noteIndex = notes.noteIndexFromName(noteName)
  let resultingScale = [noteIndex]
  return createScale(modeStructure, resultingScale)
}

const translateScaleValuesToNotes = (scaleArray) => {
  return scaleArray.map((value) => notes.noteNameFromIndex(value))
}

const transpose = (scaleArray, distance) => {
  return scaleArray.map((value) => arithmetic.mod12(value + distance))
}

const inversion = (scaleArray, distance) => {
  return scaleArray.map((value) => arithmetic.mod12(distance-value))
}

module.exports = {
  scaleFromNote,
  scaleFromNoteByName,
  translateScaleValuesToNotes,
  transpose,
  inversion
}
