const noteInput = document.getElementById("noteInput");
const addBtn = document.getElementById("addBtn");
const notesContainer = document.getElementById("notesContainer");

// Load Notes When Page Opens

document.addEventListener("DOMContentLoaded", loadNotes);

// Add Note

addBtn.addEventListener("click", addNote);

function addNote() {
  const noteText = noteInput.value.trim();

  if (noteText === "") {
    alert("Please write a note.");
    return;
  }
  createNoteElement(noteText);
  saveNote(noteText);
  noteInput.value = "";
}

// Create Note Element

function createNoteElement(text) {
  const noteDiv = document.createElement("div");
  noteDiv.classList.add("note");
  const noteParagraph = document.createElement("p");
  noteParagraph.textContent = text;
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.classList.add("deleteBtn");
  deleteBtn.addEventListener("click", () => {
    noteDiv.remove();
    deleteNote(text);
    checkEmptyMessage();
  });
  noteDiv.appendChild(noteParagraph);
  noteDiv.appendChild(deleteBtn);
  notesContainer.appendChild(noteDiv);
  checkEmptyMessage();
}

// Save Note to Local Storage

function saveNote(note) {
  let notes = JSON.parse(localStorage.getItem("notes")) || [];
  notes.push(note);
  localStorage.setItem("notes", JSON.stringify(notes));
}

// Load Notes

function loadNotes() {
  let notes = JSON.parse(localStorage.getItem("notes")) || [];
  notes.forEach((note) => {
    createNoteElement(note);
  });

  checkEmptyMessage();
}

// Delete Note

function deleteNote(noteText) {
  let notes = JSON.parse(localStorage.getItem("notes")) || [];
  notes = notes.filter((note) => note !== noteText);
  localStorage.setItem("notes", JSON.stringify(notes));
}

// Empty Message

function checkEmptyMessage() {
  const emptyMessage = document.getElementById("emptyMessage");
  const notes = document.querySelectorAll(".note");

  if (notes.length === 0) {
    emptyMessage.style.display = "block";
  } else {
    emptyMessage.style.display = "none";
  }
}
