//player
class Player {
    constructor(image, {position}){
        this.image = image
        this.position = position
    }

    cast() {

        sprites.drawImage(this.image, this.position.x, this.position.y);
    }


    move(x=0,y=0) {
        this.position.x += x; 
        this.position.y += y;
    }
} 

const knight = new Image();
knight.setAttribute(`class`, `player`);
knight.onload = function(){
    console.log(`${knight.src}`);
}

const playChar = new Player(knight, {
    position: {
        x:384,
        y:764 //12
    }
})
