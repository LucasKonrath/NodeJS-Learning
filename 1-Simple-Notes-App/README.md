## Simple Notes Application

### A simple notes application using Node.JS
### Used modules:
- Chalk for displaying colorful text
- fs for manipulating files
- Yargs for interpreting CLI commands

##  How it works

- Notes are stored in a file called notes.json

- The following commands are exposed:
  - app.js add [--title, --description]    Add a new note
  - app.js remove [--title] Remove a note
  - app.js list    List notes
  - app.js read [--title]   Read a note


> To use, simply run node [command], E.G: node app.js add --title="Sample Note" --description="Sample note to add"