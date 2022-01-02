const http = require('http');

const server = http.createServer((req,res) => {
    if(req.url === '/'){
        res.end('welcome to our home page')
    }
    if(req.url === '/about'){
        res.end('this is about page')
    }res.end('opps')
})
 
server.listen(3000); 