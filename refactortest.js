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
        
        // do cards match

        if (firstSelection.dataset.logo ===
            secondSelection.dataset.logo){
                firstSelection.removeEventListener("click", cardFlip);
                secondSelection.removeEventListener("click", cardFlip);
            } else {
                // not a match
                setTimeout(() => {
                    firstSelection.classList.remove("flip");
                    secondSelection.classList.remove("flip");
                    resetBoard()
                }, 1500);
            }

    }
}

function checkForMatch(){
    if(firstSelection.dataset.logo === secondSelection.dataset.logo){
        firstSelection.removeEventListener("click". cardFlip);
        secondSelection.removeEventListener("click", cardFlip);
    } else {
        setTimeout (() => {
            firstSelection.classList.remove("flip");
            secondSelection.classList.remove("flip");
            resetBoard()
        }, 1500);
    }
}

card.forEach(card => { // Step 2: loop through the list of card elements into each card (using for each loop)
    card.addEventListener("click", cardFlip); // adds event listener (click event) that executes a function "cardFlip" when fired
});
