let btn = document.querySelector("#btn");
let body = document.querySelector("body");

btn.addEventListener("click", ()=>{
    if(body.style.background === "black"){
        body.style.background = "white";
    }else{
        body.style.background = "black";
    }
});
