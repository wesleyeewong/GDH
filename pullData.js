function loadJSON(callback) {

	var xobj = new XMLHttpRequest();
	var url = refresh();
	console.log(url);
	xobj.overrideMimeType("application/json");
	xobj.open('GET', url, true);
	xobj.onreadystatechange = function () {
		if (xobj.readyState == 4 && xobj.status == "200") {
			callback(xobj.responseText);
		}
	};
	xobj.send(null);

}

function init() {
	loadJSON(function(response) {
		var actual_JSON=JSON.parse(response);
		console.log(actual_JSON);
		console.log(actual_JSON.data.children[0].data.title);
		var stuff = "";
		for (var i = 0; i < 5; i++) {
			if (actual_JSON.data.children[i].data.thumbnail!=="default") {
			stuff += "<div class='rows'> <table style='width:100%'> <tr><td style='width:60px, height:60px'><img src='" + actual_JSON.data.children[i].data.thumbnail + "' width=60px height=60px></td>" + 
"<td><a href='" + actual_JSON.data.children[i].data.url + "' target='_blank'>" + actual_JSON.data.children[i].data.title + "</a></td></tr></table></div>";
				console.log(actual_JSON.data.children[i].data.thumbnail);
			} 
			else {
				stuff += "<div class='rows'> <table style='width:100%'> <tr><td style='width:60px, height:60px'><img src='icon.png' width=60px height=60px></td>" + 
"<td><a href='" + actual_JSON.data.children[i].data.url + "' target='_blank'>" + actual_JSON.data.children[i].data.title + "</a></td></tr></table></div>";
				console.log("else");
			}
			document.getElementById('content').innerHTML=stuff;
		}
	});
}

function refresh() {
	console.log(document.getElementById('subreddit').value);
	var value = "http://www.reddit.com/r/" + document.getElementById('subreddit').value + "/new.json?sort=new";
	return value;

}

document.addEventListener('DOMContentLoaded', init);
