
function fieldBetWin(isDouble) {
    stats.netField+=1;
     //search all players
     for (let player of players){
        //add fieldbet value to money
        if (isDouble){
            player.money += 2*player.bet.field;
        }
        else{
            player.money += player.bet.field;    
        }
     }
}

function fieldBetLoss() {
    stats.netField-=1;
     //search all players
     for (let player of players){
        //take fieldbet away from money
        player.wager -= player.bet.field;
        player.bet.field = 0;
     }
}

function passLineWin() {
    stats.netPass+=1;
    //search all players
    for (player of players){
        //add passline to money
        player.money += player.bet.passLine;
        //player.bet.passLine = 0;
        if (point==4||point==10){
            player.money = player.money + (2/1)*player.bet.passLineOdds;
        }
        if (point==5||point==9){
            player.money = player.money + (3/2)*player.bet.passLineOdds;
        }
        if (point==6||point==8){
            player.money = player.money + (6/5)*player.bet.passLineOdds;
        }
        //taking down odds
        player.money += player.bet.passLineOdds;
        player.wager -= player.bet.passLineOdds;
        player.bet.passLineOdds = 0;
    }
    
}

function passLineLoss() {
    stats.netPass-=1;
    //search all players
    //console.log("loss!");
    for (player of players){
        player.wager -= player.bet.passLine;
        player.wager -= player.bet.passLineOdds;
        player.bet.passLine = 0;
        player.bet.passLineOdds = 0;
    }
}

function dontPassLineWin() {
    stats.netDontPass+=1;
    //search all players
    for (player of players){
        //add passline to money
        player.money += player.bet.dontPassLine;
        //odds
        if (point==4||point==10){
            player.money = player.money + (1/2)*player.bet.passDontLineOdds;
        }
        if (point==5||point==9){
            player.money = player.money + (2/3)*player.bet.passDontLineOdds;
        }
        if (point==6||point==8){
            player.money = player.money + (5/6)*player.bet.passDontLineOdds;
        }
        //taking down odds
        player.money += player.bet.passDontLineOdds;
        player.wager -= player.bet.passDontLineOdds;
        player.bet.passDontLineOdds = 0;
    }
}

function dontPassLineLoss() {
    stats.netDontPass-=1;
    //search all players
    for (player of players){
        player.wager -= player.bet.dontPassLine;
        player.wager -= player.bet.passDontLineOdds;
        player.bet.dontPassLine = 0;
        player.bet.dontPassLineOdds = 0;
    }
}

function comeBetWin(rolled) {
    //search all players
    for (player of players){
        //add comebet to money
        switch (rolled) {
            case "comeout":
                player.money += 2*player.bet.come.box;
                player.wager -= player.bet.come.box;
                player.bet.come.box = 0;
                break;
            case 4:
                player.money += 2*layer.bet.come.four;
                player.money = player.money + (2/1)*player.bet.come.odds.four;
                player.wager -= player.bet.come.four;
                player.wager -= player.bet.come.odds.four;
                player.bet.come.four = 0;
                player.bet.come.odds.four = 0;
                break;
            case 5:
                player.money += 2*player.bet.come.five;
                player.money = player.money + (3/2)*player.bet.come.odds.five;
                player.wager -= player.bet.come.five;
                player.wager -= player.bet.come.odds.five;
                player.bet.come.five = 0;
                player.bet.come.odds.five = 0;
                break;
            case 6:
                player.money += 2*player.bet.come.six;
                player.money = player.money + (6/5)*player.bet.come.odds.six;
                player.wager -= player.bet.come.six;
                player.wager -= player.bet.come.odds.six;
                player.bet.come.six = 0;
                player.bet.come.odds.six = 0;
                break;
            case 8:
                player.money += 2*player.bet.come.eight;
                player.money = player.money + (6/5)*player.bet.come.odds.eight;
                player.wager -= player.bet.come.eight;
                player.wager -= player.bet.come.odds.eight;
                player.bet.come.eight = 0;
                player.bet.come.odds.eight = 0;
                break;
            case 9:
                player.money += 2*player.bet.come.nine;
                player.money = player.money + (3/2)*player.bet.come.odds.nine;
                player.wager -= player.bet.come.nine;
                player.wager -= player.bet.come.odds.nine;
                player.bet.come.nine = 0;
                player.bet.come.odds.nine = 0;
                break;
            case 10:
                player.money += 2*player.bet.come.ten;
                player.money = player.money + (2/1)*player.bet.come.odds.ten;
                player.wager -= player.bet.come.ten;
                player.wager -= player.bet.come.odds.ten;
                player.bet.come.ten = 0;
                player.bet.come.odds.ten = 0;
                break;
            default:
                break;
        }
    }
}

