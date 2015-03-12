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
	});
}
