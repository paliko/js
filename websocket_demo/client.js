// const ws = require('ws');
// const socket = new ws.WebSocket('ws://localhost:7890')  //nemusel bych delat kdyz bych pouzival browser, ale kdy mam server v node, tak musim udelat
// socket.on('message',data=>console.log('Mesasge from server: ',data))
// socket.on("open", ()=>socket.send("Hello from client")) 



const ws = require("ws");

const socket = new ws.WebSocket("ws://localhost:7890/");

socket.on("message", (data) => console.log("Message from server: %s", data));

socket.on("open", ()=>socket.send("Hello from client"));