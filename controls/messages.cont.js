
//  using declarative func vs arrow func
// for debugging
function getMessages(req, res) {

if(friends.length > 0){
// .json for data
	return res.json(friends)
}

return res.send('messages')
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
	postMessage
}