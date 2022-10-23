// O(m*n)
function* generateCartesianProduct(arr1, arr2) {
    for (let i = 0; i < arr1.length; ++i) {
        for (let j = 0; j < arr2.length; ++j) {
            yield [arr1[i], arr2[j]];
        }
    }
}

function getCartesianProduct(arr1, arr2) {
    return [...generateCartesianProduct(arr1, arr2)];
}

function flattenedCartesianProduct(arr1, arr2) {
    return getCartesianProduct(arr1, arr2)
        .map(a => a.flat(1));
}

function consecutiveFlatCartesianProduct(parts) {
    return parts.reduce((product, current) =>
        flattenedCartesianProduct(product, current), [[]]);
}

// Simple cartesian product of two arrays:
console.log(getCartesianProduct("a", ["b", "c"]));
// [
//     ['a', 'b'],
//     ['a', 'c']
// ]

// Simple cartesian product of three arrays:
console.log(consecutiveFlatCartesianProduct(['a', ['b', 'c'], 'd']));
// [
//     ['a', 'b', 'd'],
//     ['a', 'c', 'd']
// ]
console.log(consecutiveFlatCartesianProduct(['a', ['b', 'c'], ['d', 'e']]));
// [
//     ['a', 'b', 'd'],
//     ['a', 'b', 'e'],
//     ['a', 'c', 'd'],
//     ['a', 'c', 'e']
// ]

// Consecutive cartesian products of four arrays:
console.log(consecutiveFlatCartesianProduct(["a", ["b", "c"], "d", ["e", "f", "g"]]));
// [
//     ['a', 'b', 'd', 'e'],
//     ['a', 'b', 'd', 'f'],
//     ['a', 'b', 'd', 'g'],
//     ['a', 'c', 'd', 'e'],
//     ['a', 'c', 'd', 'f'],
//     ['a', 'c', 'd', 'g']
// ]

// O((n + n^2)/2)
function* generateSelfCartesianProduct(arr1) {
    for (let i = 0; i < arr1.length; ++i) {
        for (let j = i + 1; j < arr1.length; ++j) {
            yield [arr1[i], arr1[j]];
        }
    }
}

function getSelfCartesianProduct(arr1, arr2) {
    return [...generateSelfCartesianProduct(arr1, arr2)]
        .map(a => a.flat(1));
}

// Simple self cartesian product:
console.log(getSelfCartesianProduct(["e", "f", "g"]));
// [
//     ['e', 'f'],
//     ['e', 'g'],
//     ['f', 'g']
// ]

// Self cartesian product only works on single depth arrays, like vectors:
console.log(getSelfCartesianProduct("a", ["b", "c"]));
// []
