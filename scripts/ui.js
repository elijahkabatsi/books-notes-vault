const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const sortSelect = document.getElementById('sortSelect');
const bookGrid = document.getElementById('bookGrid');

let books = Array.from(bookGrid.getElementsByClassName('book'));

function updateBooks() {
  const query = searchInput.value.trim().toLowerCase();
  const sortValue = sortSelect.value;

  books.forEach(book => {
    book.style.border = 'none';
    book.style.opacity = '1';
  });

  let filteredBooks = books.filter(book =>
    book.dataset.title.toLowerCase().includes(query)
  );

  filteredBooks.sort((a, b) => {
    const titleA = a.dataset.title.toLowerCase();
    const titleB = b.dataset.title.toLowerCase();

    if (sortValue === 'name-asc') {
      return titleA.localeCompare(titleB);
    }
    if (sortValue === 'name-desc') {
      return titleB.localeCompare(titleA);
    }
    return 0;
  });

  bookGrid.innerHTML = '';
  filteredBooks.forEach(book => bookGrid.appendChild(book));

  if (query && filteredBooks.length > 0) {
    const firstMatch = filteredBooks[0];
    firstMatch.scrollIntoView({ behavior: 'smooth', block: 'center' });
    firstMatch.style.border = '3px solid #e50914';

    setTimeout(() => {
      firstMatch.style.border = 'none';
    }, 2000);
  }

  if (query && filteredBooks.length === 0) {
    books.forEach(book => book.style.opacity = '0');
    setTimeout(() => {
      books.forEach(book => book.style.opacity = '1');
    }, 1000);
  }
}

searchBtn.addEventListener('click', updateBooks);

searchInput.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') updateBooks();
});

searchInput.addEventListener('input', updateBooks);
sortSelect.addEventListener('change', updateBooks);