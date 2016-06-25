

dat = [1,2,3,4,5]
var multiply_input = 2;

var viz = {
	width: 800,
	height: 500
}

var padding = {
	left: 30,
	right: 30,
	top: 30,
	bottom: 30
}



svg1 = d3.select("#viz")
	.append("svg")
	.attr("width", viz.width)
	.attr("height", viz.height)
	.append("g")
	.attr("transform", "translate(" + padding.left + "," + padding.top + ")");

nums1 = svg1.selectAll(".input_number")
	.data(dat).enter()
	.append("text")
	.attr("class", "input_number")
	.attr("class", "number")
	.attr("x", 30)
	.attr("y", function(d, i) { return ((i + 1) * 40) })
	.text(function (d){ return d });


multipy1 = svg1.selectAll(".multiply_number")
	.data(dat).enter()
	.append("text")
	.attr("class", "multiply_number")
	.attr("class", "number")
	.attr("y", 40)
	.attr("x", 700)
	.text(function() { return "x " + multiply_input })
	.transition()
		.duration(1500)
		.attr("x", 60)
	.transition()
		.duration(function(d,i) { return 2000 })
		//.delay(1500)
		.attr("y", function(d, i) { return ((i+1) * 40) });


// results1 = svg1.selectAll(".results1_number")
// 	.data(dat).enter()
// 	.append("text")
// 	.attr("class", "results1_number")
// 	.attr("class", "number")
// 	.attr("y", 40)
// 		.attr("x", 700)
// 		.text("x 2")




