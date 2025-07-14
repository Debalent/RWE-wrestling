import React, { useState } from "react";

// Admin Chat Manager for RWE
// Lets owners moderate public chats and messages
export default function AdminChat() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      user: "FanGuy92",
      text: "Did you see that powerbomb?! 🔥",
      flagged: false,
    },
    {
      id: 2,
      user: "HeelHunter",
      text: "This ref is trash 🙄",
      flagged: true,
    },
  ]);

  const removeMessage = (id) => {
    setMessages(messages.filter((m) => m.id !== id));
  };

  const toggleFlag = (id) => {
    setMessages(
      messages.map((m) =>
        m.id === id ? { ...m, flagged: !m.flagged } : m
      )
    );
  };

  return (
    <main className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-4xl font-bold text-red-600 text-center mb-10">
        💬 Chat Moderation
      </h1>

      <section className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Recent Messages</h2>
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`bg-gray-800 p-4 mb-3 rounded-xl flex justify-between items-start shadow ${
              msg.flagged ? "border border-yellow-500" : ""
            }`}
          >
            <div>
              <p className="font-bold text-red-400">{msg.user}</p>
              <p className="text-white">{msg.text}</p>
              {msg.flagged && (
                <span className="text-yellow-400 text-sm">🚩 Flagged</span>
              )}
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => toggleFlag(msg.id)}
                className="bg-yellow-600 hover:bg-yellow-700 px-2 py-1 text-sm rounded"
              >
                {msg.flagged ? "Unflag" : "Flag"}
              </button>
              <button
                onClick={() => removeMessage(msg.id)}
                className="bg-gray-700 hover:bg-red-700 px-2 py-1 text-sm rounded"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </section>

      <p className="text-sm text-gray-400 max-w-3xl mx-auto mt-4">
        📌 Note: This is for chat room moderation. Direct messages and live chat tools can be expanded with real-time backend like Socket.IO or Supabase.
      </p>
    </main>
  );
}
