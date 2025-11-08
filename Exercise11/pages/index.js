import { useEffect, useState } from "react";

export default function Home() {
  const [text, setText] = useState("");
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    fetch("/api/feedback")
      .then((res) => res.json())
      .then(setFeedbacks)
      .catch(console.error);
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    if (!text.trim()) return;
    const res = await fetch("/api/feedback", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text }),
    });
    const data = await res.json();
    setFeedbacks([data, ...feedbacks]);
    setText("");
  }

  return (
    <main className="container">
      <h1>💬 Full-Stack Feedback App</h1>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Enter your feedback"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button>Add</button>
      </form>

      <ul>
        {feedbacks.map((f) => (
          <li key={f._id}>
            {f.text}
            <span>{new Date(f.createdAt).toLocaleString()}</span>
          </li>
        ))}
      </ul>
    </main>
  );
}
