# 💬 LiveChat — Real-Time Chat Service

A real-time multi-room chat service built with **Node.js**, **Express**, and **Socket.IO**.

---

## 🚀 Quick Start

### 1. Install dependencies
```bash
npm install
```

### 2. Start the server
```bash
# Production
npm start

# Development (auto-restarts on file change)
npm run dev
```

### 3. Open in browser
```
http://localhost:3000
```

Open **multiple browser tabs** to simulate multiple clients chatting!

---

## 📁 Project Structure

```
chat-app/
├── server.js          # Socket.IO + Express server
├── package.json       # Dependencies
├── public/
│   └── index.html     # Chat client (served statically)
└── README.md
```

---

## ⚡ Features

| Feature | Details |
|---|---|
| **Multi-room** | Join any named room; rooms are created on-the-fly |
| **Typing indicators** | See when others are typing in real time |
| **Message history** | Last 50 messages shown on join |
| **Emoji reactions** | React to any message with 👍❤️😂🔥👏 |
| **Online user list** | Live sidebar showing who's in the room |
| **System messages** | Join/leave events shown in chat |
| **Color-coded avatars** | Each user gets a unique color |

---

## 🔌 Socket.IO Events

### Client → Server
| Event | Payload | Description |
|---|---|---|
| `join_room` | `{ username, room }` | Join a chat room |
| `send_message` | `{ text }` | Send a message |
| `typing_start` | — | Start typing indicator |
| `typing_stop` | — | Stop typing indicator |
| `react_message` | `{ messageId, emoji }` | React to a message |

### Server → Client
| Event | Payload | Description |
|---|---|---|
| `joined_room` | `{ user, room, history, onlineUsers }` | Confirm join + send history |
| `message` | `{ id, type, text, username, color, ... }` | New chat or system message |
| `room_users` | `[user, ...]` | Updated user list |
| `user_typing` | `{ username, typing }` | Typing status of a user |
| `message_reaction` | `{ messageId, emoji, username }` | Someone reacted |
| `error_event` | `{ message }` | Error notification |

---

## 🌐 REST API

| Endpoint | Description |
|---|---|
| `GET /api/rooms` | List all active rooms with user counts |

---

## 🛠 Requirements

- **Node.js** v16 or higher
- npm v7 or higher

---

## 🧪 Testing with Multiple Clients

1. Start the server: `npm start`
2. Open `http://localhost:3000` in Tab 1 — enter name + room, click **Join**
3. Open `http://localhost:3000` in Tab 2 — enter a different name, **same room**
4. Start chatting between tabs!

You can also test from **different devices on the same network** by replacing `localhost` with your machine's local IP (e.g. `192.168.1.x:3000`).


 