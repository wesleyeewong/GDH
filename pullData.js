function loadJSON(callback) {

	var xobj = new XMLHttpRequest();
	xobj.overrideMimeType("application/json");
	xobj.open('GET', 'http://www.reddit.com/r/gamedeals/new.json?sort=new', true);
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
			stuff += "<div class='rows'> <img src='" + actual_JSON.data.children[i].data.thumbnail + "' width=10px height=10px>" + "<a href='" + actual_JSON.data.children[i].data.url + "'>" + actual_JSON.data.children[i].data.title + "</a></div>";
			document.getElementById('content').innerHTML=stuff;
		}
	});
}

document.addEventListener('DOMContentLoaded', init);
