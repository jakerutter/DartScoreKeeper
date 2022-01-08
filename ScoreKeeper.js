//TODO
//add current player indicator
//add skip to next player button
//add 501  
//add cricket
//add around the world
var game  = { 
    players:0,
    playerBoxes:[],
    playerScores:[],
    playerOutsElems:[], 
    currentPlayer:1,
    currentThrows:0
};

var possibleOuts = {
    2 : ['D1'],
    3 : ['1 D1'],
    4 : ['D2'],
    5 : ['1, D2'],
    6 : ['D3'],
    7 : ['3 D2'],
    8 : ['D4'],
    9 : ['1 D4'],
    10 : ['D5'],
    11 : ['S3 D4'],
    12 : ['D6'],
    13 : ['5 D4'],
    14 : ['D7'],
    15 : ['7 D4'],
    16 : ['D8'],
    17 : ['1 D8'],
    18 : ['D9'],
    19 : ['3 D8'],
    20 : ['D10'],
    21 : ['5 D8'],
    22 : ['D11'],
    23 : ['7 D8'],
    24 : ['D12'],
    25 : ['9  D8'],
    26 : ['D13'],
    27 : ['11 D8'],
    28 : ['D14'],
    29 : ['13 D8'],
    30 : ['D15'],
    31 : ['15 D8'],
    32 : ['D16'],
    33 : ['17 D8'],
    34 : ['D17'],
    35 : ['3 D16'],
    36 : ['D18'],
    37 : ['5 D16'],
    38 : ['D19'],
    39 : ['7 D16'],
    40 : ['D20'],
    41 : ['9 D16','1 D20'],
    42 : ['10 D16','6 D18'],
    43 : ['11 D16','3 D20','19 D12'],
    44 : ['4 D20','12 D16'],
    45 : ['5 D20','13 D16','9 D18'],
    46 : ['6 D20','10 D18'],
    47 : ['15 D16','11 D18','7 D20'],
    48 : ['8 D20','16 D16'],
    49 : ['17 D16','9 D20'],
    50 : ['10 D20','18 D16','10 D20','BULL'],
    51 : ['11 D20','19 D16'],
    52 : ['12 D20','20 D16'],
    53 : ['13 D20','17 D18'],
    54 : ['14 D20','18 D18'],
    55 : ['15 D20','19 D18'],
    56 : ['16 D20','20 D18'],
    57 : ['17 D20','25 D16'],
    58 : ['18 D20','8 BULL'],
    59 : ['19 D20','25 D17'],
    60 : ['20 D20','10 BULL'],
    61 : ['25 D18','11 BULL','T11 D14'],
    62 : ['T10 D16','10 20 D16','12 BULL'],
    63 : ['T13 D12','13 BULL'],
    64 : ['T16 D8','16 16 D16','16 8 D20','14 BULL'],
    65 : ['25 D20','T19 D4','T15 D10'],
    66 : ['T10 D18','T16 D9'],
    67 : ['T17 D8','17 BULL'],
    68 : ['T20 D4','T16 D10'],
    69 : ['19 BULL','T11 D18','11 18 D20'],
    70 : ['T18 D8','20 BULL'],
    71 : ['T13 D16','25 6 D20','25 10 D18'],
    72 : ['T12 D18','T16 D12'],
    73 : ['T19 D8','T11 D20'],
    74 : ['T14 D16','T18 D10'],
    75 : ['T13 D18','25 BULL'],
    76 : ['T20 D8','T16 D14'],
    77 : ['T15 D16','T19 D10'],
    78 : ['T18 D12','T14 D18'],
    79 : ['T13 D20','T19 D11'],
    80 : ['T16 D16','T20 D10'],
    81 : ['T15 D18','T19 D12'],
    82 : ['T14 D20','BULL D16','25 17 D20'],
    83 : ['T17 D16','T11 BULL'],
    84 : ['T16 D18','16 T16 D10'],
    85 : ['T15 D20','T19 D14'],
    86 : ['T18 D16','BULL T18','25 11 BULL'],
    87 : ['T17 D18','T15 10 D16'],
    88 : ['T16 D20','T20 D14'],
    89 : ['T19 D16','T13 BULL'],
    90 : ['T18 D18','BULL D20'],
    91 : ['T17 D20','17 BULL D12'],
    92 : ['T20 D16','T16 11 D16'],
    93 : ['T19 D18','25 18 BULL'],
    94 : ['T18 D20','T16 6 D20'],
    95 : ['T19 D19','19 T20 D8','T15 BULL','15 T16 D16'],
    96 : ['T20 D18','20 T20 D8','T16 16 D16','T18 10 D16'],
    97 : ['T19 D20','19 T18 D12','T17 10 D18','17 T16 D16'],
    98 : ['T20 D19','20 T18 D12','T16 BULL','16 T16 D17'],
    99 : ['T19 10 D16','19 T16 D16','T20 7 D16','T17 8 D20','17 BULL D16'],
    100 : ['T20 D20','T16 12 D20','16 T16 D18','BULL BULL'],
    101 : ['T17 BULL','17 T16 D18','T13 12 BULL','13 T16 D20'],
    102 : ['T20 10 D16','20 BULL D16','T18 16 D16','18 T16 D18'],
    103 : ['T19 10 D16','19 T16 D18','T17 12 D20','17 T18 D16'],
    104 : ['T18 BULL','18 T18 D16','T16 16 D20'],
    105 : ['T20 13 D16','20 T15 D20','T19 8 D20','19 T18 D16'],
    106 : ['T20 10 D18','20 T18 D16','T18 12 D20','T16 18 D20','16 T18 D18'],
    107 : ['T19 BULL','19 T16 D20','T17 16 D20','17 T18 D18'],
    108 : ['T19 19 D16','18 T18 D18','T20 8 D20','20 T16 D20'],
    109 : ['T20 17 D16','20 T19 D16','T19 12 D20','19 T18 D18'],
    110 : ['T20 BULL','20 T18 D18','BULL 20 D20','25 T15 D20','15 T15 BULL'],
    111 : ['T20 19 D16','20 T17 D20','T19 14 BULL','17 T18 D20'],
    112 : ['T18 18 D20','T12 T20 D8','12 T20 D20'],
    113 : ['T20 13 D20','20 T19 D18','T19 16 D20','19 T18 D20','T17 12 BULL','17 T20 D18'],
    114 : ['T20 14 D20','T18 20 D20'],
    115 : ['19 T20 D18','T19 18 D20'],
    116 : ['T20 16 D20','T16 18 BULL'],
    117 : ['T20 18 D20','T17 16 BULL'],
    118 : ['T20 T19 D20','T18 T16 D8'],
    119 : ['19 T20 D20','T19 12 BULL'],
    120 : ['T20 20 D20','T19 13 BULL','T17 19 BULL'],
    121 : ['25 T20 D18','T19 T16 D8'],
    122 : ['T18 18 BULL','T20 12 BULL'],
    123 : ['T20 T13 D12','19 T18 BULL'],
    124 : ['T20 T16 D8','20 T18 BULL'],
    125 : ['T20 T19 D4','25 BULL BULL','25 T20 D20','T20 T11 D16'],
    126 : ['T19 19 BULL','T20 16 BULL','T18 T12 D18'],
    127 : ['T20 T17 D8','T20 T14 D16'],
    128 : ['T20 T20 D4','T20 18 BULL','T18 T18 D10'],
    129 : ['T19 T16 D12','T19 T12 D18','19 T20 BULL'],
    130 : ['T20 T18 D8','20 T20 BULL'],
    131 : ['T20 T13 D16','BULL T15 D18'],
    132 : ['T20 T16 D12','T17 T15 D18'],
    133 : ['T20 T19 D8','T17 BULL D16'],
    134 : ['T20 T14 D16','T18 T16 D16'],
    135 : ['T20 T13 D8','BULL T15 D20','25 T20 BULL'],
    136 : ['T20 T20 D8','T18 BULL D16'],
    137 : ['T20 T15 D16','T19 T16 D16'],
    138 : ['T20 T14 D18','T18 T16 D18'],
    139 : ['T20 T13 D20','T19 BULL D16','T17 T16 D20'],
    140 : ['T20 T20 D10','T18 T18 D16'],
    141 : ['T20 T15 D18','T19 T16 D18'],
    142 : ['T20 T14 D20','T18 T16 D20'],
    143 : ['T20 T17 D16','T19 T18 D16'],
    144 : ['T20 T20 D12','T18 T18 D18'],
    145 : ['T20 T15 D20','T19 T16 D20'],
    146 : ['T20 T18 D16','T19 T19 D16'],
    147 : ['T20 T17 D18','T19 T18 D18'],
    148 : ['T20 T20 D14','T20 T16 D20'],
    149 : ['T20 T19 D16','T17 T20 D19'],
    150 : ['T20 T18 D18','BULL BULL BULL'],
    151 : ['T20 T17 D20','T19 T20 D18'],
    152 : ['T20 T20 D16','T16 T18 BULL'],
    153 : ['T20 T19 D18'],
    154 : ['T20 T18 D20'],
    155 : ['T20 T19 D19'],
    156 : ['T20 T20 D18'],
    157 : ['T20 T19 D20'],
    158 : ['T20 T20 D19'],
    160 : ['T20 T20 D20'],
    161 : ['T20 T17 BULL'],
    164 : ['T20 T18 BULL'],
    167 : ['T20 T19 BULL'],
    170 : ['T20 T20 BULL']
};

