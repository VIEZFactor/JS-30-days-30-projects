const btnEl = document.getElementById("btn");
const appEl = document.getElementById("App");

getSavedNotes().forEach((note) => {
    const noteEl = createNoteEl(note.id, note.content);
    appEl.insertBefore(noteEl, btnEl);
})

function createNoteEl(id, content){
    const element = document.createElement("textarea");
    element.classList.add("note");
    element.placeholder = "Empty Note";
    element.value = content;

    element.addEventListener("dblclick", () => {
        const warning = confirm("Do you want to delete this note?");
        if(warning){
            deleteNote(id, element);
        }
    })

    element.addEventListener("input", () => {
        updateNote(id, element.value);
    })

    return element;
}

function addNote(){
    const notes = getSavedNotes();

    const noteObj = {
        id: Math.floor(Math.random() * 10000),
        content: "",
    };

    const noteEl = createNoteEl(noteObj.id, noteObj.content);
    appEl.insertBefore(noteEl, btnEl);

    notes.push(noteObj);

    saveNote(notes);
}

function updateNote(id, content){
    const notes = getSavedNotes();
    const target = notes.filter((note) => note.id == id)[0];
    target.content = content;
    saveNote(notes);
}

function deleteNote(id, element){
    notes = getSavedNotes().filter((note) => note.id != id);
    saveNote(notes);
    appEl.removeChild(element);
}

function saveNote(notes){
    localStorage.setItem("note-app", JSON.stringify(notes));
}

function getSavedNotes(){
    return JSON.parse(localStorage.getItem("note-app") || "[]");
}

btnEl.addEventListener("click", addNote);