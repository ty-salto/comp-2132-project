const diceBattle = document.getElementById(`diceBattle`);

function collisionDetection(position) {
    //wall collision
    if (position == `w`){
        return false;
    }
    return true;
}
//door collision
function doorDetection(x, y){
    let isDoor = false;

    //32x32 collision
    doors.forEach((element)=>{
        if(((element.position.x == x && element.position.y == y-12) ||
        (element.position.x == x-16 && element.position.y == y-12)) &&
        element.image.className == `doorClosed`)//check the if doorclose is right spelling
        {
            if(element.numOfKeys == 0){
                console.log(`number of monster = ${element.numOfKeys}`);
                console.log(`${element.image.className} true`)
                document.getElementById(`hangMan`).setAttribute(`style`, `display: inline;`)
                requestAnimationFrame(hangManAnimate);
            }

            isDoor = true;
        }
    })
    return isDoor;
}

//Monster to detect player

let monsterIndex = 0;
let playerDetected = false; 

function monsterDetect(monster, index) {
    const monsImgH = monster.image.height;
    const monsImgW = monster.image.width;
    
    let height;
    let width;
    

    if(monsImgH <= 16) {
        height = 16;
    } else if(monsImgH > 16 && monsImgH <= 32) {
        height = 32;
    }

    if(monsImgW <= 16) {
        width = 16
    } else if(monsImgW > 16 && monsImgW <= 32) {
        width = 32
    }

    if((monster.position.y <= playChar.position.y + 20 && 
        monster.position.y + height >= playChar.position.y + 20) &&
        monster.position.x <= playChar.position.x &&
        monster.position.x + width > playChar.position.x && !playerDetected) {
        console.log(`We detect the knight!`);
        playerDetected = true;
        diceBattle.setAttribute(`style`, `display: inline;`)
        monsterIndex = index;
        // while(diceBattle.firstChild) {
        //     diceBattling.firstChild.remove();
        // }


  



        console.log(monsterIndex);
    }

}