function comeBetLoss(comeout) {
    //search all players
    for (player of players){
        if (comeout) {
            player.wager -= player.bet.come.box;
            player.bet.come.box = 0;
        }
        else{
            player.wager -= player.bet.come.four;
            player.wager -= player.bet.come.five;
            player.wager -= player.bet.come.six;
            player.wager -= player.bet.come.eight;
            player.wager -= player.bet.come.nine;
            player.wager -= player.bet.come.ten;

            player.wager -= player.bet.come.odds.four;
            player.wager -= player.bet.come.odds.five;
            player.wager -= player.bet.come.odds.six;
            player.wager -= player.bet.come.odds.eight;
            player.wager -= player.bet.come.odds.nine;
            player.wager -= player.bet.come.odds.ten;

            player.bet.come.four = 0;
            player.bet.come.five = 0;
            player.bet.come.six = 0;
            player.bet.come.eight = 0;
            player.bet.come.nine = 0;
            player.bet.come.ten = 0;

            player.bet.come.odds.four = 0;
            player.bet.come.odds.five = 0;
            player.bet.come.odds.six = 0;
            player.bet.come.odds.eight = 0;
            player.bet.come.odds.nine = 0;
            player.bet.come.odds.ten = 0;
        }
    }
     //set all comebet value to 0
}

function setComeBet(rolled) {
    //search all player
    for (player of players){
        if (player.bet.come.box!=0) {
            switch (rolled) {
                case 4:
                    player.bet.come.four = player.bet.come.box;
                    break;
                case 5:
                    player.bet.come.five = player.bet.come.box;
                    break;
                case 6:
                    player.bet.come.six = player.bet.come.box;
                    break;
                case 8:
                    player.bet.come.eight = player.bet.come.box;
                    break;
                case 9:
                    player.bet.come.nine = player.bet.come.box;
                    break;
                case 10:
                    player.bet.come.ten = player.bet.come.box;
                    break;
                default:
                    break;
            }
        player.bet.come.box = 0;    
        }
    }
}
function placeBetWin(number){
    for (player of players) {
        switch (number) {
            case 4:
                player.money += (9/5)*player.bet.place.four;
                break;
            case 5:
                player.money += (7/5)*player.bet.place.five;
                break;
            case 6:
                player.money += (7/6)*player.bet.place.six;
                break;
            case 8:
                player.money += (7/6)*player.bet.place.eight;
                break;
            case 9:
                player.money += (7/5)*player.bet.place.nine;
                break;
            case 10:
                player.money += (9/5)*player.bet.place.ten;
                break;
            default:
                break;
        }
    }
}

function placeBetLoss(){
    for (player of players) {
        player.wager -= player.bet.place.four;
        player.wager -= player.bet.place.five;
        player.wager -= player.bet.place.six;
        player.wager -= player.bet.place.eight;
        player.wager -= player.bet.place.nine;
        player.wager -= player.bet.place.ten;

        player.bet.place.four=0;
        player.bet.place.five=0;
        player.bet.place.six=0;
        player.bet.place.eight=0;
        player.bet.place.nine=0;
        player.bet.place.ten=0;
    }
}


function bigSixWin(){
    for (player of players){
        player.money += player.bet.big.six;
    }
}

function bigSixLoss(){
    for (player of players){
        player.wager -= player.bet.big.six;
        player.bet.big.six = 0;
    }
}

function bigEightWin(){
    for (player of players){
        player.money += player.bet.big.eight;
    }
}

function bigEightLoss(){
    for (player of players){
        player.wager -= player.bet.big.eight;
        player.bet.big.eight = 0;
    }
}

function setDontComeBet(rolled) {
    //search all player
    for (player of players){
        if (player.bet.dontCome.box!=0) {
            switch (rolled) {
                case 4:
                    player.bet.dontCome.four = player.bet.dontCome.box;
                    break;
                case 5:
                    player.bet.dontCome.five = player.bet.dontCome.box;
                    break;
                case 6:
                    player.bet.dontCome.six = player.bet.dontCome.box;
                    break;
                case 8:
                    player.bet.dontCome.eight = player.bet.dontCome.box;
                    break;
                case 9:
                    player.bet.dontCome.nine = player.bet.dontCome.box;
                    break;
                case 10:
                    player.bet.dontCome.ten = player.bet.dontCome.box;
                    break;
                default:
                    break;
            }
        player.bet.dontCome.box = 0;    
        }
    }
}

