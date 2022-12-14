/* The rules:
    - The deck consist of n different card types with different space related theme
    - Each turn, you flip over two cards (one at a time, mean you get to see the first one before pciking the second)
    - If the two cards match, then they are removed from the game (unflips), otherwise they are returned (flips back)
    - The game ends when all the cards are flipped (removed)
*/

// Card flip on click

// Write code that will watch for the boxes (card elements) being clicked on to flip
// first grab all elements with class card and store in varible card

const card = document.querySelectorAll(".card");

let userFlippedCard = false;
let firstSelection = "";
let secondSelection = "";



    // Step 3: Put it in a function. A.K.A function declaration
function cardFlip() {
        // create and access class list of "cards" and toggle "flip" class
        // Definition: Using classList is a convenient alternative to accessing an element's list of classes as a space-delimited string via element.className.
    this.classList.add('flip');
        // console.log to confirm that "flip" is attached to "card" on click? this will confirm it flipped?
    if (!userFlippedCard){
            // for user 1st click
        userFlippedCard = true;
        firstSelection = this;
            // console.log({userFlippedCard, firstSelection}); ==> to test if userFlippedCrad = true
    } else {
            // for user 2nd click
        userFlippedCard = false;
        secondSelection = this;

        checkForMatch();
    }
}

function checkForMatch(){
    if(firstSelection.dataset.logo === secondSelection.dataset.logo){
        // Successful match
        firstSelection.removeEventListener("click", cardFlip);
        secondSelection.removeEventListener("click", cardFlip);
    } else {
        // No-match - unflip card
        setTimeout (() => {
            firstSelection.classList.remove("flip");
            secondSelection.classList.remove("flip");
            resetBoard()
        }, 1000);
    }
}


card.forEach(card => { // Step 2: loop through the list of card elements into each card (using for each loop)
    card.addEventListener("click", cardFlip); // adds event listener (click event) that executes a function "cardFlip" when fired
});





// Steps to flip card

    // Step 1: Grab  all card class elements and store it inside a variable
    // Step 2: loop through the list of card elements into each card (using for each loop)
    // Step 3: add event listener


// steps to store card
