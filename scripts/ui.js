const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const bookGrid = document.getElementById('bookGrid');
const books = Array.from(bookGrid.getElementsByClassName('book'));

function searchBook() {
  const query = searchInput.value.trim().toLowerCase();
  if (!query) return;

  let found = false;

  books.forEach(book => {
    const title = book.dataset.title.toLowerCase();
    if (title === query) {
      found = true;
      book.scrollIntoView({ behavior: 'smooth', block: 'center' });
      book.style.border = '3px solid #e50914'; // highlight found book
      setTimeout(() => book.style.border = 'none', 2000);
    }
  });

  if (!found) {

    books.forEach(book => book.style.opacity = '0');
    

    setTimeout(() => {
      books.forEach(book => book.style.opacity = '1000');
    }, 1000);
  }

  searchInput.value = '';
}

searchBtn.addEventListener('click', searchBook);
searchInput.addEventListener('keypress', function(e) {
  if (e.key === 'Enter') searchBook();
});
