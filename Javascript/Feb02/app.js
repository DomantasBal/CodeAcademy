
// //////////////////////////////////////////
// //            Funcijos Parametrai       //
// //////////////////////////////////////////




getAge(19);

// Ternary versija
function getAge(ageIn) {
  return ageIn >= 18 ? alert("Galima gerti!") : confirm("Ar tevai leido gerti?");
}

// pirma versija

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
