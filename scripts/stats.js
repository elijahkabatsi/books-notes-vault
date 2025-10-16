const titleInput = document.getElementById('bookTitle');
const notesInput = document.getElementById('bookNotes');
const saveBtn = document.getElementById('saveNote');
const clearBtn = document.getElementById('clearNote');
const statusDiv = document.getElementById('status');

window.addEventListener('load', () => {
  const savedTitle = localStorage.getItem('bookTitle');
  const savedNotes = localStorage.getItem('bookNotes');
  if (savedTitle) titleInput.value = savedTitle;
  if (savedNotes) notesInput.value = savedNotes;
});

saveBtn.addEventListener('click', () => {
  const title = titleInput.value.trim();
  const notes = notesInput.value.trim();

  if (title === '' && notes === '') {
    statusDiv.textContent = "Write something first before saving!";
    return;
  }

  localStorage.setItem('bookTitle', title);
  localStorage.setItem('bookNotes', notes);
  statusDiv.textContent = "Notes saved successfully!";
  setTimeout(() => statusDiv.textContent = '', 2000);
});

clearBtn.addEventListener('click', () => {
  titleInput.value = '';
  notesInput.value = '';
  localStorage.removeItem('bookTitle');
  localStorage.removeItem('bookNotes');
  statusDiv.textContent = "Notes cleared!";
  setTimeout(() => statusDiv.textContent = '', 2000);
});