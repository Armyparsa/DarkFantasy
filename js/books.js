// ===== BOOKS MODULE =====
let books = [];

function loadBooks() {
  const stored = localStorage.getItem('dc_books');
  books = stored ? JSON.parse(stored) : [];
}

function saveBooks() {
  localStorage.setItem('dc_books', JSON.stringify(books));
}

function addBooks(title, author, year, genre, status) {
  books.push({ id: Date.now(), title, author: author || 'Unknown', year: year || new Date().getFullYear(), genre: genre || 'Unknown', status: status || 'unread', createdAt: new Date().toISOString() });
  saveBooks();
}

function updateBookStatus(id, status) {
  const b = books.find(x => x.id === id);
  if (b) { b.status = status; saveBooks(); }
}

function deleteBook(id) {
  books = books.filter(x => x.id !== id);
  saveBooks();
}

window.books = books;
window.loadBooks = loadBooks;
window.saveBooks = saveBooks;
window.addBooks = addBooks;
window.updateBookStatus = updateBookStatus;
window.deleteBook = deleteBook;
