$(document).ready(function() {

    var compScore = 0;
    var userScore = 0;
    var wins = 0;
    var losses = 0;
    var crystals = ["crys1", "crys2", "crys3", "crys4"];

    function reset() {
        for(var i = 0; i < crystals.length; i++) {
            crystals[i].setAttribute("score", Math.floor(Math.random() * 11 + 1))
        }   
        compScore = Math.floor(Math.random() * 101 + 19);
        userScore = 0;
        $("#scorenumber").text(userScore);
        $("#number").text(compScore);
    }

    function start() {
        crystals = document.getElementsByTagName("img")
        for(var i = 0; i < crystals.length; i++) {
            crystals[i].setAttribute("score", Math.floor(Math.random() * 11 + 1))
            crystals[i].addEventListener("click", (args) => {
                value = Math.round(args.target.getAttribute("score"))
                userScore = userScore + value;
                $("#number").text(userScore);
                console.log(userScore);
                game();
            })
        }
        compScore = Math.floor(Math.random() * 101 + 19);
        $("#number").text(compGuess);
        $("#wins").text(wins);
        $("#losses").text(losses);
        $("#scorenumber").text(userScore);
    
    }

    function game() {
        if (userScore === compScore) {
            alert("Winner!");
            reset();
            wins++;
            $("#wins").text("Wins: " + wins);
            $("#scorenumber").text(wins);
        }

        else if (userScore > compScore) {
            alert("Better Luck Next Time!");
            reset();
            losses++;
            $("#losses").text("Losses: " + losses);
        }

    }

    start();

});