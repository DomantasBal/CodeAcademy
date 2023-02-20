const saveBtn = document.querySelector("#saveBtn");
const frontCardText = document.querySelector("#frontCardText");
const backCardText = document.querySelector("#backCardText");
const reviewCards = document.querySelector("#reviewCards");
const cards = [];
let cardNumber = 0;

// Surenka info is text area
saveBtn.addEventListener("click", event =>{
    event.preventDefault();
    let frontText = frontCardText.value;
    let backText = backCardText.value;
    
    //Cards counteris
    cardNumber++;
    
    // Sukuria kortos objekta su constructor funkcija
    function makeCard (frontText, backText, cardNumber){
        this.front = frontText;
        this.back = backText;
        this.number = cardNumber;
    }
    
    // Inicijuoja nauja korta su textarea duomenimis
    let card  = new makeCard (frontText,backText,cardNumber);

//Prideda nauja korta i kortu rinkini - Array
cards.push(card)
localStorage.setItem("Cards", JSON.stringify(cards));



// Number of flash cards - Desineje

    const originalCountText = document.querySelector("#numberOfCards");
    const newCountText = `Number of FlashCards: ${cards.length}`;
    originalCountText.textContent = newCountText;
    localStorage.setItem("NumberOfCards", cards.length);

//Event listener END
})
