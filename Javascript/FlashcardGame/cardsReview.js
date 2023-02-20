/////////////////////      Review Cards PAGE      /////////////////////


window.addEventListener("storage", () =>{
    //Kai window objekte localstorage yra pakites vykdomas callbackas su gavimu kortos info.
    var retrieveCards = localStorage.getItem('Cards');
    
    //CARDS kur storinamas objektu array su visa info
    var cards = JSON.parse(retrieveCards);

    const frontCard = document.querySelector("#frontOfCard");
    const backCard = document.querySelector("#backOfCard");

    // Update CARD TEXT
    frontCard.textContent = cards[0].front;
    backCard.textContent = cards[0].back;


    // Number of Cards - Desineje
    const numberOfCards = document.querySelector("#numberOfCards");
    numberOfCards.textContent = cards.length;
    console.log(cards.length);


})




