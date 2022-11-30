// Monster class for the dungeon
class Monster{
    constructor(image,{position}, type, isAlive=true){
        this.image = image;
        this.position = position;
        this.type = type;
        this.isAlive = isAlive;
    }

    cast() {
        if(this.isAlive){
            sprites.drawImage(this.image, this.position.x, this.position.y);

        }
    }

    move(x=0,y=0) {
        this.position.x += x; 
        this.position.y += y;
    }
} 

// Image for the monsters
const jeffDOrc = new Image();
jeffDOrc.setAttribute(`class`, `bossClass`) 

const slime = new Image();
slime.setAttribute(`class`, `underling slime`) 

const iceZombie = new Image();
iceZombie.setAttribute(`class`, `underling slime`) 

const demon = new Image();
demon.setAttribute(`class`, `underling slime`) 

const lizard = new Image();
lizard.setAttribute(`class`, `underling slime`) 

const orcWar = new Image();
orcWar.setAttribute(`class`, `underling slime`) 

// monster object classes
const boss = new Monster(jeffDOrc, {
    position: {
        x: 384,
        y: 16
    }
}, `orc`)

const mons1 = new Monster(slime, {
    position: {
        x: 336,
        y: 656
    }
}, `slime`)

const mons2 = new Monster(slime, {
    position: {
        x: 448,
        y: 608
    }
}, `slime`)

const mons3 = new Monster(iceZombie, {
    position: {
        x: 608,
        y: 352
    }
},`iceZombie`)

const mons4 = new Monster(iceZombie, {
    position: {
        x: 512,
        y: 400
    }, 
},`iceZombie`)

const mons5 = new Monster(demon, {
    position: {
        x: 192,
        y: 240
    }
}, `demon`)

const mons6 = new Monster(demon, {
    position: {
        x: 288,
        y: 320
    }
}, `demon`)

const mons7 = new Monster(orcWar, {
    position: {
        x: 400,
        y: 320
    }
}, `orcWar`)

const mons8 = new Monster(lizard, {
    position: {
        x: 368,
        y: 272
    }
}, `lizard`)

//Array of Monsters
let monsters = [boss,mons1,mons2,mons3,mons4,mons5,mons6,mons7,mons8];
