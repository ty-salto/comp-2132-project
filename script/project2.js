let count = 0;
let imgCnt = 0;
let gameStartHandler;

knight.src = `./images/knight_f_run_anim_f0.png`;
jeffDOrc.src = `./images/sprite_monster/ogre_idle_anim_f0.png`;
slime.src = `./images/sprite_monster/swampy_idle_anim_f0.png`;
iceZombie.src = `./images/sprite_monster/ice_zombie_idle_anim_f0.png`;
demon.src = `./images/sprite_monster/chort_idle_anim_f0.png`;
lizard.src = `./images/sprite_monster/lizard_f_idle_anim_f0.png`;
orcWar.src = `./images/sprite_monster/masked_orc_idle_anim_f0.png`;

//Start game
function dungeonAnimate(){
    // setTimeout(()=>{
    //     requestAnimationFrame(animate);}, 
    //     50);
    sprites.clearRect(0,0,800,800);
    
    // knight.src = `./images/knight_f_run_anim_f${imgCnt}.png`;
    // jeffDOrc.src = `./images/sprite_monster/ogre_idle_anim_f${imgCnt}.png`;
    // slime.src = `./images/sprite_monster/swampy_idle_anim_f${imgCnt}.png`;
    // iceZombie.src = `./images/sprite_monster/ice_zombie_idle_anim_f${imgCnt}.png`;
    // demon.src = `./images/sprite_monster/chort_idle_anim_f${imgCnt}.png`;
    // lizard.src = `./images/sprite_monster/lizard_f_idle_anim_f${imgCnt}.png`;
    // orcWar.src = `./images/sprite_monster/masked_orc_idle_anim_f${imgCnt}.png`;


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
    
    monsters.forEach((element, i)=>{
        monsterDetect(element, i);
    })

    spriteGenerator()
    gameStartHandler = requestAnimationFrame(dungeonAnimate);

}



// addEventListener(`click`,function(){
//         if(pauseKeyboardEvent == true){
//             pauseKeyboardEvent = false;
//             console.log(`false`);
//         }else if(pauseKeyboardEvent == false){
//             pauseKeyboardEvent = true;
//             console.log(`true`);
//         }
// })






onload = ()=>{
    requestAnimationFrame(dungeonAnimate);
    dungeonGenerator();
    console.log(`h = ${mons1.image.height}`);
}
