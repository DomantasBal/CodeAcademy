try {
  // console.log(a + b);
  throw new TypeError();
} catch (err) {
  console.log(err);
  console.log("Error example");
}

console.log("code still runing here");
