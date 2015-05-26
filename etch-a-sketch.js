//var squaresh = 35;
//var squaresw = 45;
var container = $('#container');


$(document).ready(function () {

	//grid(squaresh, squaresw);
	grid();

	draw();

	$('#normal').click(function() {
		draw();
	});

	$('#clear').click(function() {
		$('.square').unbind();
		$('.square').css("background-color", "white");
		$('.square').css("opacity", 1);
	});

	$('#techno').click(function() {
		$('.square').hover(function(){
				$(this).css("background-color", randomColor());
		});
	});

	$('#gradient').click(function()	{
		$('.square').unbind();
		$('.square').hover(function() {
			var currentOpacity = $(this).css("opacity")
			if(currentOpacity != 0) {
				$(this).css("opacity", currentOpacity - .10);
			}
		});
	});

	$('#resize').click(function() {
		newSize();
	});

});


function randomColor(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + "," +  g + ","+ b + ")"
}

function grid(){
	container.find('.square').remove();

	var $grid = $('#pixelgrid');

	for (i = 0; i < 35; i++) 
	{
    	var row = '<div>';

   		for (j = 0; j < 45; j++)
       		row += '<div class="square">' + '</div>';

   		row += '</div>';

    	$grid.append(row);
	}
}

function draw() {
	$('.square').hover(function() {
		$(this).css("background-color", "black");
	});
}

function newSize() {
	//$("#pixelgrid").html("");
	$('.square').html("");
	//$('.square').unbind();
	var numSquaresw = parseFloat(prompt("How many boxes (1-60) do you want wide? " + 
		"Cancel for default sides."));
	var numSquaresh = parseFloat(prompt("How many boxes (1-60) do you want high? " + 
		"Cancel for default sides."));
	if(((isNaN(numSquaresw)) && (isNaN(numSquaresh))) ||  ((numSquaresh < 1 || numSquaresh > 60) && (numSquaresw < 1 || numSquaresw > 60))) {
		numSquaresw = $('.square').css("height", 16);
		numSquaresh = $('.square').css("width", 16);
	}
	//grid(numSquaresh, numSquaresw);
	$('.square').css("height", numSquaresh + "px");
	$('.square').css("width", numSquaresw + "px");
}

