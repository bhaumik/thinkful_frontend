$(document).ready(function () {
	//var x = Math.floor((Math.random()*100)-1);
});

function displaymessage(){    
	var x = 50;  /*Math.floor((Math.random()*100)-1); */
	var guess = +$("#guess").val(); 
	
	if (guess > x) {
		$("#test").text("Your guess is bigger than the answer");
	} else if (guess < x) {
		$("#test").text("Your guess is fewer than the answer");
    } else if (guess == x){
		$("#test").text("Congratulations! You guessed correctly!");
    } else {
		$("#test").text("");
	}
}
