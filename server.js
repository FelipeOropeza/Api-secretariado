import "dotenv/config";
import http from "http";
import { Server } from "socket.io";
import app from "./src/app.js";

const server = http.createServer(app);
global.io = new Server(server, { cors: { origin: "*" } });

server.listen(process.env.PORT || 4000, "0.0.0.0", () => {
  console.log(`Servidor rodando na porta ${process.env.PORT || 4000}`);
});
