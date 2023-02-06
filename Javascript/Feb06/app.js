// //////////////////////////////////////////
//             Objects                     //
// //////////////////////////////////////////

let obj = {
    "name": "Jonas",
    "toysArray": ["horse", "ball", "nerf"],
    "yearsOld": 5,
    "birthday": true,
    "totalToys": 3,
    "friends": {
        "name": {
            "Antanas": {
                "isPlaying": "playing with ball"
            },
            "Petras":  {
                "isPlaying": "playing with horse"
            }
        }

    }
}

    if(obj.birthday == true){
        obj.toysArray.shift();
        obj.toysArray.push("NEW TOY");
        obj.yearsOld = 6;
        obj.totalToys = obj.toysArray.lenght;

        // console.log(obj.friends);
        console.log(obj.friends.name);
        console.log(obj.friends.name.Antanas);
        console.log(obj.friends.name.Petras);
    }





// //////////////////////////////////////////
//             Arrays                     //
// //////////////////////////////////////////


// Try shift unshift push pop

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