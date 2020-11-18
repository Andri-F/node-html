/*
MongoDB => database
Express => library untuk server
Vue = frontend (angular, react, dll)
Node => runtime
*/

/*
//membaca dari sistem

const fs = require('fs'); //file sistem
fs.readFile('hello.txt', function (err, data) {
    if (err) {
        console.log(err.stack);
    } else {
        console.log(data.toString()); //data harus dirubah ke string
     }
})

fs.readFile('hello.txt', callback); //asynchronous

const data = fs.readFileSync('hello.txt'); //synchronous
console.log(data.toString()); */

/*
//untuk server
const http = require('http');

const port = 3000;
const app = http.createServer(function (request, response) {
    response.writeHead(200, { 'Content-Type': 'text/plain'});
    response.end('This is an HTTP example');

});
app.listen(port);

console.log(`The server starte on port ${port}`);
*/

//untuk html

const http = require('http');
const httpStatus = require('http-status-codes');
const fs = require('fs');

const port = 3000;

const routes = {
    /*
    '/'     : '<h1> Hello </h1>',
    '/about': '<h1> wanna know more?</h1> <p>click here!</p>'
    */
   '/'      : 'views/index.html',
   '/about' : 'views/about.html'
}

const app = http.createServer(function (request, response) {
    const url = request.url;
    console.log(`incoming request to ${url}`);

    if(routes[url]) {
        response.writeHead(httpStatus.OK, { 'Content-Type': 'text/html'});
        fs.readFile(routes[url], (err, data) => {
            response.end(data);
        });
        
        //response.end(routes[url]);
    } else {
        response.writeHead(httpStatus.NOT_FOUND, { 'Content-Type': 'text/plain'});
        response.end('page not found.');
    }
    /*
    response.writeHead(httpStatus.OK, { 'Content-Type': 'text/html' });

    response.write('<h1> Hello there!</h1>');
    response.write('<p>This is node server.</p>');
    */
    
    
});
app.listen(port);

console.log(`server is started on port ${port}`);