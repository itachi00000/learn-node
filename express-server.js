
const express = require('express')
const exphbs = require('express-handlebars'); // alt to hbs
const path = require('path')

const PORT = 3000;


const app = express();

// vars, options
const exphbsOptions = {
	extname: '.hbs',
	defaultLayout: "layout.hbs"
}


// router
const { friendsRouter } = require('./routes/friends.route')
const { messagesRouter } = require('./routes/messages.route')


//  views hbs
app.engine('.hbs', exphbs(exphbsOptions))
app.set('view engine', '.hbs')
app.set('views', path.join(__dirname, 'views'))


// render index.hbs
app.get('/', (req, res)=>{
	res.render('index', {
		title: "homepage learn node",
		caption: "Random Image"
	})
})


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


app.listen(PORT, (err)=>{
	console.log(`listen to ${PORT}`)
})