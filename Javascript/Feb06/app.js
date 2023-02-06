let inputField = document.getElementById("number");
let inputValue = inputField.value;



inputField.addEventListener("blur", function () {
  let inputValue = inputField.value;
  if (!isNaN(inputValue) && inputValue >= 0 && inputValue <= 99) {
    green();
  } else {
    red();
  }
});





// if ( inputValue <= 99 && inputValue >= 0) {
//     green();
// } else {
//     red();
// }








function green (){
    let green = document.createElement("div");
    green.textContent = "Tai yra skaicius tarp 0 ir 99";

    green.style.background = "rgb(23, 255, 23)";
    green.style.height = "50px";
    green.style.width = "100%";
    green.style.marginBottom = "20px"
    green.style.display = "flex"
    green.style.alignItems = "center"
    green.style.padding = "10px"

    let form = document.querySelector("form");
    form.prepend(green);

    inputField.addEventListener("blur", function () {
        green.remove();
      });
}

function red (){
    let red = document.createElement("div");
    red.textContent = "Tai yra ne skaicius arba mazesnis uz 0 arba didesnis uz 99 jus ivedete sf";

    red.style.background = "red";
    red.style.height = "auto";
    red.style.width = "100%";
    red.style.marginTop = "20px"
    red.style.display = "flex"
    red.style.alignItems = "center"
    red.style.padding = "10px"


    let form = document.querySelector("form");
    form.append(red);
    
    inputField.addEventListener("blur", function () {
        red.remove();
      });
}