function playerSelection(players)
{
    if(players == 1)
    {
        //reveal one player box
        var playerBox = document.getElementById("playerBox1");
        playerBox.classList.remove("hidden");

        //add 1 player to  game
        game.players = 1;
        game.playerBoxes.push("playerBox1of1");
        game.playerScores.push("player1of1");
        game.playerOutsElems.push("player1of1Outs");

    }
    else if(players == 2)
    {
        //reveal two player boxes
        var playerBox = document.getElementById("playerBox2");
        playerBox.classList.remove("hidden");

        //add 2 players to  game
        game.players = 2;
        game.playerBoxes.push("playerBox1of2", "playerBox2of2");
        game.playerScores.push("player1of2","player2of2");
        game.playerOutsElems.push("player1of2Outs","player2of2Outs");
    }
    else if(players == 3)
    {
        //reveal three player boxes
        var playerBox = document.getElementById("playerBox3");
        playerBox.classList.remove("hidden");

        //add 3 players to  game
        game.players = 3;
        game.playerBoxes.push("playerBox1of3", "playerBox2of3", "playerBox3of3");
        game.playerScores.push("player1of3","player2of3","player3of3");
        game.playerOutsElems.push("player1of3Outs","player2of3Outs","player3of3Outs");
    }
    else
    {
        //reveal four player boxes
        var playerBox = document.getElementById("playerBox4");
        playerBox.classList.remove("hidden");

        //add 4 players to  game
        game.players = 4;
        game.playerBoxes.push("playerBox1of4", "playerBox2of4", "playerBox3of4", "playerBox4of4");
        game.playerScores.push("player1of4","player2of4","player3of4","player4of4");
        game.playerOutsElems.push("player1of4Outs","player2of4Outs","player3of4Outs","player4of4Outs");
    }
    //set current player
    displayCurrentPlayer();

    var intro = document.getElementById("introText");
    intro.classList.add("hidden");

    var playerBoxes = document.getElementById("playerBoxes");
    playerBoxes.classList.remove("hidden");

    var scoreGrid = document.getElementById("scoreGrid");
    scoreGrid.classList.remove("hidden");

    var scoreBtns = document.querySelectorAll(".scoreBtn");

    let scoreBtnArray = Array.prototype.slice.call(scoreBtns);

    scoreBtnArray.forEach(function(element)
    {
        element.addEventListener("click", function()
        {
            registerScore(this.innerText);
        })
    });
}

