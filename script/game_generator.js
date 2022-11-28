function dungeonGenerator(){
    pattern.forEach((elem, i)=>{
        elem.forEach((subs, j)=>{
            let img = codeStrct.error;

            switch(subs) {
                case `w`:
                    img = codeStrct.walls;
                    break;
                case `f`:
                    img = codeStrct.floor;
                    break;
            }

            const layout =
                new DungeonFloor (img ,{
                    position: {
                        x: 16*j,
                        y: 16*i
                    }
                })

            layout.build();
                
        })
    })
    
}



function spriteGenerator (){
    monsters.forEach((mons)=>{
        mons.cast();
    });
    playChar.cast();
}