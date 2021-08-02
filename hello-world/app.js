const http = require('http');
const constants = require('./constants');

const hostname = constants.hostname;
const port = constants.port;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World\n');
});

server.listen(port, hostname, () => {
    console.log(`Server Listening on http://${hostname}:${port}/`);
});
