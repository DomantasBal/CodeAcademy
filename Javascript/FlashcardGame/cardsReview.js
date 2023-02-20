/////////////////////      Review Cards PAGE      /////////////////////
const frontCard = document.querySelector("#frontOfCard");
const backCard = document.querySelector("#backOfCard");
const card = document.querySelector(".card");



//Kai window objekte localstorage yra pakites vykdomas callbackas su gavimu kortos info.
const retrieveCards = localStorage.getItem('Cards');

//CARDS kur storinamas objektu array su visa info
const cards = JSON.parse(retrieveCards);



/////////// Click NEXT Functionality /////////// 
let cardIndex = 0;
card.addEventListener("click", () => {


        frontCard.textContent = cards[cardIndex].front;
        backCard.textContent = cards[cardIndex].back;
        cardIndex++;

        if(cardIndex >= cards.length){
            cardIndex = 0;
        }

})   


/////////// On LocalStorage Change get DATA  /////////// 
window.addEventListener("storage", () =>{
    //Kai window objekte localstorage yra pakites vykdomas callbackas su gavimu kortos info.
    const retrieveCards = localStorage.getItem('Cards');
    
    //CARDS kur storinamas objektu array su visa info
    const cards = JSON.parse(retrieveCards);
    
    
    // Update CARD TEXT
    frontCard.textContent = cards[0].front;
    backCard.textContent = cards[0].back;
    
    
    // Number of Cards - Desineje
    const numberOfCards = document.querySelector("#numberOfCards");
    numberOfCards.textContent = cards.length;
    
    // What is Card Number?
    let cardNumberCount = 1;
    const cardNumber = document.querySelector("#cardNumber");
    cardNumber.textContent = `Card # ${cardNumberCount}`;
    cardNumberCount++;
    
    /////////// Click on card CHANGE Functionality /////////// 
    
    
})


/////////// Flip Functionality /////////// 
let countClicks = 0;
const flipCard = document.querySelector("#flipCard");
flipCard.addEventListener("click", (event) => {
    event.preventDefault();
    countClicks++;

        if (countClicks % 2 === 0) {
            backCard.style.display = 'none';
            frontCard.style.display = 'flex';

        } else {
            frontCard.style.display = 'none';
            backCard.style.display = 'flex';
        }
})









