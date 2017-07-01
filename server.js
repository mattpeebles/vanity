const express = require('express')
const morgan = require('morgan')
const app = express()

const mongoose = require('mongoose')
mongoose.Promise = global.Promise;

const {PORT, DATABASE_URL} = require('./config')

app.use(morgan('common'))

app.use(express.static('public'))

function runServer(databaseUrl=DATABASE_URL, port=PORT){
	return new Promise((resolve, reject) => {
		mongoose.connect(databaseUrl, err => {
			if (err){
				return reject(err)
			}
			server = app.listen(port, () => {
				console.log(`Vanity is listening on port ${port}`)
				resolve();
			})
			.on('error', err => {
				mongoose.disconnect()
				reject(err)
			})
		})
	})
}

function closeServer(){
	return mongoose.disconnect().then(() => {
		return new Promise((resolve, reject) => {
			console.log('Closing server')
			server.close(err => {
				if (err) {
					return reject(err)
				}
				resolve()
			})
		})
	})
}

if (require.main === module) {
  runServer().catch(err => console.error(err));
};




module.exports = {app, runServer, closeServer}