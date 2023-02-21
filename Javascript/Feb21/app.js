// //////////////////////////////////////////
//                  FETCH API              //
// //////////////////////////////////////////

const photosContainer = document.querySelector("#photos-container");

//Generates random number
let randomNumber = Math.floor(Math.random() * 33)

//Fetches photos object from picsum
fetch(`https://picsum.photos/v2/list?page=${randomNumber}`)
//Gets the response and converts to workable Object
.then(response => response.json())
//Converted object does the thingies with callback
.then(photos => {

    console.log(photos);

//Loops through photos object and adds them to the Body html
    for(photo in photos){
        photosContainer.innerHTML += `<img src="${photos[photo].download_url}">`;
    }

})







// const url = "https://reqres.in/api/users/"

// fetch(url)
// .then(response => {
//     if (response.ok){
//         console.log("YES!")
//         return response.json();
//     }else{
//         console.log("OH NOOO");
//         throw new Error ("Errorssss")
//     }
// })
// .then(data => {
//     if (data){
//         console.log(data);
//     }
// })
// .catch(error => console.log(error))







// const url = "https://reqres.in/api/users"

// fetch(url, {
//     method: "POST",
//     body: JSON.stringify({
//         name: "Domantas"
//     })
// })
// .then(response => response.json())
// .then(data => console.log(data))
// .catch(error => console.log(error))