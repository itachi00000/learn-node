
const express = require('express')

const app = express();

const PORT = 3000;

const friends = [
{
	id:1,name: 'Tesla', 
},
{
	id:2, name: "Newton"
},
{
	id:3, name: "Einstein"
}]


app.get('/', (req, res)=> {

	res.send('hello')

})

app.get('/friends', (req, res)=> {

	res.send('friends route')

})

app.get('/messages', (req, res)=> {

	res.send('messages route')

})

// post

app.post('/messages', (req, res)=> {
	res.send('POST messages route')

})

app.post('/friends', (req, res)=> {
	res.send('POST friends route')

})


app.listen(PORT, (err)=>{

	console.log(`listen to ${PORT}`)
})