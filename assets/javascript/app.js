
Q1 = "What mammal swims in the ocean?";
Q2 = "What animal has a long neck?";
Q3 = "What animal has black and white stripes?";
Q4 = "What bug is yellow and black?";
arrayQuestions = [Q1, Q2, Q3, Q4];

arrayAnswersQ1 = ["Fish", "Shark", "Turtle", "Whale"];
arrayAnswersQ2 = ["Turtle", "Salmon", "Giraffe", "Sponge Bob"];
arrayAnswersQ3 = ["Hermitt Crab", "Zebra", "Star Fish", "Goat"];
arrayAnswersQ4 = ["Bee", "Hawk", "Spider", "Fly"];
totalArrayAnswers = [arrayAnswersQ1, arrayAnswersQ2, arrayAnswersQ3, arrayAnswersQ4];


var thirtySecondTimeout;

playGame();

////////////////////////////
	function playGame()
	{
		for (n = 0; n < arrayQuestions.length; n++)
		{
		resetQandA(n);
		}
	}
////////////////////////////




////////////////////////////
	function resetQandA(n)
	{
	$("#question").html(arrayQuestions[n]);
	// $("#choices").html(totalArrayAnswers[n]);
	renderButtons(n);
	}
////////////////////////////


////////////////////////////
function renderButtons(n)
	{ 

		// Deletes the movies prior to adding new movies (this is necessary otherwise you will have repeat buttons)
		$('#choices').empty();
		var tempArray = [totalArrayAnswers[n]];
		console.log(tempArray);
		// Loops through the array of movies
		for (var i = 0; i < totalArrayAnswers.length; i++)
		{

			// Then dynamicaly generates buttons for each movie in the array

			// Note the jQUery syntax here... 
		    var a = $('<button>') // This code $('<button>') is all jQuery needs to create the beginning and end tag. (<button></button>)
		    // a.addClass('movie'); // Added a class 
		    a.attr('data-name', tempArray[i]); // Added a data-attribute
		    a.text(tempArray[i]); // Provided the initial button text
		    $('#choices').append(a); // Added the button to the HTML
		}
	}

////////////////////////////



	var count=30;
function askQuestion(){

	
	var counter=setInterval(timer, 1000); 

////////////////////////////
	function timer()
	{
	  count=count-1;
	  // if (count <= 0)
	  // {
	  // }
	  $("#timeLeft").html("Time Left: " + count);
	};
///////////////////////////




}

function timeUp(){
    
    setTimeout(waitFiveSeconds, 1000 * 5);
}

function waitFiveSeconds(){
	$("timeLeft").html('<h2>Time\'s Up!</h2>');
}

