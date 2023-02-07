// //////////////////////////////////////////
//             Objects                     //
// //////////////////////////////////////////

// EXERCISE 2

// const person = {
//     name: "Rosa",
//     age: 120,
//     alive: false,
//     interests: ["swimming", "cards"]
// }

// person.name = "Stefanija"

// // Google why this math just for fun not getting the math here 
// person.age = Math.floor(Math.random() * (80 - 20 + 1) + 20);

// if (person.age < 100){
//     person.alive = true;
//     person.interests.push("Enjoying life");
//    }

//    console.log(person);






// EXERCISE 1

let obj = {
    name: "Jonas",
    toysArray: ["horse", "ball", "nerf"],
    yearsOld: 5,
    birthday: true,
    totalToys: 3,
    friends: [
            {
                name: "Arturas",
                doing: "running"
            },
            {
                name: "Povilas",
                doing: "Sleeping"
            }
    ]
    }


    if(obj.birthday === true){
        obj.toysArray.shift();
        obj.toysArray.push("NEW TOY");
        obj.yearsOld++;
        obj.totalToys = obj.toysArray.length;

        console.log(obj.friends[0].name, obj.friends[0].doing);
        console.log(obj.friends[1].name, obj.friends[1].doing);

    }





// //////////////////////////////////////////
//             Exercise no. 1             //
// //////////////////////////////////////////

// let inputField = document.getElementById("number");
// let inputValue = inputField.value;

// inputField.addEventListener("blur", function () {
    
//   let inputValue = inputField.value;
//   if (!isNaN(inputValue) && inputValue >= 0 && inputValue <= 99) {
//     green();
//   } else {
//     red();
//   }
// });




// function green(){
//     let green = document.createElement("div");
//     green.textContent = "Tai yra skaicius tarp 0 ir 99";

//     green.style.background = "lightgreen";
//     green.style.height = "50px";
//     green.style.width = "100%";
//     green.style.marginBottom = "20px"
//     green.style.display = "flex"
//     green.style.alignItems = "center"
//     green.style.padding = "10px"
//     green.style.color = "green"


//     let form = document.querySelector("form");
//     form.prepend(green);

//     inputField.addEventListener("blur", function () {
//         green.remove();
//       });
// }


// function red (){
//     let red = document.createElement("div");
//     red.textContent = "Tai yra ne skaicius arba mazesnis uz 0 arba didesnis uz 99 jus ivedete sf";

//     red.style.background = "#FFCCCB";
//     red.style.height = "auto";
//     red.style.width = "100%";
//     red.style.marginTop = "20px"
//     red.style.display = "flex"
//     red.style.alignItems = "center"
//     red.style.padding = "10px"
//     red.style.color = "red"


//     let form = document.querySelector("form");
//     form.append(red);
    
//     inputField.addEventListener("blur", function () {
//         red.remove();
//       });
// }