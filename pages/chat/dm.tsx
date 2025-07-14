import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";

// Connect to the Socket.IO server
const socket = io("http://localhost:3000"); // 🔧 Replace with actual server URL

// Public Live Chat Room for RWE fans
export default function LiveChatRoom() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // Receive messages from the server
    socket.on("chatMessage", (msg) => {
      setMessages((prev) => [...prev, msg]);
    });

    return () => {
      socket.off("chatMessage");
    };
  }, []);

  const sendMessage = () => {
    if (!message.trim()) return;
    const msg = {
      user: "FanUser", // 🔧 Replace with actual user auth logic
      text: message,
    };
    socket.emit("chatMessage", msg);
    setMessage("");
  };

  return (
    <main className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-4xl font-bold text-center text-red-600 mb-6">
        💬 RWE Live Chat Room
      </h1>

      <div className="max-w-2xl mx-auto bg-gray-800 p-4 rounded-xl shadow mb-6 h-[500px] overflow-y-auto">
        {messages.map((msg, index) => (
          <div key={index} className="mb-3">
            <p className="font-semibold text-red-400">{msg.user}</p>
            <p className="text-white">{msg.text}</p>
          </div>
        ))}
      </div>

      <div className="max-w-2xl mx-auto flex gap-2">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message..."
          className="flex-1 p-2 rounded text-black"
        />
        <button
          onClick={sendMessage}
          className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded"
        >
          Send
        </button>
      </div>

      <p className="text-sm text-gray-400 mt-4 max-w-2xl mx-auto">
        📌 This chat room updates in real time. Make sure the Socket.IO server is running at the backend.
      </p>
    </main>
  );
}
