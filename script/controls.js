let isPause = false;
let keyboardPause = false;

//event to move the character using WASD
addEventListener(`keydown`,function(event){
    if(!pauseKeyboardEvent && !keyboardPause){
        console.log(event.key);
        switch(event.key){
            case `a`://left
                if (collisionDetection(pattern[(playChar.position.y+20)/16][(playChar.position.x-16)/16])){   
                    playChar.move(-16,0);
                }
                pauseKeyboardEvent = true;
                
                console.log(`x = ${playChar.position.x}`);
                break;
            case `w`://up
                if ((playChar.position.y) > 0 && !doorDetection(playChar.position.x, playChar.position.y)){
                    console.log(`door detected`);
                    if (collisionDetection(pattern[(Math.floor(playChar.position.y+4)/16)][(playChar.position.x)/16])){
                        playChar.move(0,-16);
                    }
                }
                pauseKeyboardEvent = true;

                console.log(`y = ${playChar.position.y+20}`);
                break;
            case `d`://right
                if (collisionDetection(pattern[(playChar.position.y+20)/16][(playChar.position.x+16)/16])){
                    playChar.move(16,0)
                }
                pauseKeyboardEvent = true;

                console.log(`x = ${playChar.position.x}`);
                break;
            case `s`://down
                if ((playChar.position.y+36) < 800){
                    if (collisionDetection(pattern[(playChar.position.y+36)/16][(playChar.position.x)/16] )){
                        playChar.move(0,16)
                    }
                }
                pauseKeyboardEvent = true;

                console.log(`y = ${playChar.position.y}`);
                console.log(`y = ${playChar.position.y+20}`);
                break;
        }
    }

    // reset the detection of monsters for player
    playerDetected = false;
})

let pauseKeyboardEvent = false;
// event to limit the movement one at a time.
addEventListener(`keyup`,function(event){
    console.log(event.key);
    switch(event.key){
        case `a`://left
            playChar.move();
            pauseKeyboardEvent = false;
            break;
        case `w`://up
            playChar.move();
            pauseKeyboardEvent = false;
            break;
        case `d`://right
            playChar.move()
            pauseKeyboardEvent = false;
            break;
        case `s`://down
            playChar.move()
            pauseKeyboardEvent = false;
            break;
    }
})

