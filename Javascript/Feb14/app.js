// //////////////////////////////////////////
//               Coookies                  //
// //////////////////////////////////////////


const form = document.querySelector("form");

form.addEventListener("submit", (event)=>{
    event.preventDefault();
    let colorInput = document.getElementById("colorPick");

    //setting the cookie value
    document.cookie = `color=${colorInput.value}`;

    // check if there is cookie
    //dig this string conversion for more info on web after lecture
    const colorCookie = document.cookie.match(/(^| )color=([^;]+)/);
    if (colorCookie) {

        // console.log(colorCookie);
        document.body.style.backgroundColor = colorCookie[2];
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";

        //Delete button listener
        deleteButton.addEventListener("click", () => {
        document.cookie = "max-age=0";
        document.body.style.backgroundColor = "";
        document.location.reload();
        });

        //a wild delete button appears now
        document.body.appendChild(deleteButton);
        
        // hide form
        form.style.display = "none";
        
    }
    
    
})




// ivykus formos persikrovimui jeigu cookie buvo surastas pati forma pradingsta o vartotojo ekrano fono spalva tampa jo pasirinkta slapva bei atvaizduojamas mygtukas delete





// PVZ
// const date = new Date('14 Jun 20256 00:00:00 PDT');
// document.cookie = "name=Domantas";
// document.cookie = 'lastName=Jonas; expires' + date.toUTCString();
// console.log(document.cookie);