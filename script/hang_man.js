const keyboard = document.getElementById("keyBoard") //changed
const hint = document.getElementById("hint-container")
// const hintInfo = document.getElementById("hintinfo-container")
const wordContainer = document.getElementById("word-container")
const hangManMons = document.getElementById("hangManMons")
const hangManPlayer = document.getElementById("hangManPlayer");
const hangManUnlocking = document.getElementById("hangManUnlocking");
const hangManUnlock = document.getElementById("hangManUnlock");
const hangManDead = document.getElementById("hangManDead");
const rtrnGmeBtn = document.getElementById("returnGamebtn");
const keyboardKeys = document.querySelectorAll(`.keys2`);

// const gameStatus = document.getElementById("popup-content")
// const correctWord = document.getElementById("popup-span")

// const hintBtn = document.getElementById("hint-btn")
// const resetBtn = document.getElementById("reset-btn")

// const popup = document.getElementById("popup");

// const playAgainBtn = document.getElementById("playagain-btn")

let selectedWord = "";
let livesCounter = 6 ;
let doorIndex = 0;
// let counter;
// livesContainer.innerHTML = livesCounter;
// popup.setAttribute('hidden', true);

let hangManHandler;
let monsMaxDistance = 0;
let monsDistance = 10;
rtrnGmeBtn.disabled = true;
// //hide pop up on open, not sure how better to do this


// key = word, value = hint
const wordsToGuess = new Map([
    ['apple', 'round and edible'],
    ['orange', 'also a color'],
    ['banana', 'long and yellow'],
    ['pineapple', `not an apple`]
])
//words to guess
words = [...wordsToGuess.keys()];

// get a random word from the wordsToGuess list
function getRandomWord(){
    selectedWord = words[Math.floor(Math.random() * words.length)];
    let displayItem = selectedWord.replace(/./g, '<span class="dashes">_ </span>');
    wordContainer.innerHTML = displayItem;
    hint.innerHTML = `Hint: ${wordsToGuess.get(selectedWord)}` 
    console.log(selectedWord);
    return selectedWord;
}
//todo
// set up game play/while playing etc

//letter buttons
//changed
function generateButtons() {
    const upperLetterBtn = 'qwertyuiop'.split('').map(letter =>
        `<button
                type="button"
                class="keys2"
                id='`+ letter +`'
                onClick="handleGuess('` + letter + `')">
                ${letter.toUpperCase()}
                 </button>`
    ).join('');
    const middleLetterBtn = 'asdfghjkl'.split('').map(letter =>
        `<button
                type="button"
                class="keys2"
                id='`+ letter +`'
                onClick="handleGuess('` + letter + `')">
                ${letter.toUpperCase()}
                 </button>`
    ).join('');
    const lowerLetterBtn = 'zxcvbnm'.split('').map(letter =>
        `<button
                type="button"
                class="keys2"
                id='`+ letter +`'
                onClick="handleGuess('` + letter + `')">
                ${letter.toUpperCase()}
                 </button>`
    ).join('');


    keyboard.innerHTML = `
    <div id="upperKeys2">${upperLetterBtn}</div>
    <div id="midKeys2">${middleLetterBtn}</div>
    <div id="lowerKeys2">${lowerLetterBtn}</div>
    `;
}    

// when keyboard letter is clicked
//adds letter to guessed word OR
//decreases lives
function handleGuess(chosenLetter){
    let dashes = document.getElementsByClassName("dashes");
    let charArray = selectedWord.split("");
    document.getElementById(chosenLetter).setAttribute('disabled', true);
    if(charArray.includes(chosenLetter))
    {
        charArray.forEach((char, i) =>
        {
            if(char === chosenLetter)
            {
                dashes[i].innerHTML = char;
                console.log('inside if ')
            }
        })
        console.log(chosenLetter);
    } else {
        decreaseLives()
    }

}

    //decreases the lives by 1
function decreaseLives() {
    livesCounter --;
    console.log(livesCounter);
    monsMaxDistance = 70 -(12*(livesCounter-1));
        
    console.log(`Distance= ${hangManMons.style.left}`);
}

function returnUnlock () {
    doors[doorIndex].image = codeStrct.doorOpen;
}


rtrnGmeBtn.addEventListener(`click`, function() {
    cancelAnimationFrame(hangManHandler);
    dungeonGenerator();
    document.getElementById(`hangMan`).style.display = `none`;
    monsDistance = 10;
    monsMaxDistance = 0;
    livesCounter = 6 ;
    generateButtons();
    hangManUnlocking.style.display = `inline`;
    hangManDead.style.display = `none`;
    hangManUnlock.style.display = `none`;
    hangManMons.style.left = `10%`;
    rtrnGmeBtn.disabled = true;
})

function disableAllKeys() {
    console.log(`${document.querySelectorAll(`.keys2`).length}`)
    document.querySelectorAll(`.keys2`).forEach((keyBtn)=>{
        keyBtn.disabled = true;
        console.log(`${keyBtn.disabled}`)
    })
}

function hangManAnimate() {
    hangManPlayer.src = `./images/knight_f_idle_anim_f${imgCnt}.png`;
    hangManMons.src = `./images/sprite_monster/lizard_m_run_anim_f${imgCnt}.png`;
    
    if (count != 15)
    {
        ++count;
        
    } else {
        count = 0;
    }
    imgCnt = Math.floor(count/4);

    if(monsDistance < monsMaxDistance && monsDistance < 70)
    {
        hangManMons.style.left = `${monsDistance++}%`;
    }

    if (livesCounter == 0) {
        hangManUnlocking.style.display = `none`;
        hangManDead.style.display = `inline`;
        rtrnGmeBtn.disabled = false;
        playChar.position.x = 384;
        playChar.position.y = 764;
        selectedWord = "";
        getRandomWord();
        disableAllKeys();
        rtrnGmeBtn.disabled = false;

    } else if ( wordContainer.innerText === selectedWord) {
        hangManUnlocking.style.display = `none`;
        hangManUnlock.style.display = `inline`;
        rtrnGmeBtn.disabled = false;
        returnUnlock();
        selectedWord = "";
        getRandomWord();
        disableAllKeys();
        rtrnGmeBtn.disabled = false;
        
        ++doorIndex;

    }    

    hangManHandler = requestAnimationFrame(hangManAnimate);
}


getRandomWord();
generateButtons();