function dontComeBetWin(comeout){
    for (player of players){
        if(comeout){
            player.money+= 2*player.bet.dontCome.box;
            player.wager-=player.bet.dontCome.box;
            player.bet.dontCome.box=0;
        }
        else{
            //flat bet and return bet
            player.money+= 2*player.bet.dontCome.four;
            player.money+= 2*player.bet.dontCome.five;
            player.money+= 2*player.bet.dontCome.six;
            player.money+= 2*player.bet.dontCome.eight;
            player.money+= 2*player.bet.dontCome.nine;
            player.money+= 2*player.bet.dontCome.ten;
            //odds
            player.money+= (1/2)*player.bet.dontCome.odds.four + player.bet.dontCome.odds.four;
            player.money+= (2/3)*player.bet.dontCome.odds.five + player.bet.dontCome.odds.five;
            player.money+= (5/6)*player.bet.dontCome.odds.six + player.bet.dontCome.odds.six;
            player.money+= (5/6)*player.bet.dontCome.odds.eight + player.bet.dontCome.odds.eight;
            player.money+= (2/3)*player.bet.dontCome.odds.nine + player.bet.dontCome.odds.nine;
            player.money+= (1/2)*player.bet.dontCome.odds.ten + player.bet.dontCome.odds.ten;
            //remove flat
            player.wager-=player.bet.dontCome.four;
            player.wager-=player.bet.dontCome.five;
            player.wager-=player.bet.dontCome.six;
            player.wager-=player.bet.dontCome.eight;
            player.wager-=player.bet.dontCome.nine;
            player.wager-=player.bet.dontCome.ten;
            //remove odds
            player.wager-=player.bet.dontCome.odds.four;
            player.wager-=player.bet.dontCome.odds.five;
            player.wager-=player.bet.dontCome.odds.six;
            player.wager-=player.bet.dontCome.odds.eight;
            player.wager-=player.bet.dontCome.odds.nine;
            player.wager-=player.bet.dontCome.odds.ten;
            //set bet to 0
            player.bet.dontCome.four=0;
            player.bet.dontCome.five=0;
            player.bet.dontCome.six=0;
            player.bet.dontCome.eight=0;
            player.bet.dontCome.nine=0;
            player.bet.dontCome.ten=0;
            //set odds to 0
            player.bet.dontCome.odds.four=0;
            player.bet.dontCome.odds.five=0;
            player.bet.dontCome.odds.six=0;
            player.bet.dontCome.odds.eight=0;
            player.bet.dontCome.odds.nine=0;
            player.bet.dontCome.odds.ten=0;
        }
    }
}

function dontComeBetLoss(number){
    for(player of players){
        switch (number) {
            case "comeOut":
                player.wager-=player.bet.dontCome.box;
                player.bet.dontCome.box=0;
                break;
            case 4:
                player.wager-=player.bet.dontCome.four;
                player.wager-=player.bet.dontCome.odds.four;
                player.bet.dontCome.four=0;
                player.bet.dontCome.odds.four=0;
                break;
            case 5:
                player.wager-=player.bet.dontCome.five;
                player.wager-=player.bet.dontCome.odds.five;
                player.bet.dontCome.five=0;
                player.bet.dontCome.odds.five=0;
                break;
            case 6:
                player.wager-=player.bet.dontCome.six;
                player.wager-=player.bet.dontCome.odds.six;
                player.bet.dontCome.six=0;
                player.bet.dontCome.odds.six=0;
                break;
            case 8:
                player.wager-=player.bet.dontCome.eight;
                player.wager-=player.bet.dontCome.odds.eight;
                player.bet.dontCome.eight=0;
                player.bet.dontCome.odds.eight=0;
                break;
            case 9:
                player.wager-=player.bet.dontCome.nine;
                player.wager-=player.bet.dontCome.odds.nine;
                player.bet.dontCome.nine=0;
                player.bet.dontCome.odds.nine=0;
                break;
            case 10:
                player.wager-=player.bet.dontCome.ten;
                player.wager-=player.bet.dontCome.odds.ten;
                player.bet.dontCome.ten=0;
                player.bet.dontCome.odds.ten=0;
                break;
            default:
                break;
        }
    }
}