function registerScore(throwScore)
{
    //increment throws by current player
    game.currentThrows += 1;
    //get current player score element and score value
    let currentPlayer = game.currentPlayer -1;
    let currentScoreElem = game.playerScores[currentPlayer];
    let currentScore = Number(document.getElementById(currentScoreElem).innerHTML);
    //get the actual points for this throw
    let cleanThrowScore = getScore(throwScore);
    //update score (check for BUST)
    if(currentScore - cleanThrowScore >= 2)
    {
        currentScore -= cleanThrowScore;
    }
    else
    {
        //BUSTED
        //do not update score
        alert("BUST");
    }

    //update score element
    document.getElementById(currentScoreElem).innerHTML = currentScore;

    //calculate and show outs
    if(currentScore <= 170)
    {
        calculateAndDisplayOuts(currentScore);
    }

    //if throws == 3 switch to next player
    if(game.currentThrows ==  3)
    {
        //set next player as current
        let players = game.players;
        if(game.currentPlayer == players)
        {
            game.currentPlayer = 1;
        }
        else
        {
            game.currentPlayer += 1;
        }
        //reset current throws to 0
        game.currentThrows = 0;
        displayCurrentPlayer();
    }
}

function getScore(throwScore)
{
    //set score to -1 for error checking
    var score = -1;
    //if the D or T character appears, get the number value of the throw
    var scoreArray;

    if(throwScore.includes("D"))
    {
        scoreArray = throwScore.split("D");
        score = scoreArray[1];
        score *= 2;
    }
    else if(throwScore.includes("T"))
    {
        scoreArray = throwScore.split("T");  
        score = scoreArray[1];
        score *= 3;
    }
    else
    {
        score = throwScore;
    }
   
    //error checking
    if(score == -1)
    {
        alert("score is -1  error");
    }
    //return the score
    return score;
}

function calculateAndDisplayOuts(currentScore)
{
    //get current player OUTS elem
    let currentPlayer = game.currentPlayer -1;
    let currentOutsElem = game.playerOutsElems[currentPlayer];
    var elem = document.getElementById(currentOutsElem);
    elem.innerHTML = "";
    
    //display OUTS
    let outs = possibleOuts[currentScore];

    if(outs)
    {
        elem.innerHTML = "OUTS</br>";

        outs.forEach(function(index){
            elem.innerHTML += index + "</br>";
        });
    }
}

function displayCurrentPlayer()
{
    //clear all current player displays
    let playerBoxes = game.playerBoxes;
    playerBoxes.forEach(function(index){
        let current = document.getElementById(index);
        current.classList.remove("currentPlayer");
    });

    let currentPlayer = game.currentPlayer -1;
    let currentPlayerElem = game.playerBoxes[currentPlayer];
    var currentElem = document.getElementById(currentPlayerElem);
    currentElem.classList.add("currentPlayer");
}
