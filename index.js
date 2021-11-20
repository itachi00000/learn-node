const http = require('http');

const PORT = 3000;

const server = http.createServer();

server.on('request', (req,res)=> {

	const item = req.url.split('/');
	// /friends/2 => ['', 'friends', '2']

	if(req.url === '/friends'){

	// res.writeHead(200, {
	// 	'Content-Type': 'application/json'
	// })

	res.statusCode = 200;
	res.setHeader('Content-Type', 'application/json')

	res.end(JSON.stringify({id:1, name: 'Newton'}))

	} else if(req.url === '/messages') {
		res.setHeader('Content-Type', 'text/html')
		res.write('<html>');
		res.write('<body>');
		res.write('<h1>Hi sma</h1>');
		res.write('</body>');
		res.write('</html>');
		res.end();

	} else {
		// to show http error 404
		res.statusCode = 404;
		res.end();
	}


})

// 127.0.0.1 or localhost
server.listen(PORT, ()=>{
	console.log(`listen to port ${PORT}..`)
}); 