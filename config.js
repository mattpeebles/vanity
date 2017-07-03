exports.DATABASE_URL = process.env.DATABASE_URL ||
			   		   global.DATABASE_URL ||
			   		   "mongodb://localhost/posts"

exports.PORT = global.PORT || 8080;