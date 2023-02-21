// //////////////////////////////////////////
//                  FETCH API              //
// //////////////////////////////////////////

const url = "https://reqres.in/api/users"

fetch(url)
.then(response => response.json())
.then(data => console.log(data))