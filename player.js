class Player {
    constructor(){
        this.money = 100;
        this.wager = 0;
        this.bet = new Bets();
    }
    placeFieldBet(amount) {
        if(this.money>=amount){
            this.money -= amount;
            this.wager += amount;
            this.bet.field += +amount;
            return true;
        }
        return false;
    }

    takeDownFiedBet() {
        this.money += this.bet.field;
        this.wager -= this.bet.field;
        this.bet.field = 0;
    }

    placePassLineBet(amount) {
        if(this.money>=amount && point==null){
            this.money -= amount;
            this.wager += amount;
            this.bet.passLine += amount;
            return true;
        }
        return false;
    }
    placeDontPassLineBet(amount) {
        if(this.money>=amount && point==null){
            this.money -= amount;
            this.wager += amount;
            this.bet.dontPassLine += amount;
            return true;
        }
        return false;
    }
    placePassLineOdds(amount){
        if(point!=null && this.money>=amount){
            this.money -= amount;
            this.wager += amount;
            this.bet.passLineOdds = amount;
        }
    }
    placeDontPassLineOdds(amount){
        if(point!=null && this.money>=amount){
            this.money -= amount;
            this.wager += amount;
            this.bet.passDontLineOdds = amount;
        }
    }
    placeComeBet(amount) {
        if(this.money>=amount && point!=null){
            this.money -= amount;
            this.wager += amount;
            this.bet.come.box += amount;
            return true;
        }
        return false;
    }
    placeComeBetOdds(amount, number){
        if(this.money>=amount){
            this.money -= amount;
            this.wager += amount;
            switch(number) {
                case 4:
                    this.bet.come.odds.four += amount;
                    break;
                case 5:
                    this.bet.come.odds.five += amount;
                    break;
                case 6:
                    this.bet.come.odds.six += amount;
                    break;
                case 8:
                    this.bet.come.odds.eight += amount;
                    break;
                case 9:
                    this.bet.come.odds.nine += amount;
                    break;
                case 10:
                    this.bet.come.odds.ten += amount;
                    break;
                default:
                    break;
            }
        }
    }
    placePropBet(amount, number){
        if(this.money>=amount){
            this.money -= amount;
            this.wager += amount;
            switch(number) {
                case 4:
                    this.bet.prop.hardFour += amount;
                    break;
                case 6:
                    this.bet.prop.hardSix += amount;
                    break;
                case 8:
                    this.bet.prop.hardEight += amount;
                    break;
                case 10:
                    this.bet.prop.hardTen += amount;
                    break;
                case 7:
                    this.bet.prop.seven += amount;
                    break;
                case 2:
                    this.bet.prop.two += amount;
                    break;
                case 12:
                    this.bet.prop.twelve += amount;
                    break;
                case 11:
                    this.bet.prop.yo += amount;
                    break;
                case "craps":
                    this.bet.prop.craps += amount;
                    break;
                default:
                    break;
            }
        }
    }
    placeHardBet(amount, number){
        if(this.money>=amount){
            this.money -= amount;
            this.wager += amount;
            switch(number) {
                case 4:
                    this.bet.come.prop.hardFour += amount;
                    break;
                case 6:
                    this.bet.come.prop.hardSix += amount;
                    break;
                case 8:
                    this.bet.come.prop.hardEight += amount;
                    break;
                case 10:
                    this.bet.come.prop.hardTen += amount;
                    break;
                default:
                    break;
            }
        }
    }
    placePlaceBet(amount, number){
        if(this.money>=amount){
            this.money -= amount;
            this.wager += amount;

            switch (number) {
                case 4:
                    this.bet.place.four += amount;
                    break;
                case 5:
                    this.bet.place.five += amount;
                    break;
                case 6:
                    this.bet.place.six += amount;
                    break;
                case 8:
                    this.bet.place.eight += amount;
                    break;
                case 9:
                    this.bet.place.nine += amount;
                    break;
                case 10:
                    this.bet.place.ten += amount;
                    break;
                default:
                    break;
            }
            return true;
        }
        return false;
    }
    takeDownPlaceBet(number){
        switch (number) {
            case 4:
                this.money += this.bet.place.four;
                this.wager -= this.bet.place.four;
                this.bet.place.four = 0;
                break;
            case 5:
                this.money += this.bet.place.five;
                this.wager -= this.bet.place.five;
                this.bet.place.five = 0;
                break;
            case 6:
                this.money += this.bet.place.six;
                this.wager -= this.bet.place.six;
                this.bet.place.six = 0;
                break;
            case 8:
                this.money += this.bet.place.eight;
                this.wager -= this.bet.place.eight;
                this.bet.place.eight = 0;
                break;
            case 9:
                this.money += this.bet.place.nine;
                this.wager -= this.bet.place.nine;
                this.bet.place.nine = 0;
                break;
            case 10:
                this.money += this.bet.place.ten;
                this.wager -= this.bet.place.ten;
                this.bet.place.ten = 0;
                break;
            default:
                break;
        }
    }
    placeBigSixBet(amount){
        if(this.money>=amount){
            this.money -= amount;
            this.wager += amount;
            this.bet.big.six +=amount;
            return true;
        }
        return false;
    }
    placeBigEightBet(amount){
        if(this.money>=amount){
            this.money -= amount;
            this.wager += amount;
            this.bet.big.eight += amount
            return true;
        }
        return false;
    }
    takeDownBigSixBet(){
        this.money += this.bet.big.six;
        this.wager -= this.bet.big.six;
        this.bet.big.six = 0;
    }
    takeDownBigEightBet(){
        this.money += this.bet.big.eight;
        this.wager -= this.bet.big.eight;
        this.bet.big.eight = 0;
    }
    placeDontComeBet(amount){
        if(this.money>=amount){
            this.money -= amount;
            this.wager += amount;
            this.bet.dontCome.box = amount;
        }
    }
}

class Bets {
    constructor(){
        this.passLine = 0;
        this.passLineOdds = 0;
        this.dontPassLine = 0;
        this.passDontLineOdds = 0;
        this.field = 0;
        this.prop = new Propostion();
        this.come = new ComeBet();
        this.dontCome = new DontComeBet();
        this.place = new PlaceBet();
        this.big = new BigBet();
    }
}

class Propostion {
    constructor(){
        this.seven=0;
        this.hardTen=0;
        this.hardEight=0;
        this.hardSix=0;
        this.hardFour=0;
        this.three=0;
        this.two=0;
        this.twelve=0;
        this.yo=0
        this.craps=0
    }
}

class ComeBet {
    constructor(){
        this.box=0
        this.four=0;
        this.five=0;
        this.six=0
        this.eight=0;
        this.nine=0;
        this.ten=0;
        this.odds = new ComeBetOdds();
    }
}

class ComeBetOdds{
    constructor(){
        this.four=0;
        this.five=0;
        this.six=0
        this.eight=0;
        this.nine=0;
        this.ten=0;
    }
}

class DontComeBet {
    constructor(){
        this.box=0;
        this.four=0;
        this.five=0;
        this.six=0
        this.eight=0;
        this.nine=0;
        this.ten=0;
        this.odds = new DontComeBetOdds();
    }
}

class DontComeBetOdds{
    constructor(){
        this.four=0;
        this.five=0;
        this.six=0
        this.eight=0;
        this.nine=0;
        this.ten=0;
    }
}

class PlaceBet {
    constructor(){
        this.four=0;
        this.five=0;
        this.six=0
        this.eight=0;
        this.nine=0;
        this.ten=0;
    }
}

class BigBet{
    constructor(){
        this.six=0;
        this.eight=0;
    }
}
