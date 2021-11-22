
const express = require('express')



const app = express();

const PORT = 3000;

// controller
const { getFriends, getFriend, postFriend } = require('./controls/friends.cont')
const { getMessages, postMessage } = require('./controls/messages.cont')

// use w/ next
// logging middleware
app.use((req, res, next) => {
	const start = Date.now()

	next();
	const delta = Date.now() - start;

	// basic log. ex. GET / 4ms
	console.log(`${req.method}  ${req.url}  ${delta}ms`)
})

// req.body
app.use(express.json());

// GET - /
app.get('/', (req, res)=> {
// .send for html, text, etc
	res.send('main page')
})

// GET - /friends - return all friends
app.get('/friends', getFriends)

// GET - /friend/:id - a friend
app.get('/friends/:friendId', getFriend)

// POST - /friends
app.post('/friends', postFriend)

// GET - /messages - return all messages
app.get('/messages', getMessages)

// POST - /messages
app.post('/messages', postMessage)




app.listen(PORT, (err)=>{

	console.log(`listen to ${PORT}`)
})