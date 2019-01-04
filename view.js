let user = new Player();
let unit = 5;

players.push(user);
/*
TODO:

add in all other bets
add in odds
turn place bets on and off
viusal clue if won or lost
take down bets
select bigger chips
swap bigger chips in

*/

window.onload = function() {
    //point puck

    var svg = document.getElementById('graphics');
    var element = document.createElementNS('http://www.w3.org/2000/svg','image');
    element.setAttributeNS('http://www.w3.org/1999/xlink','href', 'images/offPuck.png');
    element.setAttributeNS(null,'height','69');
    element.setAttributeNS(null,'width','52');
    element.setAttributeNS(null,'x','900');
    element.setAttributeNS(null,'y','30');
    element.setAttributeNS(null, 'visibility', 'visible');
    element.setAttributeNS(null,"id","offPuck");
    svg.appendChild(element);
    var element = document.createElementNS('http://www.w3.org/2000/svg','image');
    element.setAttributeNS('http://www.w3.org/1999/xlink','href', 'images/onPuck.png');
    element.setAttributeNS(null,'height','69');
    element.setAttributeNS(null,'width','52');
    element.setAttributeNS(null,'x','1000');
    element.setAttributeNS(null,'y','30');
    element.setAttributeNS(null, 'visibility', 'hidden');
    element.setAttributeNS(null,"id","onPuck");
    svg.appendChild(element);
    update();


    document.getElementById("fieldBar").addEventListener("click",function () {
        var success = user.placeFieldBet(unit);

        if (!svg.getElementById("fieldBet") && success) {
            
            var element = document.createElementNS('http://www.w3.org/2000/svg','image');
            element.setAttributeNS('http://www.w3.org/1999/xlink','href', 'images/unit'+unit+'.png');
            element.setAttributeNS(null,'height','69');
            element.setAttributeNS(null,'width','52');
            element.setAttributeNS(null,'x',event.clientX-25);
            element.setAttributeNS(null,'y',event.clientY-25);
            element.setAttributeNS(null, 'visibility', 'visible');
            element.setAttributeNS(null,"id","fieldBet");
            svg.appendChild(element);
    
            var text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
            text.setAttributeNS(null, 'x', event.clientX-5);
            text.setAttributeNS(null, 'y', event.clientY+15);
            text.setAttributeNS(null, "id","fieldBetText")
            svg.appendChild(text);
        }
        update();
    });


    document.getElementById("bigSix").addEventListener("click",function () {
        var success = user.placeBigSixBet(unit);

        if (!svg.getElementById("bigSixBet") && success) {
            console.log("test");
            var element = document.createElementNS('http://www.w3.org/2000/svg','image');
            element.setAttributeNS('http://www.w3.org/1999/xlink','href', 'images/unit'+unit+'.png');
            element.setAttributeNS(null,'height','69');
            element.setAttributeNS(null,'width','52');
            element.setAttributeNS(null,'x',event.clientX-25);
            element.setAttributeNS(null,'y',event.clientY-25);
            element.setAttributeNS(null, 'visibility', 'visible');
            element.setAttributeNS(null,"id","bigSixBet");
            svg.appendChild(element);
    
            var text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
            text.setAttributeNS(null, 'x', event.clientX-5);
            text.setAttributeNS(null, 'y', event.clientY+15);
            text.setAttributeNS(null, "id","bigSixBetText")
            svg.appendChild(text);
        }
        update();
    });


    document.getElementById("bigEight").addEventListener("click",function () {
        var success = user.placeBigEightBet(unit);

        if (!svg.getElementById("bigEightBet") && success) {
            var element = document.createElementNS('http://www.w3.org/2000/svg','image');
            element.setAttributeNS('http://www.w3.org/1999/xlink','href', 'images/unit'+unit+'.png');
            element.setAttributeNS(null,'height','69');
            element.setAttributeNS(null,'width','52');
            element.setAttributeNS(null,'x',event.clientX-25);
            element.setAttributeNS(null,'y',event.clientY-25);
            element.setAttributeNS(null, 'visibility', 'visible');
            element.setAttributeNS(null,"id","bigEightBet");
            svg.appendChild(element);
    
            var text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
            text.setAttributeNS(null, 'x', event.clientX-5);
            text.setAttributeNS(null, 'y', event.clientY+15);
            text.setAttributeNS(null, "id","bigEightBetText")
            svg.appendChild(text);
        }
        update();
    });

    document.getElementById("placeFour").addEventListener("click",function () {
        var success = user.placePlaceBet(unit,4);

        if (!svg.getElementById("placeFourBet") && success) {
            var element = document.createElementNS('http://www.w3.org/2000/svg','image');
            element.setAttributeNS('http://www.w3.org/1999/xlink','href', 'images/unit'+unit+'.png');
            element.setAttributeNS(null,'height','69');
            element.setAttributeNS(null,'width','52');
            element.setAttributeNS(null,'x',event.clientX-25);
            element.setAttributeNS(null,'y',event.clientY-25);
            element.setAttributeNS(null, 'visibility', 'visible');
            element.setAttributeNS(null,"id","placeFourBet");
            svg.appendChild(element);
    
            var text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
            text.setAttributeNS(null, 'x', event.clientX-5);
            text.setAttributeNS(null, 'y', event.clientY+15);
            text.setAttributeNS(null, "id","placeFourBetText")
            svg.appendChild(text);
        }
        update();
    });

    document.getElementById("placeFive").addEventListener("click",function () {
        var success = user.placePlaceBet(unit,5);

        if (!svg.getElementById("placeFiveBet") && success) {
            var element = document.createElementNS('http://www.w3.org/2000/svg','image');
            element.setAttributeNS('http://www.w3.org/1999/xlink','href', 'images/unit'+unit+'.png');
            element.setAttributeNS(null,'height','69');
            element.setAttributeNS(null,'width','52');
            element.setAttributeNS(null,'x',event.clientX-25);
            element.setAttributeNS(null,'y',event.clientY-25);
            element.setAttributeNS(null, 'visibility', 'visible');
            element.setAttributeNS(null,"id","placeFiveBet");
            svg.appendChild(element);
    
            var text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
            text.setAttributeNS(null, 'x', event.clientX-5);
            text.setAttributeNS(null, 'y', event.clientY+15);
            text.setAttributeNS(null, "id","placeFiveBetText")
            svg.appendChild(text);
        }
        update();
    });

    document.getElementById("placeSix").addEventListener("click",function () {
        var success = user.placePlaceBet(unit,6);

        if (!svg.getElementById("placeSixBet") && success) {
            var element = document.createElementNS('http://www.w3.org/2000/svg','image');
            element.setAttributeNS('http://www.w3.org/1999/xlink','href', 'images/unit'+unit+'.png');
            element.setAttributeNS(null,'height','69');
            element.setAttributeNS(null,'width','52');
            element.setAttributeNS(null,'x',event.clientX-25);
            element.setAttributeNS(null,'y',event.clientY-25);
            element.setAttributeNS(null, 'visibility', 'visible');
            element.setAttributeNS(null,"id","placeSixBet");
            svg.appendChild(element);
    
            var text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
            text.setAttributeNS(null, 'x', event.clientX-5);
            text.setAttributeNS(null, 'y', event.clientY+15);
            text.setAttributeNS(null, "id","placeSixBetText")
            svg.appendChild(text);
        }
        update();
    });

    document.getElementById("placeEight").addEventListener("click",function () {
        var success = user.placePlaceBet(unit,8);

        if (!svg.getElementById("placeEightBet") && success) {
            var element = document.createElementNS('http://www.w3.org/2000/svg','image');
            element.setAttributeNS('http://www.w3.org/1999/xlink','href', 'images/unit'+unit+'.png');
            element.setAttributeNS(null,'height','69');
            element.setAttributeNS(null,'width','52');
            element.setAttributeNS(null,'x',event.clientX-25);
            element.setAttributeNS(null,'y',event.clientY-25);
            element.setAttributeNS(null, 'visibility', 'visible');
            element.setAttributeNS(null,"id","placeEightBet");
            svg.appendChild(element);
    
            var text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
            text.setAttributeNS(null, 'x', event.clientX-5);
            text.setAttributeNS(null, 'y', event.clientY+15);
            text.setAttributeNS(null, "id","placeEightBetText")
            svg.appendChild(text);
        }
        update();
    });

    document.getElementById("placeNine").addEventListener("click",function () {
        var success = user.placePlaceBet(unit,9);

        if (!svg.getElementById("placeNineBet") && success) {
            var element = document.createElementNS('http://www.w3.org/2000/svg','image');
            element.setAttributeNS('http://www.w3.org/1999/xlink','href', 'images/unit'+unit+'.png');
            element.setAttributeNS(null,'height','69');
            element.setAttributeNS(null,'width','52');
            element.setAttributeNS(null,'x',event.clientX-25);
            element.setAttributeNS(null,'y',event.clientY-25);
            element.setAttributeNS(null, 'visibility', 'visible');
            element.setAttributeNS(null,"id","placeNineBet");
            svg.appendChild(element);
    
            var text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
            text.setAttributeNS(null, 'x', event.clientX-5);
            text.setAttributeNS(null, 'y', event.clientY+15);
            text.setAttributeNS(null, "id","placeNineBetText")
            svg.appendChild(text);
        }
        update();
    });

    document.getElementById("placeTen").addEventListener("click",function () {
        var success = user.placePlaceBet(unit,10);

        if (!svg.getElementById("placeTenBet") && success) {
            var element = document.createElementNS('http://www.w3.org/2000/svg','image');
            element.setAttributeNS('http://www.w3.org/1999/xlink','href', 'images/unit'+unit+'.png');
            element.setAttributeNS(null,'height','69');
            element.setAttributeNS(null,'width','52');
            element.setAttributeNS(null,'x',event.clientX-25);
            element.setAttributeNS(null,'y',event.clientY-25);
            element.setAttributeNS(null, 'visibility', 'visible');
            element.setAttributeNS(null,"id","placeTenBet");
            svg.appendChild(element);
    
            var text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
            text.setAttributeNS(null, 'x', event.clientX-5);
            text.setAttributeNS(null, 'y', event.clientY+15);
            text.setAttributeNS(null, "id","placeTenBetText")
            svg.appendChild(text);
        }
        update();
    });

    document.getElementById("comeBar").addEventListener("click",function () {
        var success = user.placeComeBet(unit);

        if (!svg.getElementById("comeBarBet") && success) {
            var element = document.createElementNS('http://www.w3.org/2000/svg','image');
            element.setAttributeNS('http://www.w3.org/1999/xlink','href', 'images/unit'+unit+'.png');
            element.setAttributeNS(null,'height','69');
            element.setAttributeNS(null,'width','52');
            element.setAttributeNS(null,'x',event.clientX-25);
            element.setAttributeNS(null,'y',event.clientY-25);
            element.setAttributeNS(null, 'visibility', 'visible');
            element.setAttributeNS(null,"id","comeBarBet");
            svg.appendChild(element);
    
            var text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
            text.setAttributeNS(null, 'x', event.clientX-5);
            text.setAttributeNS(null, 'y', event.clientY+15);
            text.setAttributeNS(null, "id","comeBarBetText")
            svg.appendChild(text);
        }
        update();
    });



    

    document.getElementById("rollButton").addEventListener("click",function () {
        roll = gameRoll(point);
        var element = document.createElementNS('http://www.w3.org/2000/svg','image');
        element.setAttributeNS('http://www.w3.org/1999/xlink','href', 'images/dice'+roll.die1+'.png');
        element.setAttributeNS(null,'height','75');
        element.setAttributeNS(null,'width','75');
        element.setAttributeNS(null,'x','1100');
        element.setAttributeNS(null,'y','30');
        element.setAttributeNS(null, 'visibility', 'visible');
        element.setAttributeNS(null,"id","die1");
        svg.appendChild(element);
        var element = document.createElementNS('http://www.w3.org/2000/svg','image');
        element.setAttributeNS('http://www.w3.org/1999/xlink','href', 'images/dice'+roll.die2+'.png');
        element.setAttributeNS(null,'height','75');
        element.setAttributeNS(null,'width','75');
        element.setAttributeNS(null,'x','1200');
        element.setAttributeNS(null,'y','30');
        element.setAttributeNS(null, 'visibility', 'visible');
        element.setAttributeNS(null,"id","die2");
        svg.appendChild(element);
        update();
    });

    document.getElementById("passLine").addEventListener("click", function () {
        var success = user.placePassLineBet(unit);

        if(!svg.getElementById("passLineBet") && success){
            var element = document.createElementNS('http://www.w3.org/2000/svg','image');
            element.setAttributeNS('http://www.w3.org/1999/xlink','href', 'images/unit'+unit+'.png');
            element.setAttributeNS(null,'height','69');
            element.setAttributeNS(null,'width','52');
            element.setAttributeNS(null,'x',event.clientX-25);
            element.setAttributeNS(null,'y',event.clientY-25);
            element.setAttributeNS(null, 'visibility', 'visible');
            element.setAttributeNS(null,"id","passLineBet");
            svg.appendChild(element);

            var text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
            text.setAttributeNS(null, 'x', event.clientX-5);
            text.setAttributeNS(null, 'y', event.clientY+15);
            text.setAttributeNS(null, "id","passLineBetText")
            svg.appendChild(text);
        }
        update();
    });

    document.getElementById("dontPassBar").addEventListener("click", function () {
        var success = user.placeDontPassLineBet(unit);

        if(!svg.getElementById("dontPassBarBet") && success){
            var element = document.createElementNS('http://www.w3.org/2000/svg','image');
            element.setAttributeNS('http://www.w3.org/1999/xlink','href', 'images/unit'+unit+'.png');
            element.setAttributeNS(null,'height','69');
            element.setAttributeNS(null,'width','52');
            element.setAttributeNS(null,'x',event.clientX-25);
            element.setAttributeNS(null,'y',event.clientY-25);
            element.setAttributeNS(null, 'visibility', 'visible');
            element.setAttributeNS(null,"id","dontPassBarBet");
            svg.appendChild(element);

            var text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
            text.setAttributeNS(null, 'x', event.clientX-5);
            text.setAttributeNS(null, 'y', event.clientY+15);
            text.setAttributeNS(null, "id","dontPassBarBetText")
            svg.appendChild(text);
        }
        update();
    });

    document.getElementById("dontPassBar2").addEventListener("click", function () {
        var success = user.placeDontPassLineBet(unit);

        if(!svg.getElementById("dontPassBarBet") && success){
            var element = document.createElementNS('http://www.w3.org/2000/svg','image');
            element.setAttributeNS('http://www.w3.org/1999/xlink','href', 'images/unit'+unit+'.png');
            element.setAttributeNS(null,'height','69');
            element.setAttributeNS(null,'width','52');
            element.setAttributeNS(null,'x',event.clientX-25);
            element.setAttributeNS(null,'y',event.clientY-25);
            element.setAttributeNS(null, 'visibility', 'visible');
            element.setAttributeNS(null,"id","dontPassBarBet");
            svg.appendChild(element);

            var text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
            text.setAttributeNS(null, 'x', event.clientX-5);
            text.setAttributeNS(null, 'y', event.clientY+15);
            text.setAttributeNS(null, "id","dontPassBarBetText")
            svg.appendChild(text);
        }
        update();
    });


    document.getElementById("passLine").addEventListener("mouseover", function (){
        if(point==null){
            var css = '#passLine:hover{ fill:rgba(0, 255, 0, .75); }';
            var style = document.createElement('style');
            if (style.styleSheet) {
                style.styleSheet.cssText = css;
            } else {
                style.appendChild(document.createTextNode(css));
            }
            document.getElementById("passLine").appendChild(style);
        }
        else{
            var css = '#passLine:hover{ fill:rgba(255, 0, 0, .75); }';
            var style = document.createElement('style');
            if (style.styleSheet) {
                style.styleSheet.cssText = css;
            } else {
                style.appendChild(document.createTextNode(css));
            }
            document.getElementById("passLine").appendChild(style);
        }
    });

    document.getElementById("dontPassBar").addEventListener("mouseover", function (){
        if(point==null){
            var css = '#dontPassBar:hover{ fill:rgba(0, 255, 0, .75); }';
            var style = document.createElement('style');
            if (style.styleSheet) {
                style.styleSheet.cssText = css;
            } else {
                style.appendChild(document.createTextNode(css));
            }
            document.getElementById("dontPassBar").appendChild(style);
        }
        else{
            var css = '#dontPassBar:hover{ fill:rgba(255, 0, 0, .75); }';
            var style = document.createElement('style');
            if (style.styleSheet) {
                style.styleSheet.cssText = css;
            } else {
                style.appendChild(document.createTextNode(css));
            }
            document.getElementById("dontPassBar").appendChild(style);
        }
    });

    document.getElementById("dontPassBar2").addEventListener("mouseover", function (){
        if(point==null){
            var css = '#dontPassBar2:hover{ fill:rgba(0, 255, 0, .75); }';
            var style = document.createElement('style');
            if (style.styleSheet) {
                style.styleSheet.cssText = css;
            } else {
                style.appendChild(document.createTextNode(css));
            }
            document.getElementById("dontPassBar2").appendChild(style);
        }
        else{
            var css = '#dontPassBar2:hover{ fill:rgba(255, 0, 0, .75); }';
            var style = document.createElement('style');
            if (style.styleSheet) {
                style.styleSheet.cssText = css;
            } else {
                style.appendChild(document.createTextNode(css));
            }
            document.getElementById("dontPassBar2").appendChild(style);
        }
    });

    document.getElementById("comeBar").addEventListener("mouseover", function (){
        if(point==null){
            var css = '#comeBar:hover{ fill:rgba(255, 0, 0, .75); }';
            var style = document.createElement('style');
            if (style.styleSheet) {
                style.styleSheet.cssText = css;
            } else {
                style.appendChild(document.createTextNode(css));
            }
            document.getElementById("comeBar").appendChild(style);
        }
        else{
            var css = '#comeBar:hover{ fill:rgba(0, 255, 0, .75); }';
            var style = document.createElement('style');
            if (style.styleSheet) {
                style.styleSheet.cssText = css;
            } else {
                style.appendChild(document.createTextNode(css));
            }
            document.getElementById("comeBar").appendChild(style);
        }
    });


};

