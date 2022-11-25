// const delay  = 2000;
// const oneSec = 1000;

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

let round          = 1;
let p1CurrentScore = 0;
let p2CurrentScore = 0;
let p1TotalScore   = 0;
let p2TotalScore   = 0;


//newGamebtn.disabled = true;
//rollbtn.disabled    = false;


// setTimeout(function(){
//     $popup.fadeIn(oneSec) 
// },delay);

// closePopUp.addEventListener("click", function(){
//     $popup.fadeOut("slow");
//     rollbtn.disabled = false;

// });
    console.log(rollbtn);


let isLastRound = false;

rollbtn.addEventListener("click", function(){
    if (!isLastRound){
        console.log(`cliked`);
        let randomNum1 = getRndNum();
        let randomNum2 = getRndNum();
        let randomNum3 = getRndNum();
        let randomNum4 = getRndNum();

        player1Dice1.src = `../comp-2132-project/images/dice/d${randomNum1}.png`;
        player1Dice2.src = `../comp-2132-project/images/dice/d${randomNum2}.png`;
        player2Dice1.src = `../comp-2132-project/images/dice/d${randomNum3}.png`;
        player2Dice2.src = `../comp-2132-project/images/dice/d${randomNum4}.png`;

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

        ++round; 
    }

    if (round === 4) {
        isLastRound = true;
    }

    // if(round === 3){
    //     if(p1TotalScore>p2TotalScore){
    //         $("#round").text(`YOU win!!!`);
    //         $("#round").html(`<h1>You win!!</h1>`).css("border", "double 5px #73877B");
    //     }
    //     else if(p2TotalScore > p1TotalScore)
    //     {
    //         $("#round").text(`Yikes the computer won`);
    //     }
    //     else
    //     {
    //         $("#round").text(`its a draw`);
    //     }

    //     rollbtn.disabled = true;
    // }
    // newGamebtn.disabled = false;
  

    console.log(`p1=${p1CurrentScore} p2=${p2CurrentScore}`);
    

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
    diceBattle.setAttribute(`style`, `display: none;`)
    monsters.forEach((mons,i)=>{
        if (i != monsterIndex) {
            newMonsArr.push(mons);
        }
    })
    monsters = newMonsArr
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
    round = 1;
    isLastRound = false;
    // $("#round").text(`Round: ${round}`).css("border", "none");
    // rollbtn.disabled = false;

}

function getRndNum(){
    return (Math.floor(Math.random()*10000)%6)+1;
}

