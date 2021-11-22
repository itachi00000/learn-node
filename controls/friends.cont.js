


const { friends } = require('../models/friends.model')

//  using declarative func vs arrow func
// for debugging

//  GET ALL
function getFriends(req, res) {

if(friends.length > 0){
// .json for data
	return res.json(friends)
}

return res.status(404).json({
		error: "no friend list"
	})
}

// GET A
function getFriend(req, res){

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

}

// POST
function postFriend(req, res){
	const { name } = req.body

	if(!name) {
		// 400 - a generic/general error
		return res.status(400).json({ error: 'invalid' })
	}

	const newFriend = { id: friends.length+1, name }

	friends.push(newFriend);

	return res.json(newFriend)

}


// export
module.exports = {
	getFriends,
	getFriend,
	postFriend
}