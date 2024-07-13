# testing-Git
This is my ci cd repro
let setOfUniqueArrays = new Set();

function addUniqueArray(arr) {
    // Convert array to a string representation
    let hash = arr.toString();
    
    // Check if the hash is already in the set
    if (!setOfUniqueArrays.has(hash)) {
        // Add the hash to the set
        setOfUniqueArrays.add(hash);
    }
}

// Add unique arrays
addUniqueArray([1, 2, 3]);
addUniqueArray([1, 2, 3]); // This will not be added again
addUniqueArray([4, 5, 6]);

// Convert set back to an array of arrays
let uniqueArrays = Array.from(setOfUniqueArrays).map(str => str.split(',').map(Number));

console.log(uniqueArrays); // Output: [ [ 1, 2, 3 ], [ 4, 5, 6 ] ]
console.log(uniqueArrays.length); // Output: 2
