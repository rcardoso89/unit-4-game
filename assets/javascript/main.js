var random_result;
var lost = 0;
var win = 0;
var previous = 0

//this is function to start the game
var startGame = function () {
$(".crystals").empty();
    
random_result = Math.floor(Math.random() * 69 ) + 30; 

$("#result").html("Random Result: " + random_result);

for (var i= 0; i<4; i++){
    var random = Math.floor(Math.random() * 11) + 1;
    
        var crystal = $("<div>")
            crystal.attr({
                "class": "crystal",
                "data-random": random
            });

        $(".crystals").append(crystal);

    }
    $("#previous").html("Total Score: " + previous);
}

startGame(); //Calling start the game function


$(document).on("click", ".crystal", function () {
    var num = parseInt($(this).attr("data-random"));

    previous += num;

    $("#previous").html("Total Score: " + previous);

    console.log(previous);

    if(previous > random_result){
        lost++;
        $("#lost").html("You Lost: " + lost);
        previous = 0;
        startGame();

    }
    else if(previous === random_result){
        win++;
        $("#win").html("You won: " + win);
        previous = 0;
        startGame();
    }


});

