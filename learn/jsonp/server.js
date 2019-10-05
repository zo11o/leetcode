const http = require('http');

var data  = { name: 'BruceLee', password: '123456' };

const server = http.createServer((request, response) => {

    if (request.url === '/') {
        response.writeHead(200, { 
            'Content-Type': 'application/json;charset=utf-8' 
        });
        
        // 返回一段 JavaScript 代码
        response.end( "jsonpCallback(" + JSON.stringify(data) + ")" );
    }

});

server.listen(3000, () => {
    console.log('The server is running at http://localhost:3000');
});
