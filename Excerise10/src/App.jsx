import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFeedback, deleteFeedback } from "./feedbackSlice";

export default function App() {
  const [text, setText] = useState("");
  const feedbacks = useSelector((state) => state.feedback.items);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    dispatch(addFeedback(text));
    setText("");
  };

  return (
    <div className="container">
      <h1>💬 Feedback Collector</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your feedback"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>

      {feedbacks.length === 0 ? (
        <p>No feedback yet.</p>
      ) : (
        <ul>
          {feedbacks.map((f) => (
            <li key={f.id}>
              {f.text}
              <button onClick={() => dispatch(deleteFeedback(f.id))}>
                ❌
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
