
var allGuesses=[]; //creates array to store guesses 


var randomNumber= Math.floor(Math.random() * (99)) +1; //generate random number

function playGame(number){

 //if guessed correctly
   if (number==randomNumber){
		endGame(true);
	}
 //if something was passed in	
	if(number!=="")
		{
	    allGuesses.push(number); //push number to array
		guesses(allGuesses); //call guesses
    	}
	
}

function guesses(allGuesses){


    if(allGuesses.length>1)
		{

   var recentGuess= allGuesses[allGuesses.length-1]; //recent guess

   var previousGuess= allGuesses[allGuesses.length-2]; //previous guess

	 if(Math.abs(randomNumber-recentGuess) < Math.abs(randomNumber-previousGuess))//compare values to see which is closer
	 {

	 	 $(".indicator").html("<h2>Your getting Warmer</h2>"); //display string
	 	 
	 	 $("#main").css("background-color","red"); //change div color

 		
    }else if( Math.abs(randomNumber-recentGuess) == Math.abs(randomNumber-previousGuess) && recentGuess!==previousGuess) //if there equal to each other, tell user they are close
    {  
	 	 $(".indicator").html("<h2>You just went passed it !!</h2>");
    	 
    	 $("#main").css("background-color","yellow");
    	
           }else if (recentGuess==previousGuess) //if the last two guesses are the same
           {
          
          $(".indicator").html("<h2>Womp Womppp..</h2>");
    	 
    	 $("#main").css("background-color","grey");

           } 
           else { ///////if user is getting colder////////////////////////

           	$(".indicator").html("<h2>You're getting colder!</h2>");

           	 $("#main").css("background-color","1E90FF");
           	
           }

}
//***********************if game is up *******************
 if (allGuesses.length==10){
 	endGame(false);
 }

}


function endGame(outcome){

	
	if (outcome==true){
		$('#main').empty();
		$('#main').append("<h2> Wooooo!! Congrats you guessed correctly! </h2>");
		$('#main').append('To Play Again, hit Reset button in lower corner');

	}
	else{
		$('#main').empty();
		$('#main').append('<h2> Sorry you ran out of Turns</h2>');
		$('#main').append("<h2> Correct Answer was: "+randomNumber+"</h2>");
		$('#main').append('To Play Again, hit Reset button in lower corner');
		
	}
}



$(document).ready(function() {
	var count=10;
	
  $('form').on('submit', function(e){
   
     e.preventDefault();

     var number = $( "#num" ).val();

      var toAdd= $('#num').val();

    $(".list").append("<div class='item'>"+toAdd+"</div>");
     count--;
     $('#guessLeft').html(""+count+"");

     playGame(number,randomNumber);
 
   
  });

$('#hint').click(function(){

	$('#hint').html('Answer is '+ randomNumber);
	
});

$('.reset').click(function(){
	location.reload();
});
});