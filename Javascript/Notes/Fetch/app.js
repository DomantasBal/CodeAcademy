/////////////////////////////////////
//            Fetch                //
/////////////////////////////////////
const submitBtn = document.getElementById("submit");



//GET METHOD
function getData() {
    fetch("https://testapi.io/api/Domantas/resource/test")
    .then(res => res.json())
    .then(data => console.log(data))
}


//POST METHOD
function postData(){
fetch("https://reqres.in/api/users", {
    method: "POST",
    headers: {
        "Content-type": "application/json"
    },
    body: JSON.stringify({
        name: "name"
    })
})
}












