
// //////////////////////////////////////////
// //            Funkcijos                 //
// //////////////////////////////////////////

// let input = "labas";
// labas(input);

// function labas (){

//     if (input == "labas"){
//         console.log("labas");
//     }else{
//         console.log("Viso");
//     }
// }


// //////////////////////////////////////////
// //            Masyvai - Arrays          //
// //////////////////////////////////////////


// let li = document.getElementsByClassName ("item");

// let array = ["Apple","Orange", "Cherry"];

// for(i=0; i < array.length; i++){
//     li[i].innerHTML = array[i];
// }


//////////// REFACTOR /////////////

let li = document.getElementsByClassName ("item");

let array = ["Apple","Orange", "Cherry"];

listas(array);

function listas (input){
for(i=0; i < array.length; i++){
    li[i].innerHTML = input[i];
}
}




// // for let of method










// //////////////////////////////////////////
// //            Masyvai - Arrays          //
// //////////////////////////////////////////

// let masiv = ["one","two","three","four"];

// console.log(masiv[3]);




//////////////////////////////////////////
//            DOM MANIPULIACIJA         //
//////////////////////////////////////////

// let header = document.querySelector("h1");
// let text = document.getElementById ("text");

// // <p>
// text.textContent = "Pakeistas tekstas"
// text.style.fontSize = "64px";

// // H1
// header.style.color = "red";



//////////////////////////////////////////
//            Do While, While           //
//////////////////////////////////////////


////// DO While ////

// let i = 1;

// do{
//     console.log("bla bla")
//     i++;
// } while(i < 5);



////// While ////

// let i = 0;
// let number = 0;

// while (i < 5) {
//     console.log(number);
//     number += 4;
//     i++;
// }





//////////////////////////////////////////
//            Math Random               //
//////////////////////////////////////////



// let n = Math.random() * 10;

// console.log(Math.trunc(n));

// console.log("rounded: " + Math.round(n));

// console.log("Rounded to top: " + Math.ceil(n));

// console.log("Rounded to top: " + Math.ceil(n));



//////////////////////////////////////////
//              Apsilimas               //
//////////////////////////////////////////

// let n = 2 + 2;

// switch (4) {
//   case 55:
//     console.log("Yra 4");
//     break;

//   default:
//     console.log("Nera lygu");
// }
