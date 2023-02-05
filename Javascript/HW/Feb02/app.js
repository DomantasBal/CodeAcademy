// //////////////////////////////////////////
//             Exercise no. 10             //
// //////////////////////////////////////////


const shape = document.querySelector(".shape");
const div = document.querySelector(".text");

const p = document.createElement("p");


shape.addEventListener("mouseover", () =>{

    shape.style.background = "blue";
    shape.style.width = "120px";

    document.body.appendChild(p);
    p.textContent = "MouseOVER";
});


shape.addEventListener("mouseout", () =>{
    shape.style.background = "yellow";
    shape.style.width = "100px";
    p.textContent = "MouseOUT";

});

shape.addEventListener("click", () =>{
    const p = document.createElement("p");
    p.innerHTML = "Mouse CLICK";
    document.body.appendChild(p);
})



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
  