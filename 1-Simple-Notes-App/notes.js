const fs = require('fs')
const chalk = require('chalk')

const path = "./notes/notes.json"

const addNote = (title, body) => {
    
    const notes = loadNotes()

    const note = {
        title: title,
        body: body
    }

    const duplicateNotes = notes.filter(note => note.title === title).length != 0
    
    if(!duplicateNotes){
        notes.push(note)
        console.log(chalk.green.inverse('New note added'))
        saveNotes(notes)
    } else {
        console.log(chalk.red.inverse('Duplicate title, no note added'))
    }
}

const saveNotes = (notes) => {
    fs.writeFileSync(path, JSON.stringify(notes))
}

const loadNotes = () => {
    try{
        const dataBuffer = fs.readFileSync(path)
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch(e){
        console.log(e)
        return []
    }
}

const removeNote = (title) => {

    
    const notes = loadNotes()
    const noteToRemove = notes.find(note => note.title == title)
    
    if(noteToRemove != undefined){
        const index = notes.indexOf(noteToRemove)
        notes.splice(index, 1)
        console.log(chalk.green.inverse('Note removed!'))
        saveNotes(notes)
        return
    }
    console.log(chalk.red.inverse('No note removed :('))
}

const readNote = (title) => {
    const noteToRead = loadNotes().find(note => note.title == title)
    if(noteToRead){
        console.log(chalk.green.inverse(noteToRead.title))
        console.log(chalk.blue.inverse(noteToRead.body))
    }
}

const listNotes = () => {
    const notes = loadNotes()
    notes.forEach(element => {
        console.log(chalk.green.inverse(element.title))
        console.log(chalk.blue.inverse(element.body))   
    });
}

module.exports = { 
    addNote: addNote,
    loadNotes: loadNotes,
    removeNote: removeNote,
    readNote: readNote,
    listNotes: listNotes
}