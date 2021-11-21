const http = require('http');

const PORT = 3000;

const server = http.createServer();

const friends = [
{
	id:1,name: 'Tesla', 

},{
	id:2, name: "Newton"
},{
	id:3, name: "Einstein"
}
]

server.on('request', (req,res)=> {

res.statusCode = 200;
res.setHeader('Content-Type', 'application/json')

	const items = req.url.split('/');
	// /friends/2 => ['', 'friends', '2']

if (req.method === 'POST' && items[1] === 'friends') {
	req.on('data', (data) => {
	
		// data is buffer, so convert to toString()
		const friend = data.toString()
		console.log('Req:', friend);

		friends.push(JSON.parse(friend))

		res.end();
	})


} else if(req.method === 'GET' && items[1] === 'friends'){

// length is 3 or in params

// if length is 3, and not empty string
if(items.length === 3  && items[2] !== '') {
	const friendIndex = Number(items[2]);

// friends is array list
	

	// use '||' to check if empty
	res.end(JSON.stringify(friends[friendIndex-1] || 'no info'));

} 


// else

res.end(JSON.stringify(friends));

// if greater than 3, do 404

if(items.length > 3){
	res.statusCode = 404;
	res.end();
}

	// res.statusCode = 200;
	// res.setHeader('Content-Type', 'application/json')
	// console.log(friends)
	// res.end();


	


	} else if(req.method === 'GET' && items[1] === 'messages') {
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