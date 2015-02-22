$(document.body).ready(function() {
	var names = [
		"sliceofcode.",
		"make",
		"sudo make install",
		"./configure",
		"make test",
		"dmesg | less",
	];

	var name = names[Math.floor(Math.random() * names.length)];

	var q = $.map(name.split(""), function(letter) {
		return $("<span>" + letter + "</span>");
	});

	var dest = $("#slice");

	var c = 0;
	var i = setInterval(function() {
		q[c].appendTo(dest).show();
		c += 1;
		if (c >= q.length) clearInterval(i);
	}, 100);

	var u = setTimeout(function() {
		$("#slice>span").addClass("curly-underline");
	}, 100 * name.length + 1000)
});
