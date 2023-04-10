const webSocketServer = require("websocket").server;
const { log } = require("console");
const http = require("http");

const port = 55455;
const server = http.createServer();
server.listen(port, () => {
	console.log(`WebSocket server started on ws://localhost:${port}`);
});
const wsServer = new webSocketServer({ httpServer: server });

wsServer.on("request", function (request) {
	console.log("establishing a new connection with client");
	var connection = request.accept(null, request.origin);
	setInterval(() => {
		connection.sendUTF(new Date().getTime());
	}, 100);
});
