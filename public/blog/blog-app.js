const DATABASE_URL = window.location.origin //change to http://localhost:8080/api/posts when testing locally
																		// change to "https://vanity-cathedral.herokuapp.com/api/posts" when deploying to heroku
																		// also make this change in blog-editor-app.js and browserify it
function getDataFromDatabase(callback){
	$.getJSON(DATABASE_URL + '/api/posts', callback)
}

function printPosts(data){
	let posts = data.blogposts

	console.log(posts)

	posts.forEach((post) => {
		let formatDate = $.format.date(post.created, "MMMM D, yyyy")
		let prettyDate = $.format.prettyDate(post.created)

		console.log(formatDate)

		
		//if date post was created 30 days past then use formatDate otherwise use a pretty date e.g. 2 hours ago
		let date = ((Math.floor(post.created - Date.now) / (1000*60*60*24)) > 30) ? formatDate : prettyDate 

		console.log(date)

		let blogTemplate = '<div class=\"onePost row\">' +
								'<div class=\"col-xs-12 post\">' +
									'<div class=\"postTitle\">' + post.title + "</div>" +
									'<div class=\"infoRow row\">' + 
										// '<div class=\"col-xs-6 postAuthor\">' + post.author + '</div>' +
										'<div class=\"col-xs-6 col-xs-offset-6 postCreated\">' + date + '</div>' +
									'</div>' +
									'<div class=\"postContent\">' + post.content + '</div>' +
								'</div>' +
						   '</div>'+
						   '<hr class="breakLine">';
		$("#blogPostSection").prepend(blogTemplate)
	})
}

function returnData(){
	getDataFromDatabase(printPosts)
}

$(() => {
	returnData()
})