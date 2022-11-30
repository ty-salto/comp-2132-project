const gameInstruction = document.getElementById("gameInstruction");
const gameInstrBtn = document.getElementById("closeInstBtn");
const playAgainBtn = document.getElementById(`playAgain`);
const endCredits = document.getElementById(`gameEndCredits`);

let count = 0;
let imgCnt = 0;
let isDiceActive = false;
let gameStartHandler;
let diceHandler;

//Start game
function dungeonAnimate(){
    sprites.clearRect(0,0,800,800);
    
    knight.src = `./images/knight_f_run_anim_f${imgCnt}.png`;
    jeffDOrc.src = `./images/sprite_monster/ogre_idle_anim_f${imgCnt}.png`;
    slime.src = `./images/sprite_monster/swampy_idle_anim_f${imgCnt}.png`;
    iceZombie.src = `./images/sprite_monster/ice_zombie_idle_anim_f${imgCnt}.png`;
    demon.src = `./images/sprite_monster/chort_idle_anim_f${imgCnt}.png`;
    lizard.src = `./images/sprite_monster/goblin_idle_anim_f${imgCnt}.png`;
    orcWar.src = `./images/sprite_monster/masked_orc_idle_anim_f${imgCnt}.png`;

    if (count != 15)
    {
        ++count;
        
    } else {
        count = 0;
    }
    imgCnt = Math.floor(count/4);

    //building door
    doors.forEach((element)=>{
        element.build();
    })
    
    if(monsters.length == 0) {
        endCredits.style.display = `inline`;
    }
    monsters.forEach((element, i)=>{
        monsterDetect(element, i);
    })

    spriteGenerator();

    gameStartHandler = requestAnimationFrame(dungeonAnimate);
    if(playerDetected) {
        cancelAnimationFrame(gameStartHandler);
        
        diceHandler = requestAnimationFrame(diceAnimate);
        keyboardPause = true;
        count = 0;
    }

}

// play again game exit button
playAgainBtn.addEventListener(`click`, ()=>{
    location.reload();
})

onload = ()=>{
    dungeonGenerator();
    console.log(`h = ${mons1.image.height}`);
}

// instruction game exit button
gameInstrBtn.addEventListener(`click`, ()=>{
    gameInstruction.style.display = `none`;
    gameStartHandler = requestAnimationFrame(dungeonAnimate);
});
