const saveBtn = document.querySelector("#saveBtn");
const frontCardText = document.querySelector("#frontCardText");
const backCardText = document.querySelector("#backCardText");
const cards = [];

// Surenka info is text area
saveBtn.addEventListener("click", event =>{
    event.preventDefault();
   let frontText = frontCardText.value;
   let backText = backCardText.value;
   let cardNumber = 0;
   

// Sukuria kortos objekta su constructor funkcija
function makeCard (frontText, backText, cardNumber){
    this.front = frontText;
    this.back = backText;
    this.number = cardNumber;
}

// Inicijuoja nauja korta su textarea duomenimis
let card  = new makeCard (frontText,backText,cardNumber);

//Cards Collection Array
cards.push(card)
console.log(cards);

//Card number and card length
// console.log(cards.length);



//Event listener END
})



