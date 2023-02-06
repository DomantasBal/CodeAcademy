// //////////////////////////////////////////
//             Exercise no. 12             //
// //////////////////////////////////////////

// const shape = document.querySelector(".shape");
// const div = document.querySelector(".text");

// const p = document.createElement("p");


// shape.addEventListener("mouseover", () =>{

//     shape.style.background = "blue";
//     shape.style.width = "120px";

//     document.body.appendChild(p);
//     p.textContent = "MouseOVER";
// });


// shape.addEventListener("mouseout", () =>{
//     shape.style.background = "yellow";
//     shape.style.width = "100px";
//     p.textContent = "MouseOUT";

// });

// shape.addEventListener("click", () =>{
//     p.innerHTML = "Mouse CLICK";
//     document.body.appendChild(p);
// })



// //////////////////////////////////////////
//             Exercise no. 11             //
// //////////////////////////////////////////



function collectInput () {

    let id = prompt("Select Paragraph (a b c d)");
    // viska i lowercase kad tiktu ir didelios raides
    id = id.toLowerCase();

    if (id == "a"){
        writeText();
    }else if (id == "b"){
        writeText();
    }else if (id == "c"){
        writeText();
    }else if (id == "d"){   
        writeText();
    }else {
        alert("Sorry wrong selection")
    }

    // Not sure kaip geriau ar if ar case sitam

    // switch (id){
    // case "a": writeText();
    // break;
    // case "a": writeText();
    // break;
    // case "a": writeText();
    // break;
    // case "a": writeText();
    // break;

    // default:   alert("Sorry wrong selection");
    // }



    function writeText (){

        let text = prompt("Type Text");
        let p = document.getElementById (id);
    
        p.textContent = text;
        let countClicks = 0;
    
        p.addEventListener("click", () => {
          countClicks++;
        
          if (countClicks % 2 === 0) {
            p.textContent = "Clicked!"
          } else {
            p.textContent = text;
          }
        });
    }
}





// //////////////////////////////////////////
//             Exercise no. 10             //
// //////////////////////////////////////////


// const shape = document.querySelector(".shape");
// const div = document.querySelector(".text");
// const p = document.createElement("p");

// shape.addEventListener("mouseover", () =>{

//     shape.style.background = "blue";
//     shape.style.width = "120px";

//     const p = document.createElement("p");
//     p.innerHTML = "Mouse OVER";
//     document.body.appendChild(p);
// });

// shape.addEventListener("mouseout", () =>{
//     shape.style.background = "yellow";
//     shape.style.width = "100px";

//     const p = document.createElement("p");
//     p.innerHTML = "Mouse OUT";
//     document.body.appendChild(p);
// });

// shape.addEventListener("click", () =>{
//     const p = document.createElement("p");
//     p.innerHTML = "Mouse CLICK";
//     document.body.appendChild(p);
// })



// //////////////////////////////////////////
//             Exercise no. 9              //
// //////////////////////////////////////////


// let show = () => {
//     console.log("Anonymous function");
// };
// show();


// let add = (a, b) => {return a + b};

// console.log(add(2,2));



// let show = function() {
//     console.log("Anonymous function");
//   };


//   let add = function(a, b) {
//     return a + b;
//   };
  