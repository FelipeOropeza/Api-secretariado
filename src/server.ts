import "dotenv/config";
import http from "http";
import { Server } from "socket.io";
import app from "./app";

declare global {
  var io: Server;
}

const server = http.createServer(app);

// Configura o servidor WebSocket
global.io = new Server(server, {
  cors: { origin: "*" },
});

const PORT = process.env.PORT || 4000;

server.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
});
