const titleInput = document.querySelector("#titleInput");
const contentInput = document.querySelector("#contentInput");
const addPostBtn = document.querySelector("#addPostBtn");
const output = document.querySelector("#output");

addPostBtn.addEventListener("click", (event) => {
  event.preventDefault();

  //INPUT COLLECTION
  let inputValue = titleInput.value;
  let contentValue = contentInput.value;

  postData(inputValue, contentValue);
  getData();
});

// POST  Method
function postData(inputValue, contentValue) {
  return fetch("https://testapi.io/api/Domantas/resource/newPosts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify({ title: inputValue, content: contentValue }),
  })
    .then((response) => response.json())
    .then((newPost) => {})
    .catch((error) => console.error(error));
}

// GET  Method
function getData() {
  fetch("https://testapi.io/api/Domantas/resource/newPosts", {
    method: "GET",
  })
    .then((response) => response.json())
    .then((result) => {
      createPost(result);
    });
}


// GET  Method
function deleteData(id) {
    return fetch(`https://testapi.io/api/Domantas/resource/newPosts/${id}`, {
      method: "DELETE",
    })
    .then(response => {
      if (response.status === 204) {
        document.getElementById(id).remove();
        console.log("204")
      }
    });
  }
  

function createPost(dataIn) {
  console.log(dataIn.data);
  console.log(dataIn.data[0].id);

  // Content HTML
  let postBox = `<div id="postCard">
    <h2>${dataIn.data[0].title}</h2>
    <p>${dataIn.data[0].createdAt}</p>
    <p>${dataIn.data[0].content}</p>
    <a href="" id="delete" onclick="deletePost(${dataIn.data[0].id})" >Edit</a>
    <a href="" id="edit" >Delete</a>
  </div>`;

  output.innerHTML = postBox;
}

function deletePost(id) {
    console.log(id)
}