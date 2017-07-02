const {DATABASE_URL} = require('./config')

function getDataFromDatabase(callback){
	$.getJSON(DATABASE_URL, callback)
}

function printPosts(data){
	data.forEach(post => console.log(post))
}

function returnData(){
	getDataFromDatabase(printPosts)
}

$(() => {
	returnData()
})