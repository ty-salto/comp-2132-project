const character = document.getElementById(`character`);
const sprites = character.getContext(`2d`);
const canvas = document.getElementById(`floor`);
const dungeon = canvas.getContext(`2d`);
const codeStrct = {
    walls: new Image(),
    floor: new Image(),
    door: new Image(),
    doorOpen: new Image(),
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
codeStrct.door.setAttribute(`class`, `doorClosed`) 
codeStrct.door.onload = function(){
    console.log(`${codeStrct.door.src}`);
}

codeStrct.doorOpen.src = `./images/doors_leaf_open.png`;
codeStrct.doorOpen.setAttribute(`class`, `doorOpen`) 
codeStrct.doorOpen.onload = function(){
    console.log(`${codeStrct.doorOpen.src}`);
}

canvas.width = 800;
canvas.height = 800;

character.width = 800;
character.height = 800;

console.log(`${canvas.width} ${canvas.height}`);

class DungeonFloor {
    constructor(image, {position}){
        this.image = image
        this.position = position
    }

    build() {
        dungeon.drawImage(this.image, this.position.x, this.position.y);
    }
} 

class DungeonDoor {
    constructor(image, {position}, keys=[]){
        this.image = image
        this.position = position
        this.keys = keys
        this.numOfKeys = keys.length
    }
    

    build() {
        dungeon.drawImage(this.image, this.position.x, this.position.y);
    }

    unlock() {
        this.keys.forEach((mons)=>{
            if(this.numOfKeys > 0 && !mons.isAlive){
                --this.numOfKeys;
            }
        })
    }
} 

//door
const door1 = new DungeonDoor (codeStrct.door, {
    position: {
        x: 384,
        y: 496
    }
}, 
[mons1, mons2])

const door2 = new DungeonDoor (codeStrct.door, {
    position: {
        x: 384,
        y: 352
    }
},
[mons3, mons4, mons5, mons6])

const door3 = new DungeonDoor (codeStrct.door, {
    position: {
        x: 384,
        y: 112
    }
},
[mons7, mons8])

const doors = [door1,door2,door3]