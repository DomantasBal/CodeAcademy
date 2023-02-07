// //////////////////////////////////////////
//                                         //
// //////////////////////////////////////////


// Input element
let input = document.createElement ("input");
input.type = "text";

// BUTTON Prideti
let buttonAdd = document.createElement("button");
buttonAdd.id = "add";
buttonAdd.innerText = "Prideti";
buttonAdd.onclick = add;

// BUTTON Prideti i gala
let buttonPush = document.createElement("button");
buttonPush.id = "push";
buttonPush.innerText = "Prideti i gala";
buttonPush.onclick = push;

//BUTTON Isimti paskutini
let buttonPop = document.createElement("button");
buttonPop.id = "pop";
buttonPop.innerText = "Isimti paskutini";
buttonPop.onclick = pop;

//BUTTON Isimti pirma
let buttonLast = document.createElement("button");
buttonLast.id = "last";
buttonLast.innerText = "Isimti pirma";
buttonLast.onclick = last;

const btnAdd = document.querySelector("#add")
const btnPush = document.querySelector("#push")
const btnPop = document.querySelector("#pop")
const btnShift = document.querySelector("#last")


/////////////////// CONTENT
let p = document.createElement ("p");
let array = ["Vienas", "Du", "Trys", "Keturi"]



function add(){
    array.unshift(input.value)
    document.body.append(array);

}

function push(){
    array.push(input.value)
    document.body.append(array);
}

function pop(){
    array.pop(input.value)
    document.body.append(array);
}

function last(){
    array.shift(input.value)
    document.body.append(array);
}

// Styles for elements
input.style.margin = "20px";

let buttonsArray = [buttonAdd,buttonPush,buttonPop,buttonLast]

// Set Styles for all buttons no repetition try
for (let button of buttonsArray){
        button.style.padding = "20px 60px";
        button.style.margin = "10px";
}





//Rodyti elementus
document.body.append(input, buttonAdd,buttonPush,buttonPop,buttonLast)










