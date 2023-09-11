import http from 'http'

const server = http.createServer((req, res)=>{
    // console.log('headers', req.headers);
    console.log('methods', req.method);
    console.log('url', req.url);

    const user = {
        name:'Jack',
        title: 'Don'
    }
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(user));
})

server.listen(3000);