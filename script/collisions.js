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
        element.image.className == `doorClose`)//check theif doorclose is right spelling
        {
            console.log(`${element.image.className} true`)
            document.getElementById(`hangMan`).setAttribute(`style`, `opacity:1;`)
            isDoor = true;
        }
    })
    return isDoor;
}

//Monster to detect player
function monsterDetect(monster) {
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
        monster.position.x + width > playChar.position.x) {
        console.log(`We detect the knight!`);
        document.getElementById(`diceBattle`).setAttribute(`style`, `opacity:1;`)
    }

}