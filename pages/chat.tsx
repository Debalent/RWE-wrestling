import React, { useState, useEffect } from "react";
import io from "socket.io-client";

// This is a basic real-time public chat page for RWE
// Fans can chat during live events, and owners can expand this for private rooms or DMs
const socket = io(); // Connects to the backend Socket.IO server

export default function ChatPage() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    // Receive new chat messages from server
    socket.on("chat message", (msg) => {
      setMessages((prev) => [...prev, msg]);
    });

    return () => {
      socket.off("chat message");
    };
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    socket.emit("chat message", input);
    setInput("");
  };

  return (
    <main className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-4xl font-bold text-center text-red-600 mb-6">💬 Live RWE Chat</h1>

      <section className="bg-gray-800 rounded-2xl p-4 max-w-3xl mx-auto shadow-lg">
        <div className="h-96 overflow-y-scroll border border-gray-700 rounded p-2 mb-4">
          {messages.map((msg, idx) => (
            <div key={idx} className="text-sm text-gray-200 mb-1">
              {msg}
            </div>
          ))}
        </div>

        <form onSubmit={sendMessage} className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            className="flex-grow p-2 rounded bg-gray-700 text-white placeholder-gray-400"
          />
          <button
            type="submit"
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
          >
            Send
          </button>
        </form>
      </section>
    </main>
  );
}
