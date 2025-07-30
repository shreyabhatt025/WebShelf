const input = document.getElementById("bookmark-input");
const addBtn = document.getElementById("add-bookmark");
const clearBtn = document.getElementById("clear-bookmarks");
const bookmarkList = document.getElementById("bookmark-list");
const bookmarkCount = document.getElementById("bookmark-count");

// Load bookmarks when page loads
window.onload = renderBookmarks;

// Add bookmark
addBtn.addEventListener("click", () => {
  const url = input.value.trim();
  if (url === "") return;

  let bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
  bookmarks.push(url);
  localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  input.value = "";
  renderBookmarks();
});

// Clear all bookmarks
clearBtn.addEventListener("click", () => {
  localStorage.removeItem("bookmarks");
  renderBookmarks();
});

// Render bookmarks in UI
function renderBookmarks() {
  const bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
  bookmarkList.innerHTML = "";

  bookmarks.forEach((bookmark, i) => {
    const link = document.createElement("a");
    link.href = bookmark;
    link.target = "_blank";
    link.textContent = `${i + 1}. ${bookmark}`;
    bookmarkList.appendChild(link);
  });

  bookmarkCount.textContent = `Total Bookmarks: ${bookmarks.length}`;
}


