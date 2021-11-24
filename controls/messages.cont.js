const path = require('path');
// to get path

const { messages } = require('../models/messages.model')

//  using declarative func vs arrow func
// for debugging
function getMessages(req, res) {

const imgPath = path.join(__dirname, '..', 'public', 'images', 'pic.jpg')

return res.sendFile(imgPath)

// if(messages.length > 0){
// // .json for data
// 	return res.json(messages)
// }

// return res.status(404).send('no messages')
}

// get a msg
function getMessage(req, res) {

// const friendId = req.params.friendId
	const { msgId } = req.params

// note message is not yet a Model, but a simple array of obj
	const msgData = messages[Number(msgId) - 1] 

	if(msgData) {
		// .json for data
		// dont forget the return
		return res.json(msgData)
	} 

	return res.status(404).json({
		error: "no message"
	})

}

function postMessage(req, res) {

	const { message } = req.body

if(!message) {
		// 400 - a generic/general error
		return res.status(400).json({ error: 'invalid' })
	}

	return res.send('POST messages route')

}

// export
module.exports = {
	getMessages,
	getMessage,
	postMessage
}