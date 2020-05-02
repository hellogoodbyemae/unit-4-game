$(document).ready(function() {

    var crys1;
    var crys2;
    var crys3;
    var crys4;
    var compScore;
    var userScore = 0;
    var wins = 0;
    var losses = 0;

    function reset() {
        crys1 = Math.floor(Math.random() * 11 + 1);
        crys2 = Math.floor(Math.random() * 11 + 1);
        crys3 = Math.floor(Math.random() * 11 + 1);
        crys4 = Math.floor(Math.random() * 11 + 1);
        compScore = Math.floor(Math.random() * 101 + 19);
        userScore = 0;
        $("#scorenumber").text(userScore);
        $("#number").text(compScore);
    }

    function start() {
        crys1 = Math.floor(Math.random() * 11 + 1);
        crys2 = Math.floor(Math.random() * 11 + 1);
        crys3 = Math.floor(Math.random() * 11 + 1);
        crys4 = Math.floor(Math.random() * 11 + 1);
        compScore = Math.floor(Math.random() * 101 + 19);
        $("#number").text(compScore);
        $("#wins").text(wins);
        $("#losses").text(losses);
        $("#scorenumber").text(userScore);
    }

    function game() {
        if (userScore === compScore) {
            alert("Winner!");
            reset();
            wins++;
            $("#wins").text(wins);
        }

        else if (userScore > compScore) {
            alert("Better Luck Next Time!");
            reset();
            losses++;
            $("#losses").text(losses);
        }
    }

    start();

    $("#red").on("click", function () {
        userScore = userScore + crys1;
        $("#scorenumber").text(userScore);
        console.log(userScore);
        game();
    })

    $("#blue").on("click", function () {
        userScore = userScore + crys2;
        $("#scorenumber").text(userScore);
        console.log(userScore);
        game();
    })

    $("#yellow").on("click", function () {
        userScore = userScore + crys3;
        $("#scorenumber").text(userScore);
        console.log(userScore);
        game();
    })

    $("#green").on("click", function () {
        userScore = userScore + crys4;
        $("#scorenumber").text(userScore);
        console.log(userScore);
        game();
    })

});