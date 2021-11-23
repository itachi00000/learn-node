const router = require('express').Router();

// msg cont
const { getMessages, getMessage, postMessage } = require('../controls/messages.cont')


// GET - /messages - return all messages
router.get('/messages', getMessages)

// GET - /friend/:id - a friend
router.get('/messages/:msgId', getMessage)

// POST - /messages
router.post('/messages', postMessage)


module.exports = { messagesRouter: router }