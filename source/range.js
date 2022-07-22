/** Create an integer range between [0..<N-1>].
 * 
 * N is an integer passed to the Array() constructor.
 */
console.log([...new Array(10).keys()]);
// [
//   0, 1, 2, 3, 4,
//   5, 6, 7, 8, 9
// ]

// The range can be manipulated in various ways using the map method:

// Shifts:
console.log([...new Array(10).keys()].map(i => i + 1));
// [
//     1, 2, 3, 4,  5,
//     6, 7, 8, 9, 10
// ]

// Multiples:
console.log([...new Array(10).keys()].map(i => i * 2));
// [
//      0,  2,  4,  6,  8,
//     10, 12, 14, 16, 18
// ]

// The filter method can be used for similar effects:

// Evens:
console.log([...new Array(10).keys()].filter(i => i % 2 === 0));
// [ 0, 2, 4, 6, 8 ]

// Odds:
console.log([...new Array(10).keys()].filter(i => i % 2 === 1));
// [ 1, 3, 5, 7, 9 ]