function update(){
    var svg = document.getElementById('graphics');
    document.getElementById("wager").innerHTML = user.wager;
    document.getElementById("money").innerHTML = user.money;
    //console.log(point);
    
    for (player of players) {
        if (svg.getElementById("fieldBet")){
            if(player.bet.field==0){
                svg.removeChild(svg.getElementById("fieldBet"));
                svg.removeChild(svg.getElementById("fieldBetText"));
            }
            else{
                svg.getElementById("fieldBetText").textContent = player.bet.field;
            }
        }

        if (svg.getElementById("passLineBet")){
            if(player.bet.passLine==0){
                svg.removeChild(svg.getElementById("passLineBet"));
                svg.removeChild(svg.getElementById("passLineBetText"));
            }
            else{
                svg.getElementById("passLineBetText").textContent = player.bet.passLine;
            }
        }

        if (svg.getElementById("dontPassBarBet")){
            if(player.bet.dontPassLine==0){
                svg.removeChild(svg.getElementById("dontPassBarBet"));
                svg.removeChild(svg.getElementById("dontPassBarBetText"));
            }
            else{
                svg.getElementById("dontPassBarBetText").textContent = player.bet.dontPassLine;
            }
        }

        if (svg.getElementById("bigSixBet")){
            if(player.bet.big.six==0){
                svg.removeChild(svg.getElementById("bigSixBet"));
                svg.removeChild(svg.getElementById("bigSixBetText"));
            }
            else{
                svg.getElementById("bigSixBetText").textContent = player.bet.big.six;
            }
        }

        if (svg.getElementById("bigEightBet")){
            if(player.bet.big.eight==0){
                svg.removeChild(svg.getElementById("bigEightBet"));
                svg.removeChild(svg.getElementById("bigEightBetText"));
            }
            else{
                svg.getElementById("bigEightBetText").textContent = player.bet.big.eight;
            }
        }

        if (svg.getElementById("placeFourBet")){
            if(player.bet.place.four==0){
                svg.removeChild(svg.getElementById("placeFourBet"));
                svg.removeChild(svg.getElementById("placeFourBetText"));
            }
            else{
                svg.getElementById("placeFourBetText").textContent = player.bet.place.four;
            }
        }

        if (svg.getElementById("placeFiveBet")){
            if(player.bet.place.five==0){
                svg.removeChild(svg.getElementById("placeFiveBet"));
                svg.removeChild(svg.getElementById("placeFiveBetText"));
            }
            else{
                svg.getElementById("placeFiveBetText").textContent = player.bet.place.five;
            }
        }

        if (svg.getElementById("placeSixBet")){
            if(player.bet.place.six==0){
                svg.removeChild(svg.getElementById("placeSixBet"));
                svg.removeChild(svg.getElementById("placeSixBetText"));
            }
            else{
                svg.getElementById("placeSixBetText").textContent = player.bet.place.six;
            }
        }

        if (svg.getElementById("placeEightBet")){
            if(player.bet.place.eight==0){
                svg.removeChild(svg.getElementById("placeEightBet"));
                svg.removeChild(svg.getElementById("placeEightBetText"));
            }
            else{
                svg.getElementById("placeEightBetText").textContent = player.bet.place.eight;
            }
        }

         if (svg.getElementById("placeNineBet")){
            if(player.bet.place.nine==0){
                svg.removeChild(svg.getElementById("placeNineBet"));
                svg.removeChild(svg.getElementById("placeNineBetText"));
            }
            else{
                svg.getElementById("placeNineBetText").textContent = player.bet.place.nine;
            }
        }

        if (svg.getElementById("placeTenBet")){
            if(player.bet.place.ten==0){
                svg.removeChild(svg.getElementById("placeTenBet"));
                svg.removeChild(svg.getElementById("placeTenBetText"));
            }
            else{
                svg.getElementById("placeTenBetText").textContent = player.bet.place.ten;
            }
        }

        if (svg.getElementById("comeBarBet")){
            if(player.bet.come.box==0){
                svg.removeChild(svg.getElementById("comeBarBet"));
                svg.removeChild(svg.getElementById("comeBarBetText"));
            }
            else{
                svg.getElementById("comeBarBetText").textContent = player.bet.come.box;
            }
        }

        //for showing value of comebet in points
        //if no chip but there is a bet
        if (!svg.getElementById("comeFourBet") && player.bet.come.four!=0){
            //put chip there
            var element = document.createElementNS('http://www.w3.org/2000/svg','image');
            element.setAttributeNS('http://www.w3.org/1999/xlink','href', 'images/unit'+unit+'.png');
            element.setAttributeNS(null,'height','69');
            element.setAttributeNS(null,'width','52');
            element.setAttributeNS(null,'x',260);
            element.setAttributeNS(null,'y',135);
            element.setAttributeNS(null, 'visibility', 'visible');
            element.setAttributeNS(null,"id","comeFourBet");
            svg.appendChild(element);
    
            var text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
            text.setAttributeNS(null, 'x', 280);
            text.setAttributeNS(null, 'y', 175);
            text.setAttributeNS(null, "id","comeFourBetText")
            svg.appendChild(text);
        }
        if (svg.getElementById("comeFourBet")){
            if(player.bet.come.four==0){
                svg.removeChild(svg.getElementById("comeFourBet"));
                svg.removeChild(svg.getElementById("comeFourBetText"));
            }
            else{
                svg.getElementById("comeFourBetText").textContent = player.bet.come.four;
            }
        }

        if (!svg.getElementById("comeFiveBet") && player.bet.come.five!=0){
            var element = document.createElementNS('http://www.w3.org/2000/svg','image');
            element.setAttributeNS('http://www.w3.org/1999/xlink','href', 'images/unit'+unit+'.png');
            element.setAttributeNS(null,'height','69');
            element.setAttributeNS(null,'width','52');
            element.setAttributeNS(null,'x',365);
            element.setAttributeNS(null,'y',135);
            element.setAttributeNS(null, 'visibility', 'visible');
            element.setAttributeNS(null,"id","comeFiveBet");
            svg.appendChild(element);
    
            var text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
            text.setAttributeNS(null, 'x', 385);
            text.setAttributeNS(null, 'y', 175);
            text.setAttributeNS(null, "id","comeFiveBetText")
            svg.appendChild(text);
        }
        if (svg.getElementById("comeFiveBet")){
            if(player.bet.come.five==0){
                svg.removeChild(svg.getElementById("comeFiveBet"));
                svg.removeChild(svg.getElementById("comeFiveBetText"));
            }
            else{
                svg.getElementById("comeFiveBetText").textContent = player.bet.come.five;
            }
        }

        if (!svg.getElementById("comeSixBet") && player.bet.come.six!=0){
            var element = document.createElementNS('http://www.w3.org/2000/svg','image');
            element.setAttributeNS('http://www.w3.org/1999/xlink','href', 'images/unit'+unit+'.png');
            element.setAttributeNS(null,'height','69');
            element.setAttributeNS(null,'width','52');
            element.setAttributeNS(null,'x',465);
            element.setAttributeNS(null,'y',135);
            element.setAttributeNS(null, 'visibility', 'visible');
            element.setAttributeNS(null,"id","comeSixBet");
            svg.appendChild(element);
    
            var text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
            text.setAttributeNS(null, 'x', 485);
            text.setAttributeNS(null, 'y', 175);
            text.setAttributeNS(null, "id","comeSixBetText")
            svg.appendChild(text);
        }
        if (svg.getElementById("comeSixBet")){
            if(player.bet.come.six==0){
                svg.removeChild(svg.getElementById("comeSixBet"));
                svg.removeChild(svg.getElementById("comeSixBetText"));
            }
            else{
                svg.getElementById("comeSixBetText").textContent = player.bet.come.six;
            }
        }

        if (!svg.getElementById("comeEightBet") && player.bet.come.eight!=0){
            var element = document.createElementNS('http://www.w3.org/2000/svg','image');
            element.setAttributeNS('http://www.w3.org/1999/xlink','href', 'images/unit'+unit+'.png');
            element.setAttributeNS(null,'height','69');
            element.setAttributeNS(null,'width','52');
            element.setAttributeNS(null,'x',565);
            element.setAttributeNS(null,'y',135);
            element.setAttributeNS(null, 'visibility', 'visible');
            element.setAttributeNS(null,"id","comeEightBet");
            svg.appendChild(element);
    
            var text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
            text.setAttributeNS(null, 'x', 585);
            text.setAttributeNS(null, 'y', 175);
            text.setAttributeNS(null, "id","comeEightBetText")
            svg.appendChild(text);
        }
        if (svg.getElementById("comeEightBet")){
            if(player.bet.come.eight==0){
                svg.removeChild(svg.getElementById("comeEightBet"));
                svg.removeChild(svg.getElementById("comeEightBetText"));
            }
            else{
                svg.getElementById("comeEightBetText").textContent = player.bet.come.eight;
            }
        }

        if (!svg.getElementById("comeNineBet") && player.bet.come.nine!=0){
            var element = document.createElementNS('http://www.w3.org/2000/svg','image');
            element.setAttributeNS('http://www.w3.org/1999/xlink','href', 'images/unit'+unit+'.png');
            element.setAttributeNS(null,'height','69');
            element.setAttributeNS(null,'width','52');
            element.setAttributeNS(null,'x',665);
            element.setAttributeNS(null,'y',135);
            element.setAttributeNS(null, 'visibility', 'visible');
            element.setAttributeNS(null,"id","comeNineBet");
            svg.appendChild(element);
    
            var text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
            text.setAttributeNS(null, 'x', 685);
            text.setAttributeNS(null, 'y', 175);
            text.setAttributeNS(null, "id","comeNineBetText")
            svg.appendChild(text);
        }
        if (svg.getElementById("comeNineBet")){
            if(player.bet.come.nine==0){
                svg.removeChild(svg.getElementById("comeNineBet"));
                svg.removeChild(svg.getElementById("comeNineBetText"));
            }
            else{
                svg.getElementById("comeNineBetText").textContent = player.bet.come.nine;
            }
        }

        if (!svg.getElementById("comeTenBet") && player.bet.come.ten!=0){
            var element = document.createElementNS('http://www.w3.org/2000/svg','image');
            element.setAttributeNS('http://www.w3.org/1999/xlink','href', 'images/unit'+unit+'.png');
            element.setAttributeNS(null,'height','69');
            element.setAttributeNS(null,'width','52');
            element.setAttributeNS(null,'x',765);
            element.setAttributeNS(null,'y',135);
            element.setAttributeNS(null, 'visibility', 'visible');
            element.setAttributeNS(null,"id","comeTenBet");
            svg.appendChild(element);
    
            var text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
            text.setAttributeNS(null, 'x', 785);
            text.setAttributeNS(null, 'y', 175);
            text.setAttributeNS(null, "id","comeTenBetText")
            svg.appendChild(text);
        }
        if (svg.getElementById("comeTenBet")){
            if(player.bet.come.ten==0){
                svg.removeChild(svg.getElementById("comeTenBet"));
                svg.removeChild(svg.getElementById("comeTenBetText"));
            }
            else{
                svg.getElementById("comeTenBetText").textContent = player.bet.come.ten;
            }
        }
    }
    /*
    //for showing value of comebet in points
    //if no chip but there is a bet
    if (!svg.getElementById("comeBetFour") && player.bet.come.four!=0){
        //put chip there
    }
    else if(player.bet.come.four!=0){
        //update bet
    }
    */
    
    
    switch (point) {
        case null:
            svg.getElementById("offPuck").setAttributeNS(null, 'visibility', 'visible');
            svg.getElementById("onPuck").setAttributeNS(null, 'visibility', 'hidden');
            break;
        case 4:
            svg.getElementById("offPuck").setAttributeNS(null, 'visibility', 'hidden');
            svg.getElementById("onPuck").setAttributeNS(null, 'visibility', 'visible');
            svg.getElementById("onPuck").setAttributeNS(null,'x','293');
            break;
        case 5:
            svg.getElementById("offPuck").setAttributeNS(null, 'visibility', 'hidden');
            svg.getElementById("onPuck").setAttributeNS(null, 'visibility', 'visible');
            svg.getElementById("onPuck").setAttributeNS(null,'x','393');
            break;
        case 6:
            svg.getElementById("offPuck").setAttributeNS(null, 'visibility', 'hidden');
            svg.getElementById("onPuck").setAttributeNS(null, 'visibility', 'visible');
            svg.getElementById("onPuck").setAttributeNS(null,'x','493');
            break;
        case 8:
            svg.getElementById("offPuck").setAttributeNS(null, 'visibility', 'hidden');
            svg.getElementById("onPuck").setAttributeNS(null, 'visibility', 'visible');
            svg.getElementById("onPuck").setAttributeNS(null,'x','593');
            break;
        case 9:
            svg.getElementById("offPuck").setAttributeNS(null, 'visibility', 'hidden');
            svg.getElementById("onPuck").setAttributeNS(null, 'visibility', 'visible');
            svg.getElementById("onPuck").setAttributeNS(null,'x','693');
            break;
        case 10:
            svg.getElementById("offPuck").setAttributeNS(null, 'visibility', 'hidden');
            svg.getElementById("onPuck").setAttributeNS(null, 'visibility', 'visible');
            svg.getElementById("onPuck").setAttributeNS(null,'x','793');
            break;
    }
    
}



