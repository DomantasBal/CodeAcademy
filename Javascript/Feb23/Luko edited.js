const addPostForm = document.getElementById('add-post')
const postsContainer = document.getElementById('posts')
let editPostId = null
const API_ENDPOINTS = {
    post: 'https://testapi.io/api/Skywalkeris/resource/newPosts',
    get: 'https://testapi.io/api/Skywalkeris/resource/newPosts',
    delete: (id) => `https://testapi.io/api/Skywalkeris/resource/newPosts/${id}`
}

// GET METHOD
const getData = (url) => {
    return fetch(url)
    .then(response => response.json())
    .then(data => data)
    .catch(err => console.log(err))
}

// POST METHOD
const postData = (url, data) => {
    return fetch(url, {
        method: 'POST',
        body: data,
    })
    .then(response => response.json())
    .then(data => {
        return data
    })
    .catch(err => console.log(err))       
}

// POST TEMPLATE 
const postTemplate = (data) => {
    const x = JSON.stringify(data)
    return `
        <div id=${data.id} class="post">
            <h3>${data.title}</h3>
            <p>${data.content}</p>
            <button class="edit" onClick=handlePostEdit(${data.id})>Edit</button>
            <button class="delete" onClick=deletePost(${data.id})>Delete</button>
        </div>
    `
}



// EDIT POST
const handlePostEdit = (id) => {
    editPostId = id
    const titleInput = document.querySelector('input[name=title]')
    const contentInput = document.querySelector('input[name=content]')
    titleInput.value = document.getElementById(id).querySelector('h3').innerText
    contentInput.value = document.getElementById(id).querySelector('p').innerText
}

// PUBLISH THE POST
const handleAddPost = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const newPost = await postData(API_ENDPOINTS.post, formData)
    postsContainer.innerHTML += postTemplate(newPost)
}

// SHOW POSTS
addPostForm.addEventListener('submit', handleAddPost)
window.onload = async () => {
    const posts = await getData(API_ENDPOINTS.get)
    posts.data.forEach(post => {
        postsContainer.innerHTML += postTemplate(post)
    })
}