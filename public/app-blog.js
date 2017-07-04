const DATABASE_URL = "http://localhost:8080/api/posts" //this will need to be changed once app is fully deployed

function getDataFromDatabase(callback){
	$.getJSON(DATABASE_URL, callback)
}

function printPosts(data){
	let posts = data.blogposts

	console.log(posts)

	posts.forEach((post) => {
		let formatDate = $.format.date(post.created, "dd/MM/yyyy")
		let prettyDate = $.format.prettyDate(post.created)

		
		//if date post was created 30 days past then use formatDate otherwise use a pretty date e.g. 2 hours ago
		let date = ((Math.floor(post.created - Date.now) / (1000*60*60*24)) > 30) ? formatDate : prettyDate 

		console.log(date)

		let blogTemplate = '<div class=\"row\">' +
								'<div class=\"col-xs-12 post\">' +
									'<div class=\"postTitle\">' + post.title + "</div>" +
									'<div class=\"row\">' + 
										'<div class=\"col-xs-6 postAuthor\">' + post.author + '</div>' +
										'<div class=\"col-xs-6 postCreated\">' + date + '</div>' +
									'</div>' +
									'<div class=\"postContent\">' + post.content + '</div>' +
								'</div>' +
						   '</div>';
		$("#blogPostSection").append(blogTemplate)
	})
}

function returnData(){
	getDataFromDatabase(printPosts)
}

$(() => {
	returnData()
})