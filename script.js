// Select correct elements using updated class names
const bookmarkInput = document.querySelector('.bookmark-input');
const addButton = document.querySelector('.add-bookmark');
const clearButton = document.querySelector('.clear-bookmarks');
const bookmarkDisplay = document.querySelector('.bookmark-tag');
const bookmarkCount = document.querySelector('.bookmark-count');

// Load bookmark on page load
const savedBookmark = localStorage.getItem('bookmark');
if (savedBookmark) {
  bookmarkDisplay.innerText = savedBookmark;
  bookmarkCount.innerText = '1';
} else {
  bookmarkDisplay.innerText = '';
  bookmarkCount.innerText = '0';
}

// Add bookmark
addButton.addEventListener('click', () => {
  const value = bookmarkInput.value.trim();
  if (value) {
    localStorage.setItem('bookmark', value);
    bookmarkDisplay.innerText = value;
    bookmarkCount.innerText = '1';
    bookmarkInput.value = '';
  }
});

// Clear bookmark
clearButton.addEventListener('click', () => {
  localStorage.removeItem('bookmark');
  bookmarkDisplay.innerText = '';
  bookmarkCount.innerText = '0';
  bookmarkInput.value = '';
});
