// //////////////////////////////////////////
//                  Flashcards             //
// //////////////////////////////////////////


//Su animacija turi buti kortele apsiversti


// //////////////////////////////////////////
//                  JSON                   //
// //////////////////////////////////////////

const textIn = document.querySelector("#textInput");
const h2 = document.createElement("h2");
const saveBtn = document.querySelector("#save");


textIn.addEventListener("keyup", ()=>{
    h2.textContent = textIn.value;
    document.body.append(h2)
})

let textArray = [];
saveBtn.addEventListener("click", (event)=>{
    event.preventDefault();
    textArray.push(h2.textContent);
    localStorage.setItem("Input text: ", textArray);
    // console.log(textArray);
})






// //////////////////////////////////////////
//    Cookies: Session - Local storages    //
// //////////////////////////////////////////


//Local Storage

// window.onload = () => {
//     if (confirm("Agree to terms and conditions")){
//         localStorage.setItem('cookies', 'accepted');
//     }
// }


//Session Storage
// window.onload = () => {
//     if (confirm("Agree to terms and conditions")){
//         sessionStorage.setItem('cookies', 'accepted');
//     }
// }