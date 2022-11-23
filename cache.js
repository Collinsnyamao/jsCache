//Beginning of file
//This cache contains useful javascript functions to ease development



//Chunks an array into smaller arrays of a specified size.

//Uses Array.from() to create a new array, that fits the number of chunks that will be produced. Use Array.prototype.slice() to map each element of the new array to a chunk the length of size. If the original array can't be split evenly, the final chunk will contain the remaining elements.

const chunk = (arr, size) =>
    Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
        arr.slice(i * size, i * size + size)
    );


//Returns a random number in the specified range.
const randomNumberInRange = (min, max) => Math.random() * (max - min) + min;


//Splits values into two groups. If an element in filter is truthy, the corresponding element in the collection belongs to the first group; otherwise, it belongs to the second group.
const bifurcate = (arr, filter) =>
    arr.reduce((acc, val, i) => (acc[filter[i] ? 0 : 1].push(val), acc), [[], []]);



export default {
    chunk,
    randomNumberInRange,
    bifurcate
}