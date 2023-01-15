const yargs = require('yargs')
const notes = require('./notes.js')

yargs.version('1.1.0')

yargs.command(
    {
        command: 'add',
        builder: {
            title: {
                describe: 'Title of the note to add'
            },
            description: {
                describe:'Content of the note to add'
            }
        },
        describe: 'Add a new note',
        handler: (argv) => {
            notes.addNote(argv.title, argv.description)
        }
    }
)

yargs.command({
        command: 'remove',
        builder: {
            title: {
                describe: 'Title of the note to be removed',
                demandOption: true,
                type: 'string'
            }
        },
        describe: 'Remove a note',
        handler: (argv) => {
            notes.removeNote(argv.title)
        }
    })

yargs.command(
    {
        command: 'list',
        describe: 'List notes',
        handler: () => {
            notes.listNotes()
        }
    }
)

yargs.command(
    {
        command: 'read',
        describe: 'Read a note',
        builder: {
            title : {
                describe: 'Title of note to read'
            }
        },
        handler: (argv) => {
            notes.readNote(argv.title)
        }
    }
)

setup = () => yargs.parse()

module.exports = {
    setup: setup
}