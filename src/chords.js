const notes = require('./utils/notes')
const arithmetic = require('./utils/arithmetic')

const chords = {
  'A#C#E': ['A#dim'],
  'A#C#F': ['A#min'],
  'A#C#F#': ['F#'],
  'A#C#G': ['Gdim'],
  'A#CF': ['A#sus2', 'Fsus4'],
  'A#D#F': ['A#sus4'],
  'A#D#F#': ['D#m'],
  'A#D#G': ['D#'],
  'A#D#G#': ['D#sus4'],
  'A#DF': ['A#'],
  'A#DF#': ['Daug','F#aug','A#aug'],
  'A#DG': ['Gm'],
  'A#EG': ['Gm6', 'Edim'],
  'ABE': ['Esus4', 'Asus2'],
  'AC#E': ['A'],
  'AC#F': ['Aaug', 'Faug','C#aug'],
  'AC#F#': ['A6', 'F#m', 'Gbm'],
  'ACD#': ['Adim'],
  'ACE': ['Am'],
  'ACF': ['F'],
  'ACF#': ['Am6', 'F#dim', 'Gbdim'],
  'AD#F#': ['F#m6', 'D#dim'],
  'ADE': ['Asus4', 'Dsus2'],
  'ADF': ['Dm'],
  'ADF#': ['D'],
  'ADG': ['Dsus4', 'Gsus2'],
  'BC#F#': ['F#sus4', 'Bsus2', 'Gbsus4'],
  'BD#F#': ['B'],
  'BD#G': ['Baug', 'D#aug', 'Gaug'],
  'BD#G#': ['B6', 'G#m'],
  'BDF': ['Dm6', 'Bdim'],
  'BDF#': ['Bm'],
  'BDG': ['G'],
  'BDG#': ['Bm6', 'G#dim'],
  'BEF#': ['Bsus4', 'Esus2'],
  'BEG': ['Em'],
  'BEG#': ['E'],
  'BFG#': ['G#m6', 'Fdim'],
  'C#D#G#': ['C#sus2', 'G#sus4'],
  'C#EG': ['Em6', 'C#dim'],
  'C#EG#': ['C#m'],
  'C#F#G#': ['C#sus4', 'F#sus2'],
  'C#FG#': ['C#'],
  'CD#F#': ['D#m6', 'Cdim'],
  'CD#G': ['Cm'],
  'CD#G#': ['G#'],
  'CDG': ['Cm'],
  'CEG': ['C'],
  'CEG#': ['Caug', 'Eaug', 'G#aug'],
  'CFG': ['Csus4', 'Fsus2'],
  'CFG#': ['Fm'],
  'DFG#': ['Fm6', 'Ddim']
}

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

const joinNames = (arr, character) => {
  return arr.join(`${character}`)
}

const humanizeChordNames = (chordNotesArray) => {
  return joinNames(chords[joinNames(chordNotesArray, '')], ' / ')
}

module.exports = {
  shapes,
  chordFromNoteByName,
  chordFromNote,
  createChord,
  translateChordValuesToNotes,
  joinNames,
  humanizeChordNames,
  chords,
}