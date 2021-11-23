const router = require('express').Router();

// cont
const { getFriends, getFriend, postFriend } = require('../controls/friends.cont')

// friend middleware
router.use((req, res, next) => {
	console.log(`ip address: ${req.ip}`)

	next();
})

// GET - /friends - return all friends
router.get('/friends', getFriends)

// GET - /friend/:id - a friend
router.get('/friends/:friendId', getFriend)

// POST - /friends
router.post('/friends', postFriend)

// export
module.exports = { friendsRouter : router }