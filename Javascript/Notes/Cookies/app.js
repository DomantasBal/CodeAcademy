// Create an object
const details = {
  name: "John",
  age: 30,
  city: "New York",
};

// Convert the object to a string using JSON.stringify()
const localData = JSON.stringify(details);

// Set the data to localStorage
localStorage.setItem("userData", localData);

// Get the data from localStorage
let result = localStorage.getItem("userData");
console.log(result);
