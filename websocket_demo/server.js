
const ws = require("ws");



const wss = new ws.WebSocketServer({ port: 7890 });



const sockets = [];



wss.on("connection", (socket) => {

sockets.push(socket);

socket.on("message", (data) => {

console.log("Message from client: %s", data);

sockets.forEach((s) => s.send("From client: " + sockets.indexOf(socket) + ": " + data));

});

socket.send("Welcome new client");

});