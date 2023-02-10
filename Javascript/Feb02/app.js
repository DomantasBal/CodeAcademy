// //////////////////////////////////////////
// //            Anon function             //
// //////////////////////////////////////////

// Parasyti veliau arrow funcija cia pabandyti

// Arrow
// document.addEventListener("click", () => {
// document.querySelector("#funBtn").textContent = "swx";
// });


// Normal
// document.addEventListener("click", myfunction);

// function myfunction(){
//   document.querySelector("#funBtn").textContent = "swx";
// }


// //////////////////////////////////////////
// //            Event listener-handeler   //
// //////////////////////////////////////////

// let funBtn = document.getElementById("funBtn").addEventListener("click", function (){
//   console.log("somehtings");
// })


// //////////////////////////////////////////
// //            Funcijos Parametrai       //
// //////////////////////////////////////////

// getAge(11);

// Ternary versija

// function getAge(ageIn) {
//   return ageIn >= 18 ? alert("Galima gerti!") : confirm("Ar tevai leido gerti?");
// }

// pirma normali versija

// function getAge (ageIn){
//   if(ageIn >= 18){
//     alert("Galima");
//   }else{
//     confirm("Ar tevai leido gerti?");
//   }
// }




// sum(2,2);

// function sum (x, y){
//   return console.log(x + y);
// }


// //////////////////////////////////////////
// //            Forma Js                  //
// //////////////////////////////////////////



// const userForm = document.getElementById("form");
// userForm.addEventListener("submit", onSubmitForm);

// let userName = "";
// let userLastName = "";
// let here = document.getElementById("here");

// function onSubmitForm(e) {
//   // Prevent Refresh
//   e.preventDefault();
//   //   Grab inputs by their values
//   userName = e.target.elements.userName.value;
//   userLastName = e.target.elements.userLastName.value;

//   //   Console check
//   console.log(userName, userLastName);

//   //   print out stuff to web
//   here.textContent = `Sveiki, mano vardas yra ${userName + " " + userLastName}.`;
// }


// PIRMA DALIS UZDUOTIES
// userForm.addEventListener("submit", function onSubmitForm() {
//     console.log("Form Submited Successfully!");
// });

// //////////////////////////////////////////
// //            Antra                     //
// //////////////////////////////////////////

// let figura = document.querySelector(".figura");

// figura.addEventListener('mouseover', function() {
//     figura.style.display = 'none';
//   });

// //////////////////////////////////////////
// //            Pirma                     //
// //////////////////////////////////////////

// let pirmas = document.querySelector("#change");
// let antras = document.querySelector("#add");
// let p = document.querySelector("#color");
// let p2 = document.querySelector("#insert");

// // Ketvirtas
// function insert (){
//     p2.innerHTML = "Tekstas tekstas"
// }

// // TRECIAS
// function color (){
//     p.style.color = "red";

// }

// // ANTRAS
// function append (){
//     antras.innerHTML += " pridetas tekstas ";

// }

// // PIRMAS
// function changeText(){
//     pirmas.textContent = "Pakeistas Tekstas";
// }



///// FORMA /////

let forma = document.querySelector("form");
forma.addEventListener("submit", event => {
  event.preventDefault();
  let formInputs = event.target.elements;
  let nameInput = formInputs.name.value;
  console.log(nameInput);
});

///// Event listeneriai a bit more  /////

let shape = document.querySelector(".shape");

shape.addEventListener("click", (e) =>{


  let dot = document.createElement("div");
  dot.className = "dot";
  shape.append(dot);

  // console.log(e);
  // Okay well thats cool!!
  // console.log(e.clientX); // :)))))


  // Lame try to make mini painting app lol 
  // Probably have to grab position in a loop or something
  // but meh I'll just continue learning :)
  if(e.clientX){
    dot.style.left = e.clientX + "px";
  } 
})



