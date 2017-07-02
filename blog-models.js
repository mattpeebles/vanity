const mongoose = require('mongoose')

const blogSchema = mongoose.Schema({
	title: {type: String, required: true},
	content: {type: String, required: true},
	author: {type: String, default: "Matt Peebles"},
	created: {type: Date, default: Date.now}
})

blogSchema.methods.apiRepr = function() {
	return {
		id: this._id,
		title: this.title,
		content: this.content,
		author: this.author,
		created: this.created,
	}
}

const Blog = mongoose.model('posts', blogSchema) //database name must be posts

module.exports = {Blog}