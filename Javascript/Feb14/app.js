// //////////////////////////////////////////
//               Coookies                  //
// //////////////////////////////////////////

const textIn = document.querySelector("#textInput");
const h2 = document.createElement("h2");
const saveBtn = document.querySelector("#save");


textIn.addEventListener("keyup", (event)=>{
    event.preventDefault();
    h2.textContent = textIn.value;
    document.body.append(h2)
})

saveBtn.addEventListener("click", (event)=>{
    event.preventDefault();
    localStorage.setItem("Input text: ", h2.textContent);
})







///////////////////////////////////////////////////

// const form = document.querySelector("form");

// form.addEventListener("submit", (event)=>{
//     event.preventDefault();
//     let colorInput = document.getElementById("colorPick");

//     //setting the cookie value
//     document.cookie = `color=${colorInput.value}`;

//     // check if there is cookie
//     //dig this string conversion for more info on web after lecture
//     const colorCookie = document.cookie.match(/(^| )color=([^;]+)/);
//     if (colorCookie) {

//         // console.log(colorCookie);
//         document.body.style.backgroundColor = colorCookie[2];
//         const deleteButton = document.createElement("button");
//         deleteButton.textContent = "Delete";

//         //Delete button listener
//         deleteButton.addEventListener("click", () => {
//         document.cookie = "max-age=0";
//         document.body.style.backgroundColor = "";
//         document.location.reload();
//         });

//         //a wild delete button appears now
//         document.body.appendChild(deleteButton);
        
//         // hide form
//         form.style.display = "none";
        
//     }
// })


///////////////////////////////////////////////////
//////////////////////PVZ/////////////////////////
// const date = new Date('14 Jun 20256 00:00:00 PDT');
// document.cookie = "name=Domantas";
// document.cookie = 'lastName=Jonas; expires' + date.toUTCString();
// console.log(document.cookie);