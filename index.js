var knightHP = 100;
var dragonHP = 100;

function playRound(playerChoice) {
    if (knightHP <=0 || dragonHP <= 0) {
        return;
    }

    // var dragonArray = ["fire", "slash", "wing"];
    // var computerChoice = dragonArray[Math.floor(Math.random() * dragonArray.length)];
    var computerChoice = Math.random();
        if (computerChoice < 0.14) {
            computerChoice = "fire";
        } else if(computerChoice <= 0.75) {
            computerChoice = "slash";
        } else {
            computerChoice = "wing";
        }
    
    document.getElementById("cmove").src = computerChoice + ".png";
    document.getElementById("pmove").src = playerChoice + ".png";

    document.getElementById("cmoveText").textContent = "Dragon selects " + computerChoice;

    document.getElementById("pmoveText").textContent = "Knight selects " + playerChoice;

    combat(playerChoice, computerChoice)

} 

function playSound(melody) {
    
    var snd = new Audio(melody + ".mp3");
    snd.play();
}

function combat(pc, cc) {

    switch (pc) {
        case "attack":
            var knightDmg = Math.floor(Math.random() * 20) + 2;
            dragonHP = dragonHP - knightDmg;
            document.getElementById("kresult").textContent = "Knight hits Dragon for " + knightDmg + " points.";
            break;
        
        case "pray":
            var knightHeal = Math.floor(Math.random() * 10) + 5;
            knightHP = knightHP + knightHeal;
            document.getElementById("kresult").textContent = "Knight prays for healing and is healed " + knightHeal + " points.";
            if (knightHP > 100) {
                knightHP = 100;
            }
            break;

        default:
            document.getElementById("kresult").textContent = "Knight takes a defensive stance.";
            break;
    }

    if (cc === "fire" && pc === "defend") {
        playSound('fire')
        var dragonDmg = Math.floor(Math.random() * 20);
        knightHP = knightHP - dragonDmg;
        document.getElementById("dresult").textContent = "Dragon hits Knight for " + dragonDmg + " points.";
    }
    else if (cc === "slash" && pc === "defend") {
        playSound('slash')
        var dragonDmg = Math.floor(Math.random() * 10);
        knightHP = knightHP - dragonDmg;
        document.getElementById("dresult").textContent = "Dragon hits Knight for " + dragonDmg + " points.";
    }
    else if (cc === "fire" && pc !== "defend") {
        playSound('fire')
        var dragonDmg = Math.floor(Math.random() * 20) + 7;
        knightHP = knightHP - dragonDmg;
        document.getElementById("dresult").textContent = "Dragon hits Knight for " + dragonDmg + " points.";
    }
    else if (cc === "slash" && pc !== "defend") {
        playSound('slash')
        var dragonDmg = Math.floor(Math.random() * 10) + 5;
        knightHP = knightHP - dragonDmg;
        document.getElementById("dresult").textContent = "Dragon hits Knight for " + dragonDmg + " points.";
    } else {
        playSound('wing')
        dragonHeal = Math.floor(Math.random() * 10) + 5;
        dragonHP = dragonHP + dragonHeal;
        document.getElementById("dresult").textContent = "Dragon uses dark magic to heal itself for " + dragonHeal + " points.";
        if (dragonHP > 100) {
            dragonHP = 100;
        }
    }

    document.getElementById("knightHealth").textContent = knightHP;

    document.getElementById("dragonHealth").textContent = dragonHP;

    if (knightHP <= 0) {
        document.getElementById("kresult").textContent = "Knight has died!";
        document.getElementById("knight").src = "dead.png";
        document.getElementById("result").textContent = "GAME OVER!";
        playSound('kdead')
    }

    if (dragonHP <= 0) {
        document.getElementById("dresult").textContent = "Dragon has been slain!";
        document.getElementById("dragon").src = "dead.png";
        document.getElementById("result").textContent = "GAME OVER!";
        playSound('kwin')
    }

}