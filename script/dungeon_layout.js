const character = document.getElementById(`character`);
const sprites = character.getContext(`2d`);
const canvas = document.getElementById(`floor`);
const dungeon = canvas.getContext(`2d`);
const codeStrct = {
    walls: new Image(),
    floor: new Image(),
    door: new Image(),
    error: new Image()
}
console.log(`${pattern.length}`);
codeStrct.walls.src = `./images/wall_corner_front_left.png`;
codeStrct.walls.setAttribute(`class`, `wall`) 
codeStrct.walls.onload = function(){
    console.log(`${codeStrct.walls.src}`);
    console.log(`${codeStrct.walls.className}`);
}

codeStrct.floor.src = `./images/floor_1.png`;
codeStrct.floor.onload = function(){
    console.log(`${codeStrct.floor.src}`);
}

codeStrct.error.src = `./images/hole.png`;
codeStrct.error.onload = function(){
    console.log(`${codeStrct.error.src}`);
}

codeStrct.door.src = `./images/doors_leaf_closed.png`;
codeStrct.door.setAttribute(`class`, `doorClose`) 
codeStrct.door.onload = function(){
    console.log(`${codeStrct.door.src}`);
}

canvas.width = 800;
canvas.height = 800;

character.width = 800;
character.height = 800;

console.log(`${canvas.width} ${canvas.height}`);

class Wall {
    constructor(image, {position}){
        this.image = image
        this.position = position
    }

    build() {
        dungeon.drawImage(this.image, this.position.x, this.position.y);
    }
} 

//door
const door1 = new Wall (codeStrct.door, {
    position: {
        x: 384,
        y: 496
    }
})

const door2 = new Wall (codeStrct.door, {
    position: {
        x: 384,
        y: 352
    }
})

const door3 = new Wall (codeStrct.door, {
    position: {
        x: 384,
        y: 112
    }
})
const doors = [door1,door2,door3]