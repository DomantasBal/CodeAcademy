////////////////////////////////////////////
//                 FETCH API              //
////////////////////////////////////////////

// /////////////////////// CHUCK NORRIS TASK

const getJokesBtn = document.querySelector("#getJokesBtn");
const formInput = document.querySelector("#jokeNumber");
const ulEl = document.querySelector("#output");
const deleteBtn = document.querySelector("#deleteBtn");
let jokesArr = [];

//This duplication is ugly but cant think of any other solution now
const retrieveJokes = localStorage.getItem("jokes");
const jokesFromStorage = JSON.parse(retrieveJokes);
formInput.value = jokesFromStorage.length;



getJokesBtn.addEventListener("click", (e) => {
  e.preventDefault();
  getJokeApi();
});

deleteBtn.addEventListener("click", (e) => {
  e.preventDefault();
  ulEl.remove();
});


function getJokeApi() {
  fetch("https://api.chucknorris.io/jokes/random")
    .then((response) => response.json())
    .then((data) => {
      const newListItem = document.createElement("li");
      newListItem.textContent = data.value;
      ulEl.append(newListItem);

      jokesArr.push(newListItem.textContent);

      /// PASIKARTOTI SITAAAAAAAAAA //////////////////////////
      localStorage.setItem("jokes", JSON.stringify(jokesArr));


      //This duplication is ugly but cant think of any other solution now
      const retrieveJokes = localStorage.getItem("jokes");
      const jokesFromStorage = JSON.parse(retrieveJokes);
      formInput.value = jokesFromStorage.length;

    });
}




// /////////////////////// IMAGES TASK
// const photosContainer = document.querySelector("#photos-container");

// //Generates random number
// let randomNumber = Math.floor(Math.random() * 33)

// //Fetches photos object from picsum
// fetch(`https://picsum.photos/v2/list?page=${randomNumber}`)
// //Gets the response and converts to workable Object
// .then(response => response.json())
// //Converted object does the thingies with callback
// .then(photos => {

//     console.log(photos);

// //Loops through photos object and adds them to the Body html
//     for(photo in photos){
//         photosContainer.innerHTML += `<img src="${photos[photo].download_url}">`;
//     }

// })

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
