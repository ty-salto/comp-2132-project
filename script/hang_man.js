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
let monsMaxDistance;
let monsDistance = 10;
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
    //checkGameStatus();
}

    //decreases the lives by 1
    function decreaseLives() {
        livesCounter --;
        console.log(livesCounter);
        monsMaxDistance = 70 -(12*(livesCounter-1));
        
        console.log(`Distance= ${hangManMons.style.left}`);
        
    }

//     // checks if game is won or lost
//     function checkGameStatus() {
//         correctWord.innerHTML = selectedWord;
//         resetBtn.disabled = false;
//         // resetBtn.setAttribute('disabled', false);

//         if (livesCounter == 0 ) {
//             console.log("inside game status lost");
//             gameStatus.innerHTML = "You lost!!";
//             keyboard.disabled = true;
//             showPopUp();
//         }
//         if ( wordContainer.innerText === selectedWord) {
//             gameStatus.innerHTML = "You won!!";
//             showPopUp();
//         }        
//     }

//     //shows hint for word to be guessed
//     hintBtn.addEventListener('click', function () {
//         hintInfo.innerHTML = wordsToGuess.get(selectedWord);
//         hintInfo.removeAttribute('hidden');
//         hintBtn.disabled = true;
        
//     })

//     //sets new word to be guessed
//     //
//     resetBtn.addEventListener('click',function(){
//         reset();
//     } )

//     //resets to new word, lives back to 6
//     function reset(){
//         livesCounter = 6;
//         livesContainer.innerHTML = livesCounter;
//         hintBtn.disabled = false;
//         hintInfo.setAttribute('hidden', true);
//         resetBtn.disabled = false;
//         getRandomWord();
//         generateButtons();

//     }

//     playAgainBtn.addEventListener('click', function(){
//         reset();
//         popup.setAttribute('hidden', true);
//     })

//     // show pop up, with end of game status
//     function showPopUp(){
//         popup.removeAttribute('hidden');
//   }

function returnUnlock () {
    doors[doorIndex].image = codeStrct.doorOpen;
}


rtrnGmeBtn.addEventListener(`click`, function() {
    cancelAnimationFrame(hangManHandler);
    dungeonGenerator();
    document.getElementById(`hangMan`).style.display = `none`;
    livesCounter = 6 ;
    generateButtons();
    hangManUnlocking.style.display = `inline`;
    hangManDead.style.display = `none`;
    hangManUnlock.style.display = `none`;
    hangManMons.style.left = `10%`;






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
        //hangManPlayer.setAttribute(`style`, `transform: rotate(90deg);`);
        playChar.position.x = 384;
        playChar.position.y = 764;
        selectedWord = "";
        getRandomWord();
        disableAllKeys();

    } else if ( wordContainer.innerText === selectedWord) {
        hangManUnlocking.style.display = `none`;
        hangManUnlock.style.display = `inline`;
        rtrnGmeBtn.disabled = false;
        returnUnlock();
        selectedWord = "";
        getRandomWord();
        disableAllKeys();
        
        ++doorIndex;

    }    

    hangManHandler = requestAnimationFrame(hangManAnimate);
}


getRandomWord();
generateButtons();
