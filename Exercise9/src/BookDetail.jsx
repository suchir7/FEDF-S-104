import React from "react";
import { useParams, Link } from "react-router-dom";

const books = {
  1: {
    title: "Eloquent JavaScript",
    author: "Marijn Haverbeke",
    desc: "A modern introduction to programming with JavaScript."
  },
  2: {
    title: "You Don't Know JS",
    author: "Kyle Simpson",
    desc: "A deep dive into core mechanisms of the JavaScript language."
  },
  3: {
    title: "Clean Code",
    author: "Robert C. Martin",
    desc: "A handbook of agile software craftsmanship."
  }
};

export default function BookDetail() {
  const { id } = useParams();
  const b = books[id];

  if (!b)
    return (
      <div className="page">
        <h2>Book not found</h2>
        <Link to="/">← Back to list</Link>
      </div>
    );

  return (
    <div className="page">
      <h1>{b.title}</h1>
      <p>
        <strong>Author:</strong> {b.author}
      </p>
      <p>{b.desc}</p>
      <Link to="/">← Back to list</Link>
    </div>
  );
}
