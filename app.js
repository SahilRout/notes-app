const chalk = require('chalk');
const { argv, demandOption } = require('yargs');
const yargs = require('yargs')
const notes = require('./notes');

yargs.command({
    command: 'add',
    describe: 'Add A Note',
    builder: {
        title: {
            describe: "Note Title",
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Body Of the Note',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        notes.addNote(argv.title, argv.body);
    }
})

yargs.command({
    command: 'remove',
    describe: 'Removing A Node',
    builder: {
        title: {
            describe: "Note title",
            demandOption: true,
            type: 'string'
        }

    },
    handler: (argv) => {
        notes.removeNote(argv.title);
    }
})

yargs.command({
    command: 'list',
    describe: 'Shows The List',
    handler: (argv) => {
        notes.listNotes();
    }
})

yargs.command({
    command: 'read',
    describe: 'Reads The Note',
    builder: {
        title: {
            describe: "Note Title",
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        notes.readNote(argv.title);
    }
})

yargs.parse();