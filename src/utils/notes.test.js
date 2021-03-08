const notes = require('./notes');

describe('Notes', () => {
  test('Fundamental notes should exist', () => {
    expect(notes.fundamentalNotes).toHaveLength(12)
  })

  test('Correct equivalence translation', () => {
    expect(notes.equivalentNotes['Ab']).toBe('G#') 
    expect(notes.equivalentNotes['C4']).toBe(undefined) 
  })

  test('Should give the correct note name of a note', () => {
    expect(notes.noteNameFromIndex(0)).toBe('C')
    expect(notes.noteNameFromIndex(1)).toBe('C#')
    expect(notes.noteNameFromIndex(5)).toBe('F')
    expect(notes.noteNameFromIndex(12)).toBe('C')
    expect(notes.noteNameFromIndex(13)).toBe('C#')
    expect(notes.noteNameFromIndex(-1)).toBe(undefined)
  })
})