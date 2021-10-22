const chalk = require('chalk');
const fs = require('fs')
const fail = chalk.bold.redBright
const succe = chalk.bold.greenBright
const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find((note) => note.title === title)

    if (duplicateNote) {
        console.log(fail('Note Title Already Exists!'))
    }
    else {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(succe('New Note added'));
    }
}
const removeNote = (title) => {
    const notes = loadNotes()
    const duplicateNotes = notes.filter((note) => {
        return note.title !== title
    })
    if (duplicateNotes.length === notes.length) {
        console.log(fail('Note Dosent Exist!'));
    }
    else {
        saveNotes(duplicateNotes)
        console.log(succe('Note Removed'));
    }
}
const listNotes = () => {
    const notes = loadNotes()
    if (notes.length) {
        console.log(chalk.blueBright('Your Notes'))
        notes.forEach((note) => {
            console.log(note.title)
        });
    }
    else {
        console.log(fail('No Notes Found!'));
    }
}
const readNote = (title) => {
    const notes = loadNotes();
    const findNote = notes.find((note) => note.title === title)
    if (findNote) {
        console.log(chalk.bold.blueBright(findNote.title));
        console.log(findNote.body);
    }
    else {
        console.log(fail('No Note Found!'));
    }

}
const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON)
}
const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJson = dataBuffer.toString();
        return JSON.parse(dataJson)
    } catch (e) {
        return []
    }
}
module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
};