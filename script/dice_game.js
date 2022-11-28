// const delay  = 2000;
// const oneSec = 1000;

const diceCharBattle = document.getElementById(`diceAmogus`);
const diceCharWin = document.getElementById(`diceCharWin`);
const diceCharLost = document.getElementById(`diceCharLost`);
const diceMons = document.getElementById(`diceMons`);

const player1Dice1 = document.getElementById("p1Dice1");
const player1Dice2 = document.getElementById("p1Dice2")
const player2Dice1 = document.getElementById("p2Dice1")
const player2Dice2 = document.getElementById("p2Dice2")

const p1Score = document.getElementById("p1Score")
const p2Score = document.getElementById("p2Score")
const p1Total = document.getElementById("p1Total")
const p2Total = document.getElementById("p2Total")
const rollbtn    = document.getElementById("rollbtn");
const newGamebtn = document.getElementById("newGamebtn");
const exitGameBtn = document.getElementById("exitGamebtn");
const round      = document.getElementById("diceRound");

const diceWin = document.getElementById("diceYouWin");
const diceLost = document.getElementById("diceYouLost");
const diceCharaBttle  = document.getElementById("diceCharBattle");


let roundCnt       = 1;
let p1CurrentScore = 0;
let p2CurrentScore = 0;
let p1TotalScore   = 0;
let p2TotalScore   = 0;
let isLastRound = false;
let isLost = false;


exitGameBtn.disabled = true;
//rollbtn.disabled    = false;


// setTimeout(function(){
//     $popup.fadeIn(oneSec) 
// },delay);

// closePopUp.addEventListener("click", function(){
//     $popup.fadeOut("slow");
//     rollbtn.disabled = false;

// });
    console.log(rollbtn);




rollbtn.addEventListener("click", function(){


    if (roundCnt > 3) {
        isLastRound = true;
    }

    if (!isLastRound){
        console.log(`cliked`);

        
        round.innerHTML = `Round: ${roundCnt}`;

        let randomNum1 = getRndNum();
        let randomNum2 = getRndNum();
        let randomNum3 = getRndNum();
        let randomNum4 = getRndNum();

        player1Dice1.src = `./images/dice/d${randomNum1}.png`;
        player1Dice2.src = `./images/dice/d${randomNum2}.png`;
        player2Dice1.src = `./images/dice/d${randomNum3}.png`;
        player2Dice2.src = `./images/dice/d${randomNum4}.png`;

        if (randomNum1 == 1 || randomNum2 == 1) {
            p1CurrentScore = 0;
        } else if (randomNum1===randomNum2){
            p1CurrentScore = (randomNum1+randomNum2)*2;
        } else {
        p1CurrentScore = randomNum1 + randomNum2;
        }

        p1Score.innerHTML = p1CurrentScore;
        p1TotalScore      = p1TotalScore + p1CurrentScore;
        p1Total.innerHTML =  p1TotalScore;

        if (randomNum3 == 1|| randomNum4 == 1) {
            p2CurrentScore = 0;
        } else if(randomNum3 === randomNum4){
            p2CurrentScore = (randomNum3+randomNum3)*2;
        } else {
        p2CurrentScore = randomNum3 + randomNum4;
        }

        p2Score.innerHTML = p2CurrentScore;
        p2TotalScore      += p2CurrentScore;
        p2Total.innerHTML =  p2TotalScore;

        ++roundCnt; 
    }


   
})

newGamebtn.addEventListener("click", resetGame)
function updateScore(){
    // to do?
    // p1Score.innerHTML = p1CurrentScore;
    // p1TotalScore = p1TotalScore + p1CurrentScore;
    // p1Total.innerHTML =  p1TotalScore;


}

exitGameBtn.addEventListener(`click`, function(){
    const newMonsArr = [];
    resetGame();
    diceBattle.setAttribute(`style`, `display: none;`);

    if(!isLost)
    {
        monsters[monsterIndex].isAlive = false;
        console.log(`${monsters[monsterIndex].isAlive}`)
        doors.forEach((door)=>{
            door.unlock();
        })
        monsters.forEach((mons,i)=>{
            if (i != monsterIndex) {
                newMonsArr.push(mons);
            }
        })
        monsters = newMonsArr;

    }

    isLost = false;

    playerDetected = false; 
    cancelAnimationFrame(diceHandler)
    gameStartHandler = requestAnimationFrame(dungeonAnimate);
    keyboardPause = false;
    count = 0;
})

function resetGame(){

    p1Score.innerHTML = 0
    p1Total.innerHTML = 0
    p1TotalScore = 0

    p2Score.innerHTML = 0
    p2Total.innerHTML = 0
    p2TotalScore = 0

    player1Dice1.innerHTML = 0;
    player1Dice2.innerHTML = 0;
    player2Dice1.innerHTML = 0;
    player2Dice2.innerHTML = 0;
    roundCnt = 1;
    round.innerHTML = `Round: ${roundCnt}`;
    isLastRound = false;
    diceCharaBttle.setAttribute(`style`, `display: inline;`);
    diceWin.setAttribute(`style`, `display: none;`);
    diceLost.setAttribute(`style`, `display: none;`);
    exitGameBtn.disabled = true;
    // $("#round").text(`Round: ${round}`).css("border", "none");
    // rollbtn.disabled = false;

}

function getRndNum(){
    return (Math.floor(Math.random()*10000)%6)+1;
}

function diceAnimate() {
    diceCharBattle.src = `./images/knight_f_run_anim_f${imgCnt}.png`;
    diceCharWin.src = `./images/knight_f_run_anim_f${imgCnt}.png`;


    if(monsters[monsterIndex].type == `slime`) {
        diceMons.src =`./images/sprite_monster/swampy_idle_anim_f${imgCnt}.png`;
    } else if(monsters[monsterIndex].type == `iceZombie`) {
        diceMons.src =`./images/sprite_monster/ice_zombie_idle_anim_f${imgCnt}.png`;
    } else if(monsters[monsterIndex].type == `demon`) { 
        diceMons.src =`./images/sprite_monster/chort_idle_anim_f${imgCnt}.png`;
    } else if(monsters[monsterIndex].type == `lizard`) {
        diceMons.src =`./images/sprite_monster/lizard_f_idle_anim_f${imgCnt}.png`;
    } else if(monsters[monsterIndex].type == `orcWar`) {
        diceMons.src =`./images/sprite_monster/masked_orc_idle_anim_f${imgCnt}.png`;
    } else if(monsters[monsterIndex].type == `orc`) {
        diceMons.src =`./images/sprite_monster/ogre_idle_anim_f${imgCnt}.png`; 
    }

    if (count != 15)
    {
        ++count;
        
    } else {
        count = 0;
    }
    imgCnt = Math.floor(count/4);

    if(isLastRound)
    {
        
        diceCharaBttle.setAttribute(`style`, `display: none;`);
        if(p1TotalScore>p2TotalScore){
            diceWin.setAttribute(`style`, `display: inline;`);
        }
        else if(p2TotalScore > p1TotalScore)
        {
            diceLost.setAttribute(`style`, `display: inline;`);
            
            diceCharLost.setAttribute(`style`, `transform: rotate(90deg);`)
            playChar.position.x = 384;
            playChar.position.y = 764;
            isLost = true;
        }

        exitGameBtn.disabled = false;
    }

    diceHandler = requestAnimationFrame(diceAnimate);
}
