import React, { useState } from "react";
import "./Library.css";


export default function LibraryManagementUI() {
  const [books, setBooks] = useState([
    { id: 1, title: "The Alchemist", author: "Paulo Coelho" },
    { id: 2, title: "Atomic Habits", author: "James Clear" }
  ]);

  const [search, setSearch] = useState("");
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  // Add Book
  function addBook() {
    if (title === "" || author === "") return;

    const newBook = {
      id: Date.now(),
      title: title,
      author: author
    };

    setBooks([...books, newBook]);
    setTitle("");
    setAuthor("");
  }

  // Remove Book
  function removeBook(id) {
    const updatedBooks = books.filter(function (book) {
      return book.id !== id;
    });

    setBooks(updatedBooks);
  }

  // Search Filter
  const filteredBooks = books.filter(function (book) {
    return (
      book.title.toLowerCase().includes(search.toLowerCase()) ||
      book.author.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
  <div className="library-container">
    <h1>Library Management System</h1>

    <input
      type="text"
      placeholder="Search by title or author"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="search-input"
    />

    <div className="form-section">
      <input
        type="text"
        placeholder="Book Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="text"
        placeholder="Author Name"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />

      <button onClick={addBook}>Add Book</button>
    </div>

    <h2>Book List</h2>

    {filteredBooks.length === 0 ? (
      <p>No books found</p>
    ) : (
      <ul className="book-list">
        {filteredBooks.map(function (book) {
          return (
            <li key={book.id} className="book-item">
              <span>
                <strong>{book.title}</strong> by {book.author}
              </span>

              <button
                onClick={() => removeBook(book.id)}
                className="remove-btn"
              >
                Remove
              </button>
            </li>
          );
        })}
      </ul>
    )}
  </div>
);
}