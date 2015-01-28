var changelog = {
	"20150127": {
		"date": "January 27, 2015",
		"attrib": {
			"Announcement": "<br>Changelog has been cleared and from now on will only be used to update big changes rather than simple minor translation fixes here and there. That said, you can still access the more detailed(?) commit history at <a href=\"https://github.com/dakaringer/BnS-ST/commits/gh-pages\">Github</a>.",
		}
	}
}

for(var d in changelog) {
	var tab = "";
	var pane = "";
	if (changelog.hasOwnProperty(d)){
		var categories = "";
		for(var a in changelog[d]["attrib"]){
			categories += a + ", "
		}
		categories = categories.substring(0, categories.length-2);
		tab = "<li><a href=\"#\" onclick=\"expand();\"><p class=\"builder\">" + categories + "</p> <p class=\"levelreq\"></p><p class=\"title\">" + changelog[d]["date"] + "</p></li>";
		var desc = "";
		for (var b in changelog[d]["attrib"]){
			desc += b + "<br>" + changelog[d]["attrib"][b] + "<br>";
		}
		pane = "<div><p class=\"date\">" + changelog[d]["date"] + "</p>" + desc + "</div>";
	}
	
	$("#buildlist").append(tab);
	$("#changedesc").append(pane);
}