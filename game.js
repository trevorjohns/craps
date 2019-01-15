
let players = [];
let point = null;
let stats = {
    netField:0,
    netPass:0,
    netDontPass:0

}


let michael = new Player();
let trevor = new Player();
let steve = new Player();
//players.push(michael);
//players.push(trevor);
//players.push(steve);
let steveStragety = 
{
    won: false,
    baseBet: 10,
    currentBet: 10
}

//console.log(michael);
//michael.placeFieldBet(5);
michael.placePassLineBet(10);
trevor.placeDontPassLineBet(10);
steve.placeFieldBet(10);
for (let index = 0; index < 500; index++) {
    //michael.placeFieldBet(5);
    //fieldBetWin();
    //fieldBetLoss();
    if (michael.bet.passLine==0){
        michael.placePassLineBet(10);
        //michael.placePassLineOdds(20);
    }
    if (trevor.bet.dontPassLine==0){
        trevor.placeDontPassLineBet(10);
        //trevor.placeDontPassLineOdds(20);
    }
    if (steve.bet.field==0){        
        steve.placeFieldBet(steveStragety.baseBet);
    }
    else
    {
        steve.placeFieldBet(steve.bet.field);
    }

    //gameRoll(point);
    //console.log(point);
    //console.log("m "+(players[0].money+players[0].wager));
    //console.log("t "+(players[1].money+players[1].wager));
    //console.log("s "+(players[2].money+players[2].wager));
    
    
}
console.log(stats);
//console.log(michael);




