//monster
//monster array


class Monster{
    constructor(image,{position}, isAlive=true){
        this.image = image
        this.position = position
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

const jeffDOrc = new Image();
jeffDOrc.setAttribute(`class`, `bossClass`) 

const slime = new Image();
slime.setAttribute(`class`, `underling`) 

const iceZombie = new Image();
iceZombie.setAttribute(`class`, `underling`) 

const demon = new Image();
demon.setAttribute(`class`, `underling`) 

const lizard = new Image();
lizard.setAttribute(`class`, `underling`) 

const orcWar = new Image();
orcWar.setAttribute(`class`, `underling`) 


const boss = new Monster(jeffDOrc, {
    position: {
        x: 384,
        y: 16
    }
})

const mons1 = new Monster(slime, {
    position: {
        x: 336,
        y: 656
    }
})

const mons2 = new Monster(slime, {
    position: {
        x: 448,
        y: 608
    }
})

const mons3 = new Monster(iceZombie, {
    position: {
        x: 608,
        y: 352
    }
})

const mons4 = new Monster(iceZombie, {
    position: {
        x: 512,
        y: 400
    }
})

const mons5 = new Monster(demon, {
    position: {
        x: 192,
        y: 240
    }
})

const mons6 = new Monster(demon, {
    position: {
        x: 288,
        y: 320
    }
})

const mons7 = new Monster(orcWar, {
    position: {
        x: 400,
        y: 320
    }
})

const mons8 = new Monster(lizard, {
    position: {
        x: 368,
        y: 272
    }
})


//Array of Monsters
const monsters = [boss,mons1,mons2,mons3,mons4,mons5,mons6,mons7,mons8];
