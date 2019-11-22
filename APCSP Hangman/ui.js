var numPlayers = readInt("How many players are there? ");

function playerCount(players){
    var nameList = [];
    var i = 1;
    while(i <= players){
        var currentName = readLine("What is your name, player "+ i+"? ");
        nameList[i-1] = currentName;
        i++;
    }
    return nameList;
}

playerCount(numPlayers);

var currentWord = readLine(nameList[0] + ", what is your word?");