
const express = require('express')

const app = express();

const PORT = 3000;

const friends = [{
	id:1,name: 'Tesla', 
},{
	id:2, name: "Einstein"
},{
	id:3, name: "Newton"
}
]

// use w/ next
// logging middleware
app.use((req, res, next) => {
	const start = Date.now()

	next();
	const delta = Date.now() - start;

	// basic log. ex. GET / 4ms
	console.log(`${req.method}  ${req.url}  ${delta}ms`)
})

// GET - /
app.get('/', (req, res)=> {

// .send for html, text, etc
	res.send('main page')

})

// GET - /friends - return all friends
app.get('/friends', (req, res)=> {

if(friends.length > 0){
// .json for data
	return res.json(friends)
}

return res.status(404).json({
		error: "no friend list"
	})

})

// GET - /friend/:id - a friend
app.get('/friends/:friendId', (req, res)=> {

// const friendId = req.params.friendId
	const { friendId } = req.params

	const friendData = friends[Number(friendId) - 1] 

	if(friendData) {
		// .json for data
		// dont forget the return
		return res.json(friendData)
	} 


	return res.status(404).json({
		error: "friend not exist"
	})
	

	

})

// GET - /messages - return all messages
app.get('/messages', (req, res)=> {

	res.send('messages route')

})


// POST - /messages
app.post('/messages', (req, res)=> {
	res.send('POST messages route')

})

// POST - /friends
app.post('/friends', (req, res)=> {
	res.send('POST friends route')

})


app.listen(PORT, (err)=>{

	console.log(`listen to ${PORT}`)
})