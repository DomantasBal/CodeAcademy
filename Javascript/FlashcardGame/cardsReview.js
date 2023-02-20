/////////////////////      Review Cards PAGE      /////////////////////
const frontCard = document.querySelector("#frontOfCard");
const backCard = document.querySelector("#backOfCard");
let cardNumberCount = 1;

window.addEventListener("storage", () =>{
    //Kai window objekte localstorage yra pakites vykdomas callbackas su gavimu kortos info.
    var retrieveCards = localStorage.getItem('Cards');
    
    //CARDS kur storinamas objektu array su visa info
    var cards = JSON.parse(retrieveCards);


    // Update CARD TEXT
    frontCard.textContent = cards[0].front;
    backCard.textContent = cards[0].back;


    // Number of Cards - Desineje
    const numberOfCards = document.querySelector("#numberOfCards");
    numberOfCards.textContent = cards.length;

    // What is Card Number?
    const cardNumber = document.querySelector("#cardNumber");
    console.log(cardNumberCount);
    cardNumber.textContent = `Card # ${cardNumberCount}`;
    cardNumberCount++;

})




let countClicks = 0;
const flipCard = document.querySelector("#flipCard");
flipCard.addEventListener("click", (event) => {
    event.preventDefault();
    countClicks++;
    


    console.log(countClicks);

        if (countClicks % 2 === 0) {
            frontCard.style.display = 'none';
            backCard.style.display = 'flex';
        } else {
            backCard.style.display = 'none';
            frontCard.style.display = 'flex';
        }
})




