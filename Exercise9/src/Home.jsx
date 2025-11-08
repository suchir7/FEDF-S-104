import React from "react";
import { Link } from "react-router-dom";

const books = [
  { id: 1, title: "Eloquent JavaScript", author: "Marijn Haverbeke" },
  { id: 2, title: "You Don't Know JS", author: "Kyle Simpson" },
  { id: 3, title: "Clean Code", author: "Robert C. Martin" }
];

export default function Home() {
  return (
    <div className="page">
      <h1>📘 Book Explorer</h1>
      <ul>
        {books.map((b) => (
          <li key={b.id}>
            <Link to={`/book/${b.id}`}>
              {b.title} <span>— {b.author}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
