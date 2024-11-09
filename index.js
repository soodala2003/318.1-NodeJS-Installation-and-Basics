//import { createServer } from 'http';

const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

const routes = {
    "/": "Hello World",
    "/about": "About Page",
    "/contact": "Contact Page",
};

const server = http.createServer((req, res) => {
    const response = routes[req.url];

    if (response) {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'test/html');
        res.write(response);
    } else {
        res.statusCode = 404;
        res.write('404 not found');
    } 
    res.end();
});   

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

/* http
    .createServer((req, res) => {
        const response = routes[req.url];

        if (response) {
            res.statusCode = 200;
            es.setHeader('Content-Type', 'test/html');
            res.write(response);
        } else {
            res.statusCode = 404;
            res.write('404 not found');
        } 
        res.end();
    }).listen(3000, () => {
        console.log(`Server running.`);
}); */

/* const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'test/html');
    res.write('<h1 style="color: red">Hello World!</h1>');
    res.write('<p>I wonder what else we can send...</p>');
    res.end();
});   */

/* const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'test/plain');
    res.end('Hello World!\n');
}); */





