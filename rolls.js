
function rollDie() {
    return Math.floor((Math.random() * 6) + 1);
}
function rollDice() {
     let roll1 = rollDie()
     let roll2 = rollDie()
     let roll = {
          total: roll1 + roll2,
          isHard: roll1===roll2,
          die1: roll1,
          die2: roll2
     }
     //returns total and if its a hardway
     return roll;
}

function gameRoll(curPoint) {
     let roll = rollDice();
    //console.log(roll.total);
    
     switch (roll.total) {
        //craps
        case 2:
            fieldBetWin(true);
            comeBetLoss(true);
            if (curPoint===null){
                passLineLoss();
                dontPassLineWin();
            }
            else{
                dontComeBetWin(true);
            }
            break;
        //craps
        case 3:
            fieldBetWin(false);
            comeBetLoss(true);
            if (curPoint===null) {
                passLineLoss();
                dontPassLineWin();
            }
            else{
                dontComeBetWin(true);
            }
            break;
        case 4:
            fieldBetWin(false);
            placeBetWin(4);
            if (curPoint===null){
                point = 4;
            }
            else if(curPoint===4){
                passLineWin();
                dontPassLineLoss();
                point=null;
            }
            else{

            }
            if (curPoint!==null){
                comeBetWin(4);
                setComeBet(4);
                dontComeBetLoss(4);
                setDontComeBet(4);
            }
            break;
        case 5:
            fieldBetLoss();
            placeBetWin(5);
            if (curPoint===null) {
                point = 5;
            }
            else if (curPoint===5) {
                passLineWin();
                dontPassLineLoss();
                point=null;
            }
            else{

            }
            if (curPoint!==null){
                comeBetWin(5);
                setComeBet(5);
                dontComeBetLoss(5);
                setDontComeBet(5);
            }
            break;
        case 6:
            fieldBetLoss();
            bigSixWin();
            placeBetWin(6);
            if (curPoint===null){
                point = 6;
            }
            else if(curPoint===6){
                passLineWin();
                dontPassLineLoss();
                point=null;
            }
            else{

            }
            if (curPoint!==null){
                comeBetWin(6);
                setComeBet(6);
                dontComeBetLoss(6);
                setDontComeBet(6);    
            }
            break;
        //passLine Wins
        case 7:
            fieldBetLoss();
            bigSixLoss();
            bigEightLoss();
            if (curPoint===null) {
                passLineWin();
                comeBetWin(7);
                dontPassLineLoss();
                dontComeBetLoss("comeOut");
            }
            else{
                placeBetLoss();
                dontPassLineWin();
                dontComeBetWin();
                passLineLoss();
                comeBetLoss();
                point=null;
            }
            break;
        case 8:
            fieldBetLoss();
            bigEightWin();
            placeBetWin(8);
            if (curPoint===null) {
                point = 8;
            }
            else if (curPoint===8) {
                passLineWin();
                dontPassLineLoss();
                point=null;
            }
            else{

            }
            if (curPoint!==null){
                comeBetWin(8);
                setComeBet(8);
                dontComeBetLoss(8);
                setDontComeBet(8);
            }
            break;
        case 9:
            fieldBetWin(false);
            placeBetWin(9);
            if (curPoint===null) {
                point = 9;
            }
            else if (curPoint===9){
                passLineWin();
                dontPassLineLoss();
                point=null;
            }
            else{

            }
            if (curPoint!==null){
                comeBetWin(9);
                setComeBet(9);
                dontComeBetLoss(9);
                setDontComeBet(9);
            }
            break;
        case 10:
            fieldBetWin(false);
            placeBetWin(10);
            if (curPoint===null) {
                point = 10;
            }
            else if(curPoint===10){
                passLineWin();
                dontPassLineLoss();
                point=null;
            }
            else{

            }
            if (curPoint!==null){
                comeBetWin(10);
                setComeBet(10);
                dontComeBetLoss(10);
                setDontComeBet(10);
            }
            break;
        //passLine Wins
        case 11:
            fieldBetWin(false);
            comeBetWin("comeOut");
            dontComeBetLoss("comeOut");
            if(curPoint===null){
                passLineWin();
                dontPassLineLoss();
            }
            else{
                
            }
            break;
        //craps
        case 12:
            fieldBetWin(true);
            if (curPoint===null) {
                passLineLoss();
                comeBetLoss(true);
                //dontPassLineWin();
            }
            else{

            }
            break;
        default:

     }
     return roll;
}

