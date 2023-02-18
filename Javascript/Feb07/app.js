// Some and Every

const budgets = [
    {
      name: "Rytis",
      budget: 50,
    },
    {
      name: "Saulė",
      budget: 230,
    },
    {
      name: "Paulius",
      budget: 1500,
    },
    {
      name: "Gytis",
      budget: 92,
    },
    {
      name: "Sandra",
      budget: -11,
    },
  ];
  

//1
let result = budgets.some((item)=>item.budget < 0)
console.log(result);

//2
function belowHundred(arr) {
    const filteredArr = arr.filter(item => item < 100);
    if (filteredArr.length > 0) {
      return filteredArr;
    } else {
      return "All numbers are above 100";
    }
  }

  console.log(belowHundred(budgets));
  



// //////////////////////////////////////////
//                  Array methods          //
// //////////////////////////////////////////



// Padaryti uzduoti "FOR EACH PRACTICE TIME" uzduoti
// const numbers = [5,1,7,2,-9,8,2,7,9,4,-5,2,-6,8,-4,6];

// let result = numbers.forEach ((number, index)=> {
//     let p = document.createElement ("p");
//     p.append(`index nr: ${number} value: ${index}`)
//     document.body.append(p);
// }); 




// function withNums(arr) {
//   arr.forEach((number, index) => {
//     console.log(number, index);
//   });
// }

// withNums(numbers);





// //////////////////////////////////////////
//              Akordai uzduotis           //
// //////////////////////////////////////////


// let akordai = [ "D", "G", "C7", "F"]

// for (i=0; i < akordai.length; i++){
//     if(!akordai[i].includes('7')){
//         akordai[i] += '7'
//     }
// }
// console.log(akordai);



// function checkAkordai(akordai){
//     for (let check of akordai){
//         if(!check.includes('7')){
//             return akordai[check] + '7'
//         }
//     }
    
// }
// console.log(akordai);



// let first = ["spliece", "spice", "concat"];
// let second = [ "push", "pop", "shift", "unshift"];

// let obj = {
//     subject: "methods"
// }

// let sujungtas = first.concat(second, "leght", "7", obj)
// console.log(sujungtas);


// let masyvas = ["vienas", "du", "trys","keturi", "penki", "sesi"]

// masyvas.splice(1 , 1, "let's")
// masyvas.splice(2 , 1, "Dance")

// let joined = masyvas.join(", ");
// console.log(masyvas);



// //////////////////////////////////////////
//                  1h Uzduotis            //
// //////////////////////////////////////////


// // Create Input element
// let input = document.createElement ("input");
// input.type = "text";

// ///////Buttons

// // BUTTON Prideti
// let buttonAdd = document.createElement("button");
// buttonAdd.innerText = "Prideti";
// buttonAdd.onclick = add;

// // BUTTON Prideti i gala
// let buttonPush = document.createElement("button");
// buttonPush.innerText = "Prideti i gala";
// buttonPush.onclick = push;

// //BUTTON Isimti paskutini
// let buttonPop = document.createElement("button");
// buttonPop.innerText = "Isimti paskutini";
// buttonPop.onclick = pop;

// //BUTTON Isimti pirma
// let buttonLast = document.createElement("button");
// buttonLast.innerText = "Isimti pirma";
// buttonLast.onclick = last;


// /////////////////// CONTENT
// let p = document.createElement ("p");
// let array = ["Vienas", "Du", "Trys", "Keturi"];


// function add(){
//     array.unshift(input.value);
//     p.textContent = array;
//     document.body.append(p);
// }

// function push(){
//     array.push(input.value);
//     p.textContent = array;
//     document.body.append(p);
// }

// function pop(){
//     array.pop(input.value);
//     p.textContent = array;
//     document.body.append(p);
// }

// function last(){
//     array.shift(input.value);
//     p.textContent = array;
//     document.body.append(p);
// }

// // Input Styles
// input.style.margin = "20px";
// input.style.height = "30px";
// input.style.borderRadius = "12px";

// let buttonsArray = [buttonAdd,buttonPush,buttonPop,buttonLast]

// // Set Styles for all buttons no repetition try
// for (let button of buttonsArray){
//         button.style.padding = "20px 60px";
//         button.style.margin = "10px";
//         button.style.borderRadius = "12px";
// }

// // Paragraph Styles
// p.style.color = "white";
// p.style.fontSize = "3rem";
// p.style.fontFamily = "Arial";
// p.style.background = "#303030";

// // DOM styling
// document.body.style.background = "#808080";


// /////////////////////Rodyti elementus
// document.body.append(input, buttonAdd,buttonPush,buttonPop,buttonLast)












