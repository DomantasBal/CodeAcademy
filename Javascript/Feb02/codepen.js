// paspaudus bet kuri klaviaturos mygtuka - 
// kamuolys atsiranda virsuje, arba kyla i virsu

// klaviaturos mygtuka atleidus - 
// kamuolys atsiranda pradineje padetyje, 
// arba krenta zemyn


let ball = document.querySelector("#ball");
ball.style.transition = "1s ease-out";



    document.addEventListener("keyup", function(event) {
            // ball.style.bottom = "500px";
        ball.style.bottom = "40px";
      });

    document.addEventListener("keydown", function(event) {
            // ball.style.bottom = "40px";
      ball.style.bottom = "500px";
    });