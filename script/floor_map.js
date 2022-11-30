// dungeon object code
const code = {
    walls: `w`,
    floor: `f`
}

const pattern = []

// layout of the dungeon floor
const layout = [
    `walls`,50,`in`,`tab`,

    `walls`,20,`floor`,10,`walls`,20,`in`,`tab`,
    `walls`,20,`floor`,10,`walls`,20,`in`,`tab`,
    `walls`,20,`floor`,10,`walls`,20,`in`,`tab`,
    `walls`,20,`floor`,10,`walls`,20,`in`,`tab`,
    `walls`,20,`floor`,10,`walls`,20,`in`,`tab`,
    `walls`,20,`floor`,10,`walls`,20,`in`,`tab`,
    
    `walls`,24,`floor`,2,`walls`,24,`in`,`tab`,
    `walls`,24,`floor`,2,`walls`,24,`in`,`tab`,
    `walls`,24,`floor`,2,`walls`,24,`in`,`tab`,

    `walls`,15,`floor`,20,`walls`,15,`in`,`tab`,
    `walls`,15,`floor`,20,`walls`,15,`in`,`tab`,
    `walls`,15,`floor`,20,`walls`,15,`in`,`tab`,

    `walls`,12,`floor`,2,`walls`,1,`floor`,20,`walls`,1,`floor`,2,`walls`,12,`in`,`tab`,
    `walls`,12,`floor`,2,`walls`,1,`floor`,20,`walls`,1,`floor`,2,`walls`,12,`in`,`tab`,

    `walls`,12,`floor`,2,`walls`,1,`floor`,6,`walls`,8,`floor`,9,`walls`,12,`in`,`tab`,
    `walls`,12,`floor`,2,`walls`,1,`floor`,6,`walls`,8,`floor`,9,`walls`,12,`in`,`tab`,

    `walls`,10,`floor`,4,`walls`,1,`floor`,6,`walls`,2,`floor`,4,`walls`,2,`floor`,6,`walls`,1,`floor`,4,`walls`,10,`in`,`tab`,
    `walls`,10,`floor`,4,`walls`,1,`floor`,6,`walls`,2,`floor`,4,`walls`,2,`floor`,6,`walls`,1,`floor`,4,`walls`,10,`in`,`tab`,
    `walls`,10,`floor`,4,`walls`,1,`floor`,6,`walls`,2,`floor`,4,`walls`,2,`floor`,6,`walls`,1,`floor`,4,`walls`,10,`in`,`tab`,
    
    `walls`,10,`floor`,11,`walls`,2,`floor`,4,`walls`,2,`floor`,6,`walls`,1,`floor`,4,`walls`,10,`in`,`tab`,
    `walls`,10,`floor`,11,`walls`,2,`floor`,4,`walls`,2,`floor`,6,`walls`,1,`floor`,4,`walls`,10,`in`,`tab`,

    `walls`,10,`floor`,4,`walls`,1,`floor`,6,`walls`,3,`floor`,2,`walls`,3,`floor`,6,`walls`,1,`floor`,4,`walls`,10,`in`,`tab`,
    `walls`,10,`floor`,4,`walls`,1,`floor`,6,`walls`,3,`floor`,2,`walls`,3,`floor`,6,`walls`,1,`floor`,4,`walls`,10,`in`,`tab`,

    
    `walls`,10,`floor`,4,`walls`,1,`floor`,20,`walls`,1,`floor`,4,`walls`,10,`in`,`tab`,    
    `walls`,10,`floor`,4,`walls`,1,`floor`,20,`walls`,1,`floor`,4,`walls`,10,`in`,`tab`,
    `walls`,10,`floor`,4,`walls`,1,`floor`,20,`walls`,1,`floor`,4,`walls`,10,`in`,`tab`,
    `walls`,10,`floor`,4,`walls`,1,`floor`,20,`walls`,1,`floor`,4,`walls`,10,`in`,`tab`,

    `walls`,15,`floor`,20,`walls`,15,`in`,`tab`,
    `walls`,15,`floor`,20,`walls`,15,`in`,`tab`,
    `walls`,15,`floor`,20,`walls`,15,`in`,`tab`,

    `walls`,24,`floor`,2,`walls`,24,`in`,`tab`,
    `walls`,24,`floor`,2,`walls`,24,`in`,`tab`,
    `walls`,24,`floor`,2,`walls`,24,`in`,`tab`,

    `walls`,23,`floor`,4,`walls`,23,`in`,`tab`,
    `walls`,23,`floor`,4,`walls`,23,`in`,`tab`,

    `walls`,19,`floor`,12,`walls`,19,`in`,`tab`,
    `walls`,19,`floor`,12,`walls`,19,`in`,`tab`,
    
    `walls`,17,`floor`,16,`walls`,17,`in`,`tab`,
    `walls`,17,`floor`,16,`walls`,17,`in`,`tab`,
    `walls`,17,`floor`,16,`walls`,17,`in`,`tab`,
    `walls`,17,`floor`,16,`walls`,17,`in`,`tab`,
    `walls`,17,`floor`,16,`walls`,17,`in`,`tab`,
    `walls`,17,`floor`,16,`walls`,17,`in`,`tab`,
    `walls`,17,`floor`,16,`walls`,17,`in`,`tab`,

    `walls`,20,`floor`,10,`walls`,20,`in`,`tab`,
    `walls`,20,`floor`,10,`walls`,20,`in`,`tab`,
    
    `walls`,24,`floor`,2,`walls`,24,`in`,`tab`,
    `walls`,24,`floor`,2,`walls`,24,`in`,`tab`,
    `walls`,24,`floor`,2,`walls`,24,`in`,`tab`,
]

// build he code for dugeon floor
let arr = [];
for (let i = 0; i < layout.length; i++) {
    switch (layout[i]) {
        case `tab`:
            arr = []
            break;
        case `walls`:
            for (let w = 0; w < layout[i+1]; w++){
                arr.push(`w`);
            }
            break;
        case `floor`:
            for (let f = 0; f < layout[i+1]; f++){
                arr.push(`f`);
            }
            break; 
        case `in`:
            pattern.push(arr);
            break;   
    }
    
}
