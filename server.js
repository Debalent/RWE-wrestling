const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*", // Replace with your frontend URL in production
    methods: ["GET", "POST"],
  },
});

// Map to track connected users: userId => socketId
const connectedUsers = new Map();

io.on("connection", (socket) => {
  console.log(`User connected: ${socket.id}`);

  // Client sends their userId to register on connection
  socket.on("registerUser", (userId) => {
    connectedUsers.set(userId, socket.id);
    console.log(`Registered user ${userId} with socket ${socket.id}`);
  });

  // Listen for private messages
  socket.on("privateMessage", (msg) => {
    const { to } = msg;
    const toSocketId = connectedUsers.get(to);

    if (toSocketId) {
      // Send message to recipient
      io.to(toSocketId).emit("privateMessage", msg);
    }
  });

  socket.on("disconnect", () => {
    // Remove user from map on disconnect
    for (const [userId, socketId] of connectedUsers.entries()) {
      if (socketId === socket.id) {
        connectedUsers.delete(userId);
        console.log(`User disconnected: ${userId}`);
        break;
      }
    }
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Socket.IO server running on port ${PORT}`);
});
