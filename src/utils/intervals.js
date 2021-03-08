const arithmetic = require('./arithmetic')
const notes = require('./notes')


/**
 * Number of semitones between origin and goal notes
 */
const intervalFromIndexes = (origin, goal) => {
  return arithmetic.mod12(origin - goal)
}

/**
 * Number of semitones between origin and goal notes in string representation
 */
const intervalFromNoteNames = (originNote, distanceNote) => {
  const originIndex = notes.noteIndexFromName(originNote)
  const distanceIndex = notes.noteIndexFromName(distanceNote)
  return intervalFromIndexes(originIndex, distanceIndex)
}

/**
 * Simply add the number of semitones to the current index
 */
const noteAfterDistance = (originNoteIndex, distance) => {
  return originNoteIndex + distance
}

/**
 * After fetching the correct index from the notes array,
 * add up the distance.
 */
const noteAfterDistanceByName = (originNoteName, distance) => {
  const originIndex = notes.noteIndexFromName(originNoteName)
  return originIndex + distance
}

/**
 * Fetch correct index, add the distance and retrieve the name
 */
const noteNameAfterDistance = (originNoteName, distance) => {
  notes.noteNameFromIndex(noteAfterDistanceByName(originNoteName, distance))
}


module.exports = {
  intervalFromIndexes,
  intervalFromNoteNames,
  noteAfterDistance,
  noteAfterDistanceByName,
  noteNameAfterDistance,
}