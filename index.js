const fs = require('fs');
const http = require("http");
const port = process.env.PORT || 3000;


//server and routing
const server = http.createServer((req, res) => {
    const url = req.url
  
    if (url ===  '/') {
        fs.readFile('index.html', (err, data) => {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            return res.end();
        });
    } else if(url === '/contact-me') {
        fs.readFile('contact-me.html', (err, data) => {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            return res.end();
        });
    } else if(url === 'about') {
        fs.readFile('about.html', (err, data) => {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            return res.end();
        });
    } else {
        fs.readFile('404.html', (err, data) => {
            res.writeHead(404, {'Content-Type': 'text/html'});
            res.write(data);
            return res.end();
        });
    }
});

//run server
server.listen(port, () => {
    console.log(`Server running at port ${port}`);
})