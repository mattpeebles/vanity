const mongoose = require('mongoose')

const blogSchema = mongoose.Schema({
	title: {type: String, required: true}
	content: {type: String, required: true}
	"hero-image": {type: String}
	author: {
		firstName: String,
		lastName: String},
	created: {tpe: Date, default: Date.now}
})

blogSchema.virtual('fullName').get(() => {
	return `${this.author.firstName} ${this.author.lastName}`.trim()
})

blogSchema.methods.apiRepr = function() {
	return {
		id: this._id,
		title: this.title,
		content: this.content,
		author: this.fullName,
		created: this.created,
		"hero-image": this.hero-image
	}
}

const Blog = mongoose.model('posts', blogSchema) //database name must be posts

module.exports = {Blog}