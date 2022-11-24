let isPause = false;
addEventListener(`keydown`,function(event){
    if(!pauseKeyboardEvent){
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
            case `p`://pause
                if (!isPause) {
                    cancelAnimationFrame(gameStartHandler);
                    isPause = true;
                } else {
                    gameStartHandler = requestAnimationFrame(animate);
                    isPause = false;
                }
                break;

        }
    }
})

let pauseKeyboardEvent = false;
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

