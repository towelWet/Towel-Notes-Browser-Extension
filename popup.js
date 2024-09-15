document.addEventListener('DOMContentLoaded', function() {
  var noteInput = document.getElementById('noteInput');
  var saveButton = document.getElementById('saveButton');
  var deleteNoteButton = document.getElementById('deleteNoteButton');
  var folderSelect = document.getElementById('folderSelect');
  var newFolderButton = document.getElementById('newFolderButton');
  var deleteFolderButton = document.getElementById('deleteFolderButton');
  var noteList = document.getElementById('noteList');
  var selectedNoteIndex = null; // Track selected note index

  // Load saved notes and folders from localStorage
  var data = JSON.parse(localStorage.getItem('towelNoteData')) || { folders: {} };

  // Display folders in select
  function displayFolders() {
    folderSelect.innerHTML = ''; // Clear the current options
    var defaultOption = document.createElement('option');
    defaultOption.textContent = 'Select a folder';
    defaultOption.value = '';
    folderSelect.appendChild(defaultOption);
    
    Object.keys(data.folders).forEach(function(folder) {
      var option = document.createElement('option');
      option.textContent = folder;
      option.value = folder;
      folderSelect.appendChild(option);
    });
  }

  // Display notes of selected folder
  function displayNotes() {
    var selectedFolder = folderSelect.value;
    noteList.innerHTML = '';
    selectedNoteIndex = null; // Reset the selected note index
    if (selectedFolder && data.folders[selectedFolder]) {
      data.folders[selectedFolder].forEach(function(note, index) {
        displayNote(note, index);
      });
    }
  }

  folderSelect.addEventListener('change', displayNotes);

  // Save note
  saveButton.addEventListener('click', function() {
    var noteText = noteInput.value.trim();
    if (noteText !== '') {
      var note = {
        text: noteText,
        timestamp: new Date().toLocaleString()
      };
      var selectedFolder = folderSelect.value;
      if (selectedFolder) {
        data.folders[selectedFolder].push(note);
        localStorage.setItem('towelNoteData', JSON.stringify(data));
        displayNote(note, data.folders[selectedFolder].length - 1);
        noteInput.value = '';
      } else {
        alert('Please select a folder!');
      }
    }
  });

  // Delete selected note
  deleteNoteButton.addEventListener('click', function() {
    var selectedFolder = folderSelect.value;
    if (selectedFolder && selectedNoteIndex !== null) {
      data.folders[selectedFolder].splice(selectedNoteIndex, 1); // Remove the selected note
      localStorage.setItem('towelNoteData', JSON.stringify(data));
      displayNotes(); // Refresh notes list
      noteInput.value = ''; // Clear note input
    } else {
      alert('Please select a note to delete!');
    }
  });

  // New folder
  newFolderButton.addEventListener('click', function() {
    var folderName = prompt('Enter folder name:');
    if (folderName && !data.folders[folderName]) {
      data.folders[folderName] = [];
      localStorage.setItem('towelNoteData', JSON.stringify(data));
      var option = document.createElement('option');
      option.textContent = folderName;
      option.value = folderName;
      folderSelect.appendChild(option);
      folderSelect.value = folderName;
      displayNotes();
    }
  });

  // Delete folder
  deleteFolderButton.addEventListener('click', function() {
    var selectedFolder = folderSelect.value;
    if (selectedFolder) {
      var confirmation = confirm('Are you sure you want to delete the folder "' + selectedFolder + '"? This action cannot be undone.');
      if (confirmation) {
        delete data.folders[selectedFolder]; // Delete the folder
        localStorage.setItem('towelNoteData', JSON.stringify(data));
        folderSelect.value = ''; // Reset folder selection
        noteList.innerHTML = ''; // Clear notes
        displayFolders(); // Update folder list
      }
    } else {
      alert('Please select a folder to delete!');
    }
  });

  // Display note
  function displayNote(note, index) {
    var li = document.createElement('li');
    li.classList.add('noteItem');
    li.textContent = note.text + ' - ' + note.timestamp;
    li.addEventListener('click', function() {
      noteInput.value = note.text; // Allow editing of the clicked note
      selectNoteItem(li, index); // Highlight the selected note and set the index
    });
    noteList.appendChild(li);
  }

  // Select a note and highlight it
  function selectNoteItem(noteElement, index) {
    var previouslySelected = document.querySelector('.noteItem.selected');
    if (previouslySelected) {
      previouslySelected.classList.remove('selected'); // Remove the selected class from the previous note
    }
    noteElement.classList.add('selected'); // Highlight the selected note
    selectedNoteIndex = index; // Update the selected note index
  }

  // Initialize folders and notes on page load
  displayFolders();
  displayNotes();
});
