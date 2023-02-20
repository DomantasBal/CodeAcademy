const saveBtn = document.querySelector("#saveBtn");
const frontCardText = document.querySelector("#frontCardText");
const backCardText = document.querySelector("#backCardText");
const reviewCards = document.querySelector("#reviewCards");

let cards = [];
const retrieveCards = localStorage.getItem('Cards');
cards = JSON.parse(retrieveCards);



///////////// Save Button ////////////////
saveBtn.addEventListener("click", event =>{
    event.preventDefault();

    // Surenka info is text area
    let frontText = frontCardText.value;
    let backText = backCardText.value;
    
    //Cards counteris
    let cardNumber = 0;
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

// Pasiuncia duomenis i LocalStorage
    localStorage.setItem("Cards", JSON.stringify(cards));


// Number of flash cards - Desineje

    const originalCountText = document.querySelector("#numberOfCards");
    const newCountText = `Number of FlashCards: ${cards.length}`;
    originalCountText.textContent = newCountText;
    localStorage.setItem("NumberOfCards", cards.length);

//Event listener END
})
