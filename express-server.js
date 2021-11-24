
const express = require('express')
const path = require('path')



const app = express();

const PORT = 3000;

// controller
// transfer to individual routes


// router
const { friendsRouter } = require('./routes/friends.route')
const { messagesRouter } = require('./routes/messages.route')


// use w/ next
// logging middleware
app.use((req, res, next) => {
	const start = Date.now()

	next();
	const delta = Date.now() - start;

	// basic log. ex. GET / 4ms
	console.log(`${req.method}  ${req.baseUrl}${req.url}  ${delta}ms`)
})

// req.body
app.use(express.json());

// server static site, mount on /site
// not 'public'
app.use('/site', express.static(path.join(__dirname, 'public')))

// root router
app.use('/', [ friendsRouter, messagesRouter ])


// GET - /
// app.get('/', (req, res)=> {
// // .send for html, text, etc
// 	res.send('main page')
// })




app.listen(PORT, (err)=>{

	console.log(`listen to ${PORT}`)
})