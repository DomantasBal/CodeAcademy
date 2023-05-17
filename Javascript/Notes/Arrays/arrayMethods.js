////////////////////////// ARRAY METHODS DESCRIPTIONS //////////////////////////

// 1. toString() - Returns a string representing the elements of an array.
// 2. toLocaleString() - Returns a string representing the elements of an array in a localized format.

// 3. sort() - Sorts the elements of an array in place.
// 4. filter() - Creates a new array with all elements that pass the test implemented by the provided function.
// 5. reverse() - Reverses the order of the elements in an array.

// 6. find() - Returns the value of the first element in an array that passes a provided test function.
// 7. includes() - Determines whether an array includes a certain value.
// 8. findIndex() - Returns the index of the first element in an array that passes a provided test function.
// 9. indexOf() - Returns the first index at which a given element can be found in the array, or -1 if it is not present.
// 10. lastIndexOf() - Returns the last index at which a given element can be found in the array, or -1 if it is not present.

// 11. concat() - Joins two or more arrays and returns a new array.
// 12. join() - Joins all elements of an array into a string.

// 13. splice() - Adds or removes elements from an array.
// 14. slice() - Returns a shallow copy of a portion of an array into a new array object selected from begin to end (end not included).

// 15. map() - Creates a new array with the results of calling a provided function on every element in the calling array.
// 16. flatMap() - Creates a new array by applying a function to each element of the array and then flattening the result into a new array.
// 17. reduce() - Applies a function against an accumulator and each element in the array to reduce it to a single value.
// 18. reduceRight() - Applies a function against an accumulator and each value of the array (from right-to-left) to reduce it to a single value.
// 19. forEach() - Calls a function for each element in the array.

// 20. push() - Adds one or more elements to the end of an array and returns the new length of the array.
// 21. pop() - Removes the last element from an array and returns that element.
// 22. shift() - Removes the first element from an array and returns that element.
// 23. unshift() - Adds one or more elements to the beginning of an array and returns the new length of the array.
// 24. fill() - Fills all the elements of an array with a static value.

// 25. some() - Checks if at least one element in an array passes a test.
// 26. every() - Checks if every element in an array passes a test.


////////////////////////// NOT SURE - CHECK LATER //////////////////////////
// copyWithin() - Copies a sequence of array elements within the array.
// entries() - Returns a new Array Iterator object that contains the key/value pairs for each index in the array.
// flat() - Creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
// keys() - Returns a new Array Iterator that contains the keys for each index in the array.
// values() - Returns a new Array Iterator that contains the values for each index in the array.




////////////////////////// INITIAL TEST ARRAYS //////////////////////////
let numbers = [1,2,3,4];
let words = ["Hello", "I", "am", "an", "array"];


// //MAP
// **** return new array  ****  //
// let result = numbers.map((value, index) => value *index)
// console.log(result);

// // Filter
// **** return new array  ****  //
// const even = numbers.filter((number)=> number %2 ==0);
// console.log(even);

// //SLICE
// **** (Index Start, Index End) ****  //
// const slice = numbers.slice(0,3);
// console.log(slice);
// console.log(numbers);

// //SPLICE 
// **** (Index, How much, Replace) ****  //
// const splice = numbers.splice(0,3);
// console.log(splice);
// console.log(numbers);


// //INCLUDES
// console.log(numbers.includes(48